import { CirclesWithBar } from "react-loader-spinner";

const Spinner = () => {
  return (
    <CirclesWithBar
      height="200"
      width="200"
      color="#07BE65"
      outerCircleColor="#07BE65"
      innerCircleColor="#07BE65"
      barColor="#07BE65"
      ariaLabel="circles-with-bar-loading"
      wrapperClass=""
      visible={true}
    />
  );
};

export default Spinner;
