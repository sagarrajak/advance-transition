import Clock from "./component/clock/Clock";
import StopWatch from "./component/clock/stopwatch/StopWatch";
import Loading from "./component/loading/Loading";
import SqurareLoader from "./component/loading/sqaureLoader/SqurareLoader";
import Toggle from "./component/toggle/Toggle";

export default function Home() {
  return (
    <div>
      {/* <Clock />
      <Loading /> */}
      {/* <Toggle /> */}
      {/* <StopWatch/> */}
      <SqurareLoader />
    </div>
  );
}
