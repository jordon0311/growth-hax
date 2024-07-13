export type ContributionDay = {
  contributionCount: number;
  date: string;
};

export type ContributionApiResponse = {
  data: {
    user: {
      contributionsCollection: {
        contributionCalendar: {
          totalContributions: number;
          weeks: {
            contributionDays: ContributionDay[];
          }[];
        };
      };
    };
  };
};
