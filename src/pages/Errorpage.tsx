import erroranimation from "../assets/erroranimation.json";
import Lottie from "react-lottie";

const Errorpage = () => {
  return (
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
      width={400}
      isClickToPauseDisabled
    />
  );
};
export default Errorpage;
