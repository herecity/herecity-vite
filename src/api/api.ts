import axios from 'axios';

export const baseURLForTest = 'http://url-for-test';

export const client = axios.create({});

export const testClient = axios.create({
  baseURL: baseURLForTest,
});

if (process.env.NODE_ENV === 'development') {
  if (typeof window === 'undefined') {
    client({ baseURL: baseURLForTest });
  }
}
