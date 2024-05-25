import { ResponsiveLine } from "@nivo/line";

export const LineChart = ({ data }) => {
  return (
    <ResponsiveLine
      data={data}
      margin={{ top: 50, right: 60, bottom: 50, left: 60 }}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: true,
        reverse: false,
      }}
      yFormat=" >-.2f"
      curve="catmullRom"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legendOffset: 36,
        legendPosition: "middle",
        truncateTickAt: 0,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legendOffset: -40,
        legendPosition: "middle",
        truncateTickAt: 0,
      }}
      enableGridX={false}
      enableGridY={false}
      colors={{ scheme: "category10" }}
      pointSize={10}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabel="data.yFormatted"
      pointLabelYOffset={-12}
      enableTouchCrosshair={true}
      useMesh={true}
    />
  );
};
