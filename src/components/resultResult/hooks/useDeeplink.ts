import { useCallback } from 'react';
import {
  DeepLinkType,
  DeviceType,
  MusicPlatfomTypes,
  MusicPlatformOperatorType,
  SongType,
  StoreLinkType,
} from '../types/record.result.types';

export function useDeeplink(device: DeviceType) {
  const musicAppClickListener = useCallback(
    (songs: SongType[], app: MusicPlatfomTypes) => {
      redirectApp(app, connectUid(app, songs));
    },
    [],
  );

  const connectUid = (musicPlatform: MusicPlatfomTypes, songs: SongType[]) => {
    return songs
      .map((song) => song.uid[musicPlatform])
      .join(platformOperator[musicPlatform][device]);
  };

  const redirectApp = (app: MusicPlatfomTypes, uids: string) => {
    exeDeepLink(app, uids);
    checkInstallApp(app);
  };

  const checkInstallApp = (app: MusicPlatfomTypes) => {
    setTimeout(() => {
      if (!document.hidden) {
        redirectStore(app);
      }
    }, 500);
  };

  const redirectStore = (app: MusicPlatfomTypes) => {
    if (window.confirm('스토어로 이동하시겠습니까?')) {
      window.open(storeLink[app][device]);
    }
  };

  const exeDeepLink = (app: MusicPlatfomTypes, uids: string) => {
    location.href = deepLink[app][device] + uids;
  };

  return {
    musicAppClickListener,
  };
}

const platformOperator: MusicPlatformOperatorType = {
  melon: {
    IPHONE: ',',
    ANDROID: ',',
    MAC: ',',
    WINDOWS: ',',
  },
  genie: {
    IPHONE: ';',
    ANDROID: ';',
    MAC: ';',
    WINDOWS: ';',
  },
  bugs: {
    IPHONE: '|',
    ANDROID: '|',
    MAC: ',',
    WINDOWS: ',',
  },
};

const storeLink: StoreLinkType = {
  melon: {
    MAC: `https://apps.apple.com/kr/app/%EB%A9%9C%EB%A1%A0-melon/id1236050766?mt=12`,
    IPHONE: `https://apps.apple.com/kr/app/%EB%A9%9C%EB%A1%A0-melon/id415597317`,
    ANDROID: `https://play.google.com/store/apps/details?id=com.iloen.melon`,
    WINDOWS: `https://www.melon.com/customer/serviceintro/index.htm`,
  },
  bugs: {
    IPHONE: `https://apps.apple.com/kr/app/%EB%B2%85%EC%8A%A4-bugs/id348555322`,
    ANDROID: `https://play.google.com/store/apps/details?id=com.neowiz.android.bugs`,
    MAC: 'https://music.bugs.co.kr/newPlayer?trackId=',
    WINDOWS: 'https://music.bugs.co.kr/newPlayer?trackId=',
  },
  genie: {
    IPHONE: `https://apps.apple.com/kr/app/%EC%A7%80%EB%8B%88%EB%AE%A4%EC%A7%81-genie/id858266085?l`,
    ANDROID: `https://play.google.com/store/apps/details?id=com.ktmusic.geniemusic`,
    MAC: 'https://www.genie.co.kr/player/shareProcessV2?xgnm=',
    WINDOWS: 'https://www.genie.co.kr/player/shareProcessV2?xgnm=',
  },
};

const deepLink: DeepLinkType = {
  melon: {
    MAC: 'melonplayer://play?menuid=0&cflag=1&cid=',
    IPHONE: 'meloniphone://play/?ctype=1&menuid=0&cid=',
    ANDROID: 'melonapp://play?ctype=1&menuid=0&cid=',
    WINDOWS: 'melonapp://play?cType=1&cList=',
  },
  bugs: {
    IPHONE: 'bugs3://app/tracks/lists?title=전체듣기&miniplay=Y&track_ids=',
    ANDROID: 'bugs3://app/tracks/lists?title=전체듣기&miniplay=Y&track_ids=',
    MAC: 'https://music.bugs.co.kr/newPlayer?trackId=',
    WINDOWS: 'https://music.bugs.co.kr/newPlayer?trackId=',
  },
  genie: {
    IPHONE: 'ktolleh00167://landing/?landing_type=31&landing_target=',
    ANDROID: 'cromegenie://scan/?landing_type=31&landing_target=',
    MAC: 'https://www.genie.co.kr/player/shareProcessV2?xgnm=',
    WINDOWS: 'https://www.genie.co.kr/player/shareProcessV2?xgnm=',
  },
};
