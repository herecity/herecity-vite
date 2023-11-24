import {
  ArtistType,
  SongType,
} from '@components/recordResult/types/record.result.types';

type TestDummyDataType = { [songList: string]: SongType[] };
type TestConcertDummyDataType = Partial<{ [artist in ArtistType]: SongType[] }>;

export const recordResultNCT127Data: TestDummyDataType = {
  songList: [
    {
      title: 'Faster',
      artist: 'NCT 127',
      album: '질주 (2 Baddies) - The 4th Album',
      image:
        'https://image.bugsm.co.kr/album/images/200/204931/20493129.jpg?version=20221014002823.0',
      uid: { bugs: '32646086', melon: '35640847', genie: '98302345' },
      tags: [
        '운동할때',
        '월요병퇴치',
        '신나는불금',
        '밤샘노동요',
        '내적댄스',
        '스트레스아웃',
        '자신감뿜뿜',
        '마라네오',
        '비트맛집',
      ],
      URL_dance: 'https://www.youtube.com/watch?v=6gYZo3oEMG0',
    },
    {
      title: '질주 (2 Baddies)',
      artist: 'NCT 127',
      album: '질주 (2 Baddies) - The 4th Album',
      image:
        'https://image.bugsm.co.kr/album/images/200/204931/20493129.jpg?version=20221014002823.0',
      uid: { bugs: '32646087', melon: '35640848', genie: '98302346' },
      tags: [
        '운동할때',
        '출근길에',
        '월요병퇴치',
        '신나는불금',
        '밤샘노동요',
        '내적댄스',
        '스트레스아웃',
        '자신감뿜뿜',
        '마라네오',
        '비트맛집',
        '수능금지곡',
        'ONLYTITLE',
      ],
      URL_mv: 'https://www.youtube.com/watch?v=FRilMXZqNhA',
      URL_dance: 'https://www.youtube.com/watch?v=PpTkMJoHWBI',
      URL_tv: 'https://www.youtube.com/watch?v=lxSKQ6y9KJA',
    },
    {
      title: 'Time Lapse',
      artist: 'NCT 127',
      album: '질주 (2 Baddies) - The 4th Album',
      image:
        'https://image.bugsm.co.kr/album/images/200/204931/20493129.jpg?version=20221014002823.0',
      uid: { bugs: '32646088', melon: '35640849', genie: '98302347' },
      tags: [
        '잠들기전',
        '새벽감성',
        '비가주룩',
        '이별후유증',
        '울고싶은날',
        '치명섹시',
        '몽환적인',
      ],
    },
    {
      title: '불시착 (Crash Landing)',
      artist: 'NCT 127',
      album: '질주 (2 Baddies) - The 4th Album',
      image:
        'https://image.bugsm.co.kr/album/images/200/204931/20493129.jpg?version=20221014002823.0',
      uid: { bugs: '32646089', melon: '35640850', genie: '98302348' },
      tags: [
        '겨울노래',
        '나른한오후',
        '잠들기전',
        '새벽감성',
        '설렘가득LOVE',
        '달콤달콤',
        '편안잔잔',
        '몽환적인',
        '치명섹시',
      ],
    },
    {
      title: 'Designer',
      artist: 'NCT 127',
      album: '질주 (2 Baddies) - The 4th Album',
      image:
        'https://image.bugsm.co.kr/album/images/200/204931/20493129.jpg?version=20221014002823.0',
      uid: { bugs: '32646090', melon: '35640851', genie: '98302349' },
      tags: [
        '나른한오후',
        '잠들기전',
        '공부할때',
        '산책할때',
        '설렘가득LOVE',
        '집으로가는길',
        '달콤달콤',
        '편안잔잔',
        '몽환적인',
      ],
    },
    {
      title: '윤슬 (Gold Dust)',
      artist: 'NCT 127',
      album: '질주 (2 Baddies) - The 4th Album',
      image:
        'https://image.bugsm.co.kr/album/images/200/204931/20493129.jpg?version=20221014002823.0',
      uid: { bugs: '32646091', melon: '35640852', genie: '98302350' },
      tags: [
        '가을노래',
        '잠들기전',
        '새벽감성',
        '비가주룩',
        '집으로가는길',
        '이별후유증',
        '울고싶은날',
        '힐링이필요해',
        '나만알기아까운',
        '편안잔잔',
        '몽환적인',
      ],
    },
  ],
};

