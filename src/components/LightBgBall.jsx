const LightBgBall = () => {
  return (
    <div className="absolute w-full top-[150rem] ss:top-[100rem] sm:top-[90rem] ">
      <div className="w-[30rem] h-[37.5rem] absolute -left-[31.25rem] ss:-left-[30rem] white__gradient overflow-visible"></div>
      <div className="w-96 h-[37.5rem] absolute -left-[31.25rem] ss:-left-[30rem] blue__gradient overflow-visible"></div>
      <div className="w-80 h-[37.5rem] absolute -left-[31.25rem] ss:-left-[30rem] pink__gradient overflow-clip"></div>
    </div>
  );
};

export default LightBgBall;
