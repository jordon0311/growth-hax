import axios, { isAxiosError } from 'axios';

import { GithubUser } from 'src/lib/githubUser';

const axiosInstance = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Accept: 'application/vnd.github+json',
    'Content-Type': 'application/json',
    'X-GitHub-Api-Version': '2022-11-28',
  },
  timeout: 10000,
});

export const fetchGithubUser = async (username: string) => {
  try {
    const res = await axiosInstance.get<GithubUser>(`/users/${username}`);
    return res.data;
  } catch (error) {
    console.error(error);
    if (isAxiosError(error)) {
      console.error(
        'Error fetching github user: ',
        JSON.stringify(error.response.data, null, 2),
      );
    } else {
      console.error('Error fetching github user: ', error);
    }
  }
};
