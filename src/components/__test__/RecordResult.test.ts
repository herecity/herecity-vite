import { Playlist } from '@components/recordResult/libs/playlist';
import { PlaylistClient } from '@components/recordResult/api/playlistClient';
import { TagType } from '@components/recordResult/types/record.result.types';

describe('usePlaylist', () => {
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

//나중에 usePlaylist 훅 테스트로 다시 만들 것
describe('playlist lib', () => {
  it('그룹 태그를 넣으면 그룹에 해당하는 노래만 제공', async () => {
    const playlist = new Playlist(
      new Set(['NCT DREAM']),
      new PlaylistClient(true),
    );
    const list = await playlist.create();

    expect(list.every((song) => song.artist === 'NCT DREAM')).toBe(true);
  });

  it('방구석콘서트 태그를 넣으면 그룹에 해당하는 노래만 제공', async () => {
    const playlist = new Playlist(
      new Set(['방구석콘서트']),
      new PlaylistClient(true),
    );
    const list = await playlist.create();

    expect(list.every((song) => song.tags.includes('방구석콘서트'))).toBe(true);
  });

  it('일반 태그들을 넣으면 해당 태그가 하나라도 존재하는 노래만 제공', async () => {
    const tags: TagType[] = ['봄노래', '여름노래', '가을노래'];
    const playlist = new Playlist(new Set(tags), new PlaylistClient(true));
    const list = await playlist.create();

    expect(
      list.every((song) => {
        let check = false;
        for (let tag of song.tags) {
          if (tags.includes(tag)) {
            check = true;
            break;
          }
        }
        return check;
      }),
    ).toBe(true);
  });
});
