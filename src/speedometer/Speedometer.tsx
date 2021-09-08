import Chart from "react-google-charts";

function Speedometer() {
  return (
    <Chart
      width={300}
      height={350}
      chartType="Gauge"
      loader={<div>Loading Chart</div>}
      data={[
        ["Label", "Value"],
        ["RPMs", 1200],
      ]}
      options={{
        max: 9000,
        redFrom: 7000,
        redTo: 9000,
        yellowFrom: 5000,
        yellowTo: 7000,
        majorTicks: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        minorTicks: 10,
      }}
      rootProps={{ "data-testid": "1" }}
    />
  );
}

export default Speedometer;
