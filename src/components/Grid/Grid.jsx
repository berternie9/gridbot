export default function Grid({ robotDirection, tiles }) {
  return (
    <>
      <div class="border-2 rounded-lg border-solid border-white size-96 bg-gray-100 bg-opacity-90 shadow-lg grid grid-cols-5 gap-2 items-center">
        {tiles.map((tile, index) => (
          <div
            key={index}
            class="flex items-center justify-center aspect-square w-full h-full"
          >
            {tile === 1 && (
              <img
                src="/gridbot/chatbot.png"
                alt="robot"
                class={`w-2/3 h-2/3 object-contain transition ${
                  robotDirection === "right" && "-rotate-90"
                } ${robotDirection === "up" && "rotate-180"} ${
                  robotDirection === "left" && "rotate-90"
                }`}
              ></img>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
