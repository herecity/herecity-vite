import { SongFile } from '@components/recordResult/api/playlistClient';
import { HttpResponse, http } from 'msw';
import { recordResultNCT127Data } from './data/recordResultData';

export const recordResultHandlers = [
  http.get(SongFile['NCT 127'], () => {
    return HttpResponse.text(JSON.stringify(recordResultNCT127Data));
  }),
];
