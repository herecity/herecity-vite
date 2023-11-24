import { SongFile } from '@components/recordResult/api/playlistClient';
import { HttpResponse, http } from 'msw';
import {
  recordResultConcertData,
  recordResultNCT127Data,
  recordResultNCTDreamData,
  recordResultNCTUData,
  recordResultSoloData,
  recordResultWayVData,
} from './data/recordResultData';
import { baseURLForTest } from '@api/api';

export const recordResultHandlers = [
  http.get(`${baseURLForTest}${SongFile['NCT 127']}`, () => {
    return HttpResponse.json(recordResultNCT127Data);
  }),
  http.get(`${baseURLForTest}${SongFile['NCT DREAM']}`, () => {
    return HttpResponse.json(recordResultNCTDreamData);
  }),
  http.get(`${baseURLForTest}${SongFile['NCT U']}`, () => {
    return HttpResponse.json(recordResultNCTUData);
  }),
  http.get(`${baseURLForTest}${SongFile['WayV']}`, () => {
    return HttpResponse.json(recordResultWayVData);
  }),
  http.get(`${baseURLForTest}${SongFile['SOLO']}`, () => {
    return HttpResponse.json(recordResultSoloData);
  }),

  http.get(`${baseURLForTest}${SongFile['방구석콘서트']}`, () => {
    return HttpResponse.json(recordResultConcertData);
  }),
];
