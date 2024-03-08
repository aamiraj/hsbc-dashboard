import TopBanner from "./sections/TopBanner";
import Summary from "./sections/Summary";
import Trading from "./sections/Trading";
import Advantages from "./sections/Advantages";
import News from "./sections/News";

export default function Home() {
  return (
    <div className="w-[90%] mx-auto py-10">
      <TopBanner />
      <Summary />
      <Trading />
      <Advantages />
      <News />
    </div>
  );
}
