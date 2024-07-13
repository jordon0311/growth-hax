import fetch from 'node-fetch';
import { ContributionApiResponse } from 'src/types/githubContributions';

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
export async function fetchGithubContributions(
  userName: string,
): Promise<ContributionApiResponse> {
  const variables = `
  {
    "userName": "${userName}"
  }
`;
  const body = {
    query,
    variables,
  };
  const res = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    body: JSON.stringify(body),
  });
  return res.json();
}
