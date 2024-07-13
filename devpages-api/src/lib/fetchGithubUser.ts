import axios from 'axios';

export const gitAxios = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Accept: 'application/vnd.github+json',

    Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,

    'Content-Type': 'application/json',
    'X-GitHub-Api-Version': '2022-11-28',
  },
  timeout: 10000,
});
