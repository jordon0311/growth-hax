import axios, { isAxiosError } from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.forge-ml.com/q/jordonwaters',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.FORGE_API_KEY}`,
  },
  timeout: 10000,
});

export const fetchWebsite = async (prompt: string) => {
  try {
    console.log('Prompt: ', prompt);
    const res = await axiosInstance.post('/dev-website', { q: prompt });
    console.log('Response: ', res.data);
    return res.data;
  } catch (error) {
    if (isAxiosError(error)) {
      console.error(
        'Error fetching website schema: ',
        JSON.stringify(error.response.data, null, 2),
      );
    } else {
      console.error('Error fetching website schema: ', error);
    }
  }
};