export const recordResultNCTDreamData: TestDummyDataType = {
  songList: [
    {
      title: 'Candy',
      artist: 'NCT DREAM',
      album: 'Candy - Winter Special Mini Album',
      image:
        'https://image.bugsm.co.kr/album/images/200/205351/20535111.jpg?version=20221227005220.0',
      uid: { bugs: '32731774', melon: '35931532', genie: '99512830' },
      tags: [
        '겨울노래',
        '굿모닝',
        '햇살가득',
        '산책할때',
        '출근길에',
        '밤샘노동요',
        '설렘가득LOVE',
        '기분전환',
        '내적댄스',
        '해피바이러스',
        '상큼청량',
        '달콤달콤',
      ],
      URL_mv: 'https://www.youtube.com/watch?v=zuoSn3ObMz4',
      URL_dance: 'https://www.youtube.com/watch?v=jqfMIUKoIaM',
      URL_tv: 'https://www.youtube.com/watch?v=7avTpOILp1U',
    },
    {
      title: 'Graduation',
      artist: 'NCT DREAM',
      album: 'Candy - Winter Special Mini Album',
      image:
        'https://image.bugsm.co.kr/album/images/200/205351/20535111.jpg?version=20221227005220.0',
      uid: { bugs: '32731775', melon: '35931533', genie: '99512831' },
      tags: [
        '겨울노래',
        '잠들기전',
        '새벽감성',
        '비가주룩',
        '눈이펑펑',
        '집으로가는길',
        '이별후유증',
        '울고싶은날',
        '자신감뿜뿜',
        '나만알기아까운',
        '힐링이필요해',
        '편안잔잔',
        '몽환적인',
        '이지리스닝',
      ],
      URL_tv: 'https://www.youtube.com/watch?v=Sa_NeCgekzs',
    },
    {
      title: 'Tangerine Love (Favorite)',
      artist: 'NCT DREAM',
      album: 'Candy - Winter Special Mini Album',
      image:
        'https://image.bugsm.co.kr/album/images/200/205351/20535111.jpg?version=20221227005220.0',
      uid: { bugs: '32731776', melon: '35931534', genie: '99512832' },
      tags: [
        '겨울노래',
        '나른한오후',
        '공부할때',
        '설렘가득LOVE',
        '달콤달콤',
        '몽환적인',
      ],
    },
  ],
};

