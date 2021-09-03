import Chart from "react-google-charts";
import "./Tachometer.css";

function Tachometer() {
  return (
    <Chart
      width={1600}
      height={480}
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

export default Tachometer;
