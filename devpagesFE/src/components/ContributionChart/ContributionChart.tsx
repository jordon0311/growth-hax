import { formatDate, parseISO } from "date-fns";
import { FC } from "react";
import {
  createContainer,
  VictoryAxis,
  VictoryBrushContainer,
  VictoryChart,
  VictoryGroup,
  VictoryLine,
  VictoryTheme,
  VictoryTooltip,
} from "victory";
import { ContributionDay } from "../../types.types";
import { useZoom } from "./hooks/useZoom";

type Props = {
  contributionDays: ContributionDay[];
};

type FormattedStats = Omit<ContributionDay, "date"> & {
  date: Date;
};

function formatter(timeSeries: ContributionDay[]): FormattedStats[] {
  return timeSeries.map((t) => ({
    ...t,
    date: parseISO(t.date),
  }));
}

const CONTRIBUTION_COUNT_LINE_COLOR = "#a7def3";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const VictoryZoomVoronoiContainer = createContainer("zoom", "voronoi") as any;

const labelPresenter = ({ datum }: { datum: ContributionDay }) =>
  `Date: ${formatDate(new Date(datum.date), "dd/MM/yyyy")} \nContributions: ${
    datum.contributionCount
  }\n`;

export const ContributionChart: FC<Props> = ({ contributionDays }) => {
  const {
    zoomDomain,
    selectedZoomDomain,
    setSelectedZoomDomain,
    setZoomDomain,
  } = useZoom();
  const formattedTimeSeries = formatter(contributionDays);
  const size = { width: 800 };
  return (
    <div className="max-w-full">
      <VictoryChart
        width={size.width}
        theme={VictoryTheme.grayscale}
        scale={{ x: "time" }}
        containerComponent={
          <VictoryZoomVoronoiContainer
            responsive={false}
            zoomDimension="x"
            zoomDomain={zoomDomain}
            onZoomDomainChange={setSelectedZoomDomain}
          />
        }
      >
        <VictoryGroup>
          <VictoryLine
            style={{
              data: { stroke: CONTRIBUTION_COUNT_LINE_COLOR },
              parent: { border: "1px solid #ccc" },
            }}
            x="date"
            y="contributionCount"
            labels={labelPresenter}
            labelComponent={<VictoryTooltip />}
            data={formattedTimeSeries}
          />
        </VictoryGroup>
      </VictoryChart>
      <VictoryChart
        width={size.width}
        height={90}
        scale={{ x: "time" }}
        padding={{ top: 0, left: 50, right: 50, bottom: 30 }}
        containerComponent={
          <VictoryBrushContainer
            responsive={false}
            brushDimension="x"
            brushDomain={selectedZoomDomain}
            onBrushDomainChange={setZoomDomain}
          />
        }
      >
        <VictoryAxis
          tickFormat={(x) => {
            const formatted = formatDate(x, "yyyy-MM-dd");
            return formatted;
          }}
        />
        <VictoryLine
          style={{
            data: { stroke: CONTRIBUTION_COUNT_LINE_COLOR },
          }}
          x="date"
          y="contributionCount"
          data={formattedTimeSeries}
        />
      </VictoryChart>
    </div>
  );
};
