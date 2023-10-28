/*
  선택된 태그들에 해당하는 노래 검색해서 보여주기
  1. json 에서 데이터 가져오기
  2. 선택된 태그들 localStorage에서 가져오기
  3. 태그 우선 순위에 따라 노래 고르기 ( 그룹별, 콘서트 )
  4. 찾은 노래들 보여주기
*/

import { SongType } from '../types/record.result.types';

let tags: string[] = []; // 사용자가 선택한 모든 태그들
let remainTags: string[] = []; // 콘서트, 그룹, 타이틀 제외한 태그들
let songs: SongType[] = []; // 태그 합집합 노래들
let allTaggedSongs: SongType[] = []; // 태그 교집합 노래들

function resetItems() {
  tags = []; // 사용자가 선택한 모든 태그들
  remainTags = []; // 콘서트, 그룹, 타이틀 제외한 태그들
  songs = []; // 태그 합집합 노래들
  allTaggedSongs = []; // 태그 교집합 노래들
}

// 1. json 에서 데이터 가져오는 함수들
async function fetchNCT127() {
  return fetch('/assets/data/songs/nct127.json').then((response) =>
    response.json(),
  );
}

async function fetchNCTDREAM() {
  return fetch('/assets/data/songs/nctDream.json').then((response) =>
    response.json(),
  );
}

async function fetchNCTU() {
  return fetch('/assets/data/songs/nctU.json').then((response) =>
    response.json(),
  );
}

async function fetchWAYV() {
  return fetch('/assets/data/songs/wayV.json').then((response) =>
    response.json(),
  );
}

async function fetchSOLO() {
  return fetch('/assets/data/songs/solo.json').then((response) =>
    response.json(),
  );
}

async function fetchConcert() {
  return fetch('/assets/data/songs/concert.json').then((response) =>
    response.json(),
  );
}

// 2. 선택된 태그들 localStorage에서 가져오기
function loadTags(tags: string[]) {
  tags = [...tags];
  remainTags = [...tags];

  // console.log(`[loadTags] 선택 태그는 ${tagCount} 개 - ${tags} `);
}

/**
 * 3. 태그 우선 순위에 따라 노래 고르기 ( 그룹별, 콘서트 )
 *
 * 1) 콘서트 태그 있으면, 콘서트만 패치
 *    -> 그룹 태그 있는지
 * 2) 그룹 태그 있으면, 해당 그룹만 패치
 * 3) 위 태그들 없으면, 전부 패치
 * 4) 타이틀 태그 있으면, 패치된 노래들 중 우선 분류
 *
 * => 합집합 태그 노래 (songs), 교집합 태그 노래 (allTaggedSongs)
 */

// 처리한 태그 제거 (remainTags)
function removeTagItem(item: string) {
  const index = remainTags.indexOf(item);
  if (index !== -1) {
    remainTags.splice(index, 1);
  }
}

// 콘서트 태그 처리 함수
function isConcertInTag() {
  const concertTag = '방구석콘서트';
  return tags.includes(concertTag);
}

async function handleConcertTag() {
  const concertSongs = await fetchConcert();
  if (isGroupInTag()) {
    const taggedGroups = whichGroup();
    taggedGroups.forEach((group) => songs.push(...concertSongs[group]));
    songs.forEach((song) => (song.tagCnt = 2));
    sortByRelease();
    allTaggedSongs = songs;
    return;
  }
  songs = [...concertSongs['NCT 127'], ...concertSongs['NCT DREAM']];
  songs.forEach((song) => (song.tagCnt = 1));
  removeTagItem('방구석콘서트');
  sortByRelease();
  allTaggedSongs = songs;
}

// 그룹 태그 처리 함수
function isGroupInTag() {
  const groupTag = ['NCT 127', 'NCT DREAM', 'WayV', 'NCT U'];
  const groupTagCnt = tags.filter((tag) => groupTag.includes(tag)).length;
  return groupTagCnt ? true : false;
}

function whichGroup() {
  const groupTag = ['NCT 127', 'NCT DREAM', 'WayV', 'NCT U'];
  return tags.filter((tag) => groupTag.includes(tag));
}

async function handleGroupTag() {
  const taggedGroups = whichGroup();
  if (taggedGroups.includes('NCT 127')) {
    songs.push(...(await fetchNCT127())['NCT 127']);
    removeTagItem('NCT 127');
  }
  if (taggedGroups.includes('NCT DREAM')) {
    songs.push(...(await fetchNCTDREAM())['NCT DREAM']);
    removeTagItem('NCT DREAM');
  }
  if (taggedGroups.includes('NCT U')) {
    songs.push(...(await fetchNCTU())['NCT U']);
    removeTagItem('NCT U');
  }
  if (taggedGroups.includes('WayV')) {
    songs.push(...(await fetchWAYV())['WayV']);
    removeTagItem('WayV');
  }
}

// 모든 파일 패치
async function fetchAllData() {
  songs.push(...(await fetchNCT127())['NCT 127']);
  songs.push(...(await fetchNCTDREAM())['NCT DREAM']);
  songs.push(...(await fetchNCTU())['NCT U']);
  songs.push(...(await fetchWAYV())['WayV']);
  songs.push(...(await fetchSOLO())['doyoung']);
  songs.push(...(await fetchSOLO())['taeil']);
  songs.push(...(await fetchSOLO())['mark']);
  songs.push(...(await fetchSOLO())['taeyong']);
  songs.push(...(await fetchSOLO())['ten']);
  songs.push(...(await fetchSOLO())['haechan']);
}

// 콘서트, 그룹, 타이틀 제외 태그 (remainTags) 함수 처리
function handleOtherTags() {
  let handledSongs: SongType[] = [];
  songs.forEach((song) => {
    // 태그 검사
    let count = 0;
    remainTags.forEach((tag) => {
      if (song.tags.includes(tag)) {
        if (count === 0) {
          handledSongs.push(song);
        }
        count++;
      }
    });
    song.tagCnt == undefined ? (song.tagCnt = count) : (song.tagCnt += count);

    // 모든 태그에 걸리는 노래
    if (count === remainTags.length) {
      allTaggedSongs.push(song);
    }
  });
  songs = handledSongs;
}

// 태그 처리 함수
async function handleTags() {
  if (isConcertInTag()) {
    await handleConcertTag();
    // console.log('CONCERT');
    return;
  }
  if (isGroupInTag()) {
    await handleGroupTag();
    songs.forEach((song) => (song.tags.length = 1));
    // console.log(`GROUP`);
  }
  if (songs.length === 0) {
    await fetchAllData();
  }
  if (remainTags.length === 0) {
    allTaggedSongs = songs;
    // console.log(`태그끝`);
    return;
  }
  handleOtherTags();
}

// (태그 수 -> 발매일순) 내림차순 정렬
function sortByRelease() {
  const sortFunction = (a: SongType, b: SongType) => {
    let a_uid = parseInt(a.uid['melon']);
    let b_uid = parseInt(b.uid['melon']);
    let a_tCnt = a.tagCnt ?? 0;
    let b_tCnt = b.tagCnt ?? 0;
    if (a_tCnt < b_tCnt) return 1;
    if (a_tCnt > b_tCnt) return -1;
    if (a_uid < b_uid) return 1;
    if (a_uid > b_uid) return -1;
    return 0;
  };

  songs.sort(sortFunction);
  allTaggedSongs.sort((a, b) => sortFunction(a, b));
}

export async function startTagSearch(tags: string[]) {
  resetItems();
  loadTags(tags);
  await handleTags();
  sortByRelease();
  return songs;
}
