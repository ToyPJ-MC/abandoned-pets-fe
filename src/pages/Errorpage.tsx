import erroranimation from "../assets/erroranimation.json";
import Lottie from "react-lottie";

const Errorpage = () => {
  return (
    <div className="grid place-items-center">
      <Lottie
        options={{
          loop: true,
          autoplay: true,
          animationData: erroranimation,
          rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
          },
        }}
        height={400}
        width={800}
        isClickToPauseDisabled
      />
    </div>
  );
};
export default Errorpage;