export const recordResultNCTUData: TestDummyDataType = {
  songList: [
    {
      title: "Universe (Let's Play Ball)",
      artist: 'NCT U',
      album: 'NCT The 3rd Album ‘Universe’',
      image:
        'https://image.bugsm.co.kr/album/images/200/40684/4068401.jpg?version=20211210180009.0',
      uid: { bugs: '6138842', genie: '95211182', melon: '34356045' },
      tags: [
        '운동할때',
        '월요병퇴치',
        '신나는불금',
        '밤샘노동요',
        '자신감뿜뿜',
        '전투력상승',
        '스트레스아웃',
        '마라네오',
        '비트맛집힙합',
        'ONLYTITLE',
        'NCT 2021',
      ],
      URL_mv: 'https://www.youtube.com/watch?v=SCK8yBLqQJc',
      URL_dance: 'https://www.youtube.com/watch?v=HC_P7elcEHs',
    },
    {
      title: 'Make A Wish (Birthday Song)',
      artist: 'NCT U',
      album: 'NCT RESONANCE Pt. 1 - The 2nd Album',
      image:
        'https://image.bugsm.co.kr/album/images/50/9975/997576.jpg?version=20201019181153.0',
      uid: { bugs: '5996469', genie: '90997771', melon: '32979566' },
      tags: [
        '월요병퇴치',
        '신나는불금',
        '밤샘노동요',
        '행운을부르는',
        '내적댄스',
        '자신감뿜뿜',
        '전투력상승',
        '마라네오',
        '비트맛집',
        '수능금지곡',
        'ONLYTITLE',
      ],
      URL_mv: 'https://www.youtube.com/watch?v=tyrVtwE8Gv0',
      URL_dance: 'https://www.youtube.com/watch?v=G62oeL14rQw',
    },
    {
      title: "90's Love",
      artist: 'NCT U',
      album: 'NCT RESONANCE Pt. 2 - The 2nd Album',
      image:
        'https://image.bugsm.co.kr/album/images/50/203624/20362488.jpg?version=20201208002529.0',
      uid: { bugs: '32077552', genie: '91458621', melon: '33082145' },
      tags: [
        '겨울노래',
        '운동할때',
        '출근길에',
        '월요병퇴치',
        '신나는불금',
        '밤샘노동요',
        '내적댄스',
        '스트레스아웃',
        '자신감뿜뿜',
        '전투력상승',
        '마라네오',
        '비트맛집',
        'ONLYTITLE',
      ],
      URL_mv: 'https://www.youtube.com/watch?v=A5H8zBb3iao',
      URL_dance: 'https://www.youtube.com/watch?v=295e_JPor54',
      URL_tv: 'https://www.youtube.com/watch?v=_-2oGW9msXg',
    },
  ],
};

export const recordResultSoloData: TestDummyDataType = {
  songList: [
    {
      title: 'COOL',
      artist: '도영 (DOYOUNG), 키 (KEY)',
      album: 'COOL - 38사기동대 OST Part.2',
      uid: { melon: '8262106', genie: '86427549', bugs: '30315486' },
      image:
        'https://image.bugsm.co.kr/album/images/50/200445/20044578.jpg?version=20210901002229.0',
      tags: [
        '운동할때',
        '월요병퇴치',
        '밤샘노동요',
        '자신감뿜뿜',
        '전투력상승',
        'OST',
      ],
    },
    {
      title: 'COOL (Inst.)',
      artist: '도영 (DOYOUNG), 키 (KEY)',
      album: 'COOL - 38사기동대 OST Part.2',
      uid: { melon: '8262107', genie: '86427550', bugs: '30315487' },
      image:
        'https://image.bugsm.co.kr/album/images/50/200445/20044578.jpg?version=20210901002229.0',
      tags: ['NO_TAG'],
    },
    {
      title: 'First Christmas',
      artist: '도영 (DOYOUNG), 조이 (JOY)',
      album: '인기가요 뮤직크러쉬 Part.4',
      uid: { melon: '30157785', genie: '86818333', bugs: '30489582' },
      image:
        'https://image.bugsm.co.kr/album/images/50/200726/20072639.jpg?version=20210902141447.0',
      tags: [
        '겨울노래',
        '눈이펑펑',
        '산책할때',
        '드라이브',
        '설렘가득LOVE',
        '기분전환',
        '해피바이러스',
        '상큼청량',
        '달콤달콤',
        'SPECIAL',
      ],
    },
  ],
};

