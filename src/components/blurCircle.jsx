const BlurCircle = ({ top, left, right, bottom }) => {
  const circleStyle = {
    top: top || "0",
    left: left || "0",
    right: right || "0",
    bottom: bottom || "0",
  };

  return (
    <div
      className="w-[40%] h-[70%] rounded-full absolute -top-100 -left-20 blur-3xl bg-purple-950 -z-10 bg-opacity-70"
      style={circleStyle}
    ></div>
  );
};

export default BlurCircle;
