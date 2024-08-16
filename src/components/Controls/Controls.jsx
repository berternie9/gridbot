export default function Controls({
  robotDirection,
  setRobotDirection,
  robotPosition,
  setRobotPosition,
}) {
  function handleGo(e) {
    let x = robotPosition % 5;
    let y = (robotPosition - x) / 5;

    if (robotDirection === "up") {
      setRobotPosition(robotPosition > 4 ? robotPosition - 5 : robotPosition);
    } else if (robotDirection === "down") {
      setRobotPosition(robotPosition < 20 ? robotPosition + 5 : robotPosition);
    } else if (robotDirection === "left") {
      setRobotPosition(
        robotPosition > y * 5 ? robotPosition - 1 : robotPosition
      );
    } else if (robotDirection === "right") {
      setRobotPosition(
        robotPosition < (y + 1) * 5 - 1 ? robotPosition + 1 : robotPosition
      );
    }
  }

  return (
    <>
      <div class="grid grid-cols-5 gap-2 items-center">
        <div
          onClick={() => setRobotDirection("right")}
          class="border-2 rounded-lg border-solid border-white size-16 bg-sienna-50 bg-opacity-90 shadow-lg flex items-center justify-center cursor-pointer"
        >
          <img src="../../../public/chevron.png" alt="right" class="size-10" />
        </div>
        <div
          onClick={() => setRobotDirection("up")}
          class="border-2 rounded-lg border-solid border-white size-16 bg-sienna-50 bg-opacity-90 shadow-lg flex items-center justify-center cursor-pointer"
        >
          <img
            src="../../../public/chevron.png"
            alt="up"
            class="size-10 -rotate-90"
          />
        </div>
        <div
          onClick={() => setRobotDirection("left")}
          class="border-2 rounded-lg border-solid border-white size-16 bg-sienna-50 bg-opacity-90 shadow-lg flex items-center justify-center cursor-pointer"
        >
          <img
            src="../../../public/chevron.png"
            alt="left"
            class="size-10 rotate-180"
          />
        </div>
        <div
          onClick={() => setRobotDirection("down")}
          class="border-2 rounded-lg border-solid border-white size-16 bg-sienna-50 bg-opacity-90 shadow-lg flex items-center justify-center cursor-pointer"
        >
          <img
            src="../../../public/chevron.png"
            alt="down"
            class="size-10 rotate-90"
          />
        </div>
        <div
          onClick={handleGo}
          class="border-2 rounded-lg border-solid border-white size-16 bg-sienna-50 bg-opacity-90 shadow-lg flex items-center justify-center cursor-pointer"
        >
          <img src="../../../public/go.png" alt="go" class="size-10" />
        </div>
      </div>
    </>
  );
}
