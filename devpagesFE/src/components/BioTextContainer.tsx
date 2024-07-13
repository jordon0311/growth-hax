import { ContributionDay, ReturnedDataType } from "../types.types";
import { ContributionChart } from "./ContributionChart/ContributionChart";
import GithubSquares from "./GithubSquares";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

const BioTextContainer = ({ data }: { data: ReturnedDataType }) => {
  const tagColors = [
    "bg-blue-100",
    "bg-green-100",
    "bg-red-100",
    "bg-yellow-100",
    "bg-indigo-100",
    "bg-purple-100",
    "bg-pink-100",
  ];
  return (
    <div className="">
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            About
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-7000">{data.data.bio}</p>
        <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-9000">
          Skills
        </h2>
        <div className="flex flex-wrap gap-2">
          {data.data.skills.map((skill, index) => (
            <span
              className={`${
                tagColors[index % tagColors.length]
              } text-blue-800 text-lg font-medium me-2 px-2.5 py-0.5 rounded`}
            >
              {skill}
            </span>
          ))}
        </div>
        <div className="mt-5">
          <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-9000">
            Github Contributions
          </h2>
          <Tabs defaultValue="squares" className="w-[400px]">
            <TabsList>
              <TabsTrigger value="chart">Chart</TabsTrigger>
              <TabsTrigger value="squares">Squares</TabsTrigger>
            </TabsList>
            <TabsContent value="chart">
              <ContributionChart
                contributionDays={data.data.contributions.weeks.reduce<
                  ContributionDay[]
                >((acc, curr) => {
                  return [...acc, ...curr.contributionDays];
                }, [] as ContributionDay[])}
              />
            </TabsContent>
            <TabsContent value="squares">
              <GithubSquares data={data} />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default BioTextContainer;
