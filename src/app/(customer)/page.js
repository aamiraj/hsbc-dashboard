import TopBanner from "./sections/TopBanner";
import Summary from "./sections/Summary";
import Trading from "./sections/Trading";
import Advantages from "./sections/Advantages";
import News from "./sections/News";
import CircleProgress from "./components/CircleProgress";
import LineChart from "./components/LineChart";
import LatestTransactions from "./components/LatestTransactions";

const gridLayout = {
  display: "grid",
  gridTemplateColumns: "20% auto 25%",
  gap: "32px",
};

export default function Home() {
  return (
    <div className="w-[90%] mx-auto py-10">
      <TopBanner />
      <Summary />
      <Trading />
      <div style={gridLayout} className="my-10">
        <CircleProgress />
        <LineChart />
        <LatestTransactions />
      </div>
      <Advantages />
      <News />
    </div>
  );
}
