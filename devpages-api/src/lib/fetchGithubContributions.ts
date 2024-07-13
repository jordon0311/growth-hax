import axios from 'axios';
import { ContributionApiResponse } from 'src/types/githubContributions';

const TOKEN = process.env.GITHUB_TOKEN;
const query = `
query($userName:String!) {
  user(login: $userName){
    contributionsCollection {
      contributionCalendar {
        totalContributions
        weeks {
          contributionDays {
            contributionCount
            date
          }
        }
      }
    }
  }
}
`;

const instance = axios.create({
  headers: {
    Authorization: `Bearer ${TOKEN}`,
  },
});
export async function fetchGithubContributions(
  userName: string,
): Promise<ContributionApiResponse> {
  const variables = `
  {
    "userName": "${userName}"
  }
`;
  console.log({ token: TOKEN });
  const res = await instance
    .post('https://api.github.com/graphql', {
      query,
      variables,
    })
    .catch((err) => {
      console.error(JSON.stringify(err.data, null, 2));
      return { data: null };
    });

  return res;
}
