import { MusicPlatfomTypes, SongType } from '../types/record.result.types';

export type DeviceType = 'ANDROID' | 'IPHONE' | 'WINDOWS' | 'MAC' | 'ANDROID';
export type OperatorType = ',' | ';' | '|';

// 접속 기기 정보 가져오기
const getDeviceInfo = (): DeviceType => {
  let agent_str = navigator.userAgent;
  // Android
  if (/Android|webOS|BlackBerry|IEMobile|Opera Mini/i.test(agent_str)) {
    console.log(`Android`);
    return 'ANDROID';
  }
  // Iphone
  if (/iPhone|iPad|iPod/i.test(agent_str)) {
    console.log(`Iphone`);
    return 'IPHONE';
  }
  // Windows
  if (/Windows/i.test(agent_str)) {
    return 'WINDOWS';
  }
  // MAC
  if (/MAC/i.test(agent_str)) {
    return 'MAC';
  }
  // 나머지는 임의로 안드로이드로 해놓겠음.
  return 'ANDROID';
};

// 디바이스 정보
const deviceInfo = getDeviceInfo();

export const melonClickListener = (songs: SongType[]) => {
  const uids = connectUid('melon', songs);

  if (deviceInfo == 'MAC') {
    redirectApp('MAC', 'melon', uids); // MAC
  } else if (deviceInfo == 'IPHONE') {
    redirectApp('IPHONE', 'melon', uids); // IPHONE
  } else if (deviceInfo == 'ANDROID') {
    redirectApp('ANDROID', 'melon', uids); // Android
  } else {
    redirectApp('WINDOWS', 'melon', uids); // WINDOWS
  }
};

export const genieClickListener = (songs: SongType[]) => {
  const uids = connectUid('genie', songs);

  if (deviceInfo == 'IPHONE') {
    redirectApp('IPHONE', 'genie', uids);
  } else if (deviceInfo == 'ANDROID') {
    redirectApp('ANDROID', 'genie', uids);
  } else {
    // 웹 버전
    const genie_link =
      'https://www.genie.co.kr/player/shareProcessV2?xgnm=' + uids;
    window.open(genie_link);
  }
};

export const bugsClickListener = (songs: SongType[]) => {
  const uids = connectUid('bugs', songs);

  if (deviceInfo == 'IPHONE') {
    redirectApp('IPHONE', 'bugs', uids);
  } else if (deviceInfo == 'ANDROID') {
    redirectApp('ANDROID', 'bugs', uids);
  } else {
    // 웹 버전
    const bugs_link = 'https://music.bugs.co.kr/newPlayer?trackId=' + uids;
    window.open(bugs_link);
  }
};

export const connectUid = (site: MusicPlatfomTypes, songs: SongType[]) => {
  let uids = '';
  let operator: OperatorType = ';';

  site === 'melon' && (operator = ',');
  site === 'genie' && (operator = ';');
  if (site === 'bugs') {
    deviceInfo === 'IPHONE' || deviceInfo === 'ANDROID'
      ? (operator = '|')
      : (operator = ',');
  }

  songs.forEach((song) => (uids += createSongUid(song, site, operator)));
  return uids;
};

const createSongUid = (
  song: SongType,
  site: MusicPlatfomTypes,
  operator: OperatorType,
) => {
  if (Object.keys(song).length && song.uid[site]) {
    return song.uid[site] + operator;
  }
  return '';
};

export const redirectApp = (
  device: DeviceType,
  app: MusicPlatfomTypes,
  uids: string,
) => {
  exeDeepLink(device, app, uids);
  checkInstallApp(device, app);
};

const checkInstallApp = (device: DeviceType, app: MusicPlatfomTypes) => {
  function clearTimers() {
    clearInterval(check);
    clearTimeout(timer);
  }

  function isHideWeb() {
    if (document.hidden) {
      clearTimers();
    }
  }
  const check = setInterval(isHideWeb, 200);

  const timer = setTimeout(function () {
    redirectStore(device, app);
  }, 500);
};

const redirectStore = (device: DeviceType, app: MusicPlatfomTypes) => {
  if (window.confirm('스토어로 이동하시겠습니까?')) {
    let url = '';
    if (app == 'melon') {
      device == 'MAC' &&
        (url = `https://apps.apple.com/kr/app/%EB%A9%9C%EB%A1%A0-melon/id1236050766?mt=12`); //mac
      device == 'IPHONE' &&
        (url = `https://apps.apple.com/kr/app/%EB%A9%9C%EB%A1%A0-melon/id415597317`); //iphone
      device == 'ANDROID' &&
        (url = `https://play.google.com/store/apps/details?id=com.iloen.melon`); // ANDROID
      device == 'WINDOWS' &&
        (url = `https://www.melon.com/customer/serviceintro/index.htm`); //WINDOWS
    } else if (app == 'bugs') {
      device == 'IPHONE' &&
        (url = `https://apps.apple.com/kr/app/%EB%B2%85%EC%8A%A4-bugs/id348555322`); // iphone
      device == 'ANDROID' &&
        (url = `https://play.google.com/store/apps/details?id=com.neowiz.android.bugs`); // ANDROID
    } else if (app == 'genie') {
      device == 'IPHONE' &&
        (url = `https://apps.apple.com/kr/app/%EC%A7%80%EB%8B%88%EB%AE%A4%EC%A7%81-genie/id858266085?l`); // iphone
      device == 'ANDROID' &&
        (url = `https://play.google.com/store/apps/details?id=com.ktmusic.geniemusic`); // ANDROID
    }

    window.open(url);
  }
};

const exeDeepLink = (
  device: DeviceType,
  app: MusicPlatfomTypes,
  uids: string,
) => {
  let url = '';

  if (app == 'melon') {
    device == 'MAC' && (url = 'melonplayer://play?menuid=0&cflag=1&cid=');
    device == 'IPHONE' && (url = 'meloniphone://play/?ctype=1&menuid=0&cid=');
    device == 'ANDROID' && (url = 'melonapp://play?ctype=1&menuid=0&cid=');
    device == 'WINDOWS' && (url = 'melonapp://play?cType=1&cList=');
  } else if (app == 'bugs') {
    device == 'IPHONE' &&
      (url = 'bugs3://app/tracks/lists?title=전체듣기&miniplay=Y&track_ids=');
    device == 'ANDROID' &&
      (url = 'bugs3://app/tracks/lists?title=전체듣기&miniplay=Y&track_ids=');
  } else if (app == 'genie') {
    device == 'IPHONE' &&
      (url = `ktolleh00167://landing/?landing_type=31&landing_target=`);
    device == 'ANDROID' &&
      (url = 'cromegenie://scan/?landing_type=31&landing_target=');
  }

  url += uids;
  location.href = url;
};