export const recordResultWayVData: TestDummyDataType = {
  songList: [
    {
      title: 'Phantom',
      artist: 'WayV',
      album: 'Phantom - The 4th Mini Album',
      image:
        'https://image.bugsm.co.kr/album/images/200/40825/4082570.jpg?version=20230109112002.0',
      uid: { bugs: '6186020', melon: '35959949', genie: '99637871' },
      tags: [
        '나른한오후',
        '새벽감성',
        '운동할때',
        '신나는불금',
        '밤샘노동요',
        '자신감뿜뿜',
        '전투력상승',
        '마라네오',
        '치명섹시',
        '몽환적인',
      ],
      URL_mv: 'https://www.youtube.com/watch?v=_1NuPFnuvEc',
      URL_tv: 'https://www.youtube.com/watch?v=y3w5mFejkic',
    },
    {
      title: 'Diamonds Only',
      artist: 'WayV',
      album: 'Phantom - The 4th Mini Album',
      image:
        'https://image.bugsm.co.kr/album/images/200/40825/4082570.jpg?version=20230109112002.0',
      uid: { bugs: '6185488', melon: '35959950', genie: '99637872' },
      tags: [
        '나른한오후',
        '새벽감성',
        '운동할때',
        '신나는불금',
        '밤샘노동요',
        '내적댄스',
        '자신감뿜뿜',
        '전투력상승',
        '비트맛집',
        '치명섹시',
        '몽환적인',
      ],
    },
    {
      title: 'Good Life',
      artist: 'WayV',
      album: 'Phantom - The 4th Mini Album',
      image:
        'https://image.bugsm.co.kr/album/images/200/40825/4082570.jpg?version=20230109112002.0',
      uid: { bugs: '6186021', melon: '35959951', genie: '99637873' },
      tags: [
        '겨울노래',
        '나른한오후',
        '잠들기전',
        '새벽감성',
        '공부할때',
        '산책할때',
        '집으로가는길',
        '울고싶은날',
        '기분전환',
        '나만알기아까운',
        '힐링이필요해',
        '편안잔잔',
        '이지리스닝',
      ],
    },
  ],
};

export const recordResultConcertData: TestConcertDummyDataType = {
  'NCT 127': [
    {
      title: 'Regular (Korean Ver.)',
      artist: 'NCT 127',
      album: 'NEO CITY : SEOUL - The Origin - The 1st Live Album',
      image:
        'https://image.bugsm.co.kr/album/images/50/202841/20284180.jpg?version=20191025002406.0',
      uid: { bugs: '31730922', genie: '89481504', melon: '32119797' },
      tags: ['방구석콘서트'],
    },
    {
      title: '신기루 (Fly Away With Me)',
      artist: 'NCT 127',
      album: 'NEO CITY : SEOUL - The Origin - The 1st Live Album',
      image:
        'https://image.bugsm.co.kr/album/images/50/202841/20284180.jpg?version=20191025002406.0',
      uid: { bugs: '31730914', genie: '89481496', melon: '32119803' },
      tags: ['방구석콘서트'],
    },
    {
      title: 'Welcome To My Playground',
      artist: 'NCT 127',
      album: 'NEO CITY : SEOUL - The Origin - The 1st Live Album',
      image:
        'https://image.bugsm.co.kr/album/images/50/202841/20284180.jpg?version=20200423182722.0',
      uid: { bugs: '31730932', genie: '89481514', melon: '32119816' },
      tags: ['방구석콘서트'],
    },
  ],
  'NCT DREAM': [
    {
      title: "Don't Need Your Love",
      artist: 'NCT DREAM',
      album: 'THE DREAM SHOW - The 1st Live Album',
      image:
        'https://image.bugsm.co.kr/album/images/50/203301/20330132.jpg?version=20200625230541.0',
      uid: { bugs: '31935884', melon: '32655313', genie: '90348588' },
      tags: ['방구석콘서트'],
    },
    {
      title: '같은 시간 같은 자리 (Walk you home)',
      artist: 'NCT DREAM',
      album: 'THE DREAM SHOW - The 1st Live Album',
      image:
        'https://image.bugsm.co.kr/album/images/50/203301/20330132.jpg?version=20200625220706.0',
      uid: { bugs: '31935878', melon: '32655324', genie: '90348582' },
      tags: ['방구석콘서트'],
    },
    {
      title: 'Trigger the fever',
      artist: 'NCT DREAM',
      album: 'THE DREAM SHOW - The 1st Live Album',
      image:
        'https://image.bugsm.co.kr/album/images/50/203301/20330132.jpg?version=20200625232104.0',
      uid: { bugs: '31935886', melon: '32655317', genie: '90348590' },
      tags: ['방구석콘서트'],
    },
  ],
};
