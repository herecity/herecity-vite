import { Playlist } from '@components/recordResult/utils/playlist';

import { StubPlaylistClient } from './stub_playlist_client';
jest.mock('@components/recordResult/api/playlistClient');

describe('usePlaylist', () => {
  it('NCT 127 키워드를 넣으면 ', async () => {
    const playlistClient = new StubPlaylistClient();
    const playlist = new Playlist(new Set(['NCT 127']), playlistClient);
    const list = await playlist.create();

    expect(list.every((song) => song.artist === 'NCT 127')).toBe(true);
  });

  // it('NCT 127 키워드를 넣으면 ', async () => {
  //   const playlist = new Playlist(new Set(['NCT 127']));
  //   const list = await playlist.create();

  //   expect(list.every((song) => song.artist === 'NCT 127')).toBe(true);
  // });

  /**
   * 1. taglist를 인자로 받는다
   * 2. taglist의 크기가 0이면 로딩을 멈추고 기본값을 기본값(빈배열)을 리턴한다
   * 3. tag가 존재하면 playlistClient로 플레이리스트를 생성한다
   * 4. 플레이리스트 생성이 완료되면 playlist를 업데이트 한다.
   * 5. 로딩을 업데이트 한다
   */
  it('tagList의 크기가 0이면 빈 배열을 리턴한다', () => {
    expect('test').toBe('test');
  });

  it('tag가 존재하면 생성된 플레이리스트를 리턴한다', () => {});

  it('작업이 끝나면 loading 상태를 업데이트 한다', () => {});
});
