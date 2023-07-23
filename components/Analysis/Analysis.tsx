import Footprint from "./Footprint";
import Pie from "./Pie";
import Tips from "./Tips";

const Analysis = () => {
  return (
    <div className="w-full justify-center flex">
      <div className="max-w-[1200px] w-full justify-center items-center flex flex-col gap-3">
        <div className="flex w-full pt-5 gap-3">
          <Pie />
          <Footprint />
        </div>
        <Tips />
      </div>
    </div>
  );
};

export default Analysis;
