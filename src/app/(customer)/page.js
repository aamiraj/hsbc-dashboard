import TopBanner from "./sections/TopBanner"
import Summary from "./sections/Summary"
import Trading from "./sections/Trading"

export default function Home() {
  return (
    <div className="w-[90%] mx-auto">
      <TopBanner />
      <Summary />
      <Trading />
    </div>
  );
}
