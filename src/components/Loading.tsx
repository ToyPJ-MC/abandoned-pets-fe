import loading from "../assets/Loading.json";
import Lottie from "react-lottie";

const Loading = () => {
  return (
    <div className="grid place-items-center">
      <Lottie
        options={{
          loop: true,
          autoplay: true,
          animationData: loading,
          rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
          },
        }}
        height={300}
        width={300}
        isClickToPauseDisabled
      />
    </div>
  );
};
export default Loading;
