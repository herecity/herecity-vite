import axios from 'axios';

export const baseURLForTest = 'http://url-for-test';

export const client = axios.create();

export const testClient = axios.create({
  baseURL: baseURLForTest,
});
