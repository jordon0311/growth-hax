import { isAxiosError } from 'axios';
import chalk from 'chalk';
import { axiosInstance } from './axiosInstance';

export const fetchWebsite = async (prompt: string) => {
  try {
    console.log('Prompt: ', prompt);
    const res = await axiosInstance.post('/dev-website', { q: prompt });
    console.log('Response: ', res.data);
    return res.data;
  } catch (error) {
    if (isAxiosError(error)) {
      console.error(
        chalk.redBright(
          'Error fetching website schema: ',
          JSON.stringify(error.response, null, 2),
        ),
      );
    } else {
      console.error(chalk.redBright('Error fetching website schema: ', error));
    }
  }
};
