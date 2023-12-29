import { PlaylistMaker } from '@components/recordResult/libs/playlistMaker';
import { PlaylistClient } from '@components/recordResult/api/playlistClient';
import { TagType } from '@components/recordResult/types/record.result.types';

//나중에 usePlaylist 훅 테스트로 다시 만들 것
describe('playlist lib', () => {
  it('그룹 태그를 넣으면 그룹에 해당하는 노래만 제공', async () => {
    const playlist = new PlaylistMaker(
      new Set(['NCT DREAM']),
      new PlaylistClient(true),
    );
    const list = await playlist.create();

    expect(list.every((song) => song.artist === 'NCT DREAM')).toBe(true);
  });

  it('방구석콘서트 태그를 넣으면 그룹에 해당하는 노래만 제공', async () => {
    const playlist = new PlaylistMaker(
      new Set(['방구석콘서트']),
      new PlaylistClient(true),
    );
    const list = await playlist.create();

    expect(list.every((song) => song.tags.includes('방구석콘서트'))).toBe(true);
  });

  it('일반 태그들을 넣으면 해당 태그가 하나라도 존재하는 노래만 제공', async () => {
    const tags: TagType[] = ['봄노래', '여름노래', '가을노래'];
    const playlist = new PlaylistMaker(new Set(tags), new PlaylistClient(true));
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
