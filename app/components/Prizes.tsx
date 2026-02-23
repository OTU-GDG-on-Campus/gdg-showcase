function Prizes() {
  return (
    <div className="flex justify-center" id="prizes">
      <div className="flex flex-col items-center max-w-300 w-screen">
        <h1 className="text-6xl md:text-8xl font-bold gradient-text">PRIZES</h1>
        <div className="grid grid-col-1 md:grid-cols-3 gap-8 w-full py-20 px-4 md:px-0">
          <div className="gradient-border p-4 flex flex-col items-center text-center gap-4 justify-between">
            <h2 className="text-2xl font-bold">FIRST PLACE</h2>
            <h2 className="text-2xl font-bold gradient-text">
              GAMING MONITOR &<br />
              INCUBATOR PROGRAM
            </h2>
            <img src="/assets/first_place_prize.png" alt="" className="h-50" />
          </div>
          <div className="gradient-border p-4 flex flex-col items-center text-center gap-4 justify-between">
            <h2 className="text-2xl font-bold">SECOND PLACE</h2>
            <h2 className="text-2xl font-bold gradient-text">MINI PROJECTOR</h2>
            <img src="/assets/second_place_prize.png" alt="" className="h-50" />
          </div>
          <div className="gradient-border p-4 flex flex-col items-center text-center gap-4 justify-between">
            <h2 className="text-2xl font-bold">THIRD PLACE</h2>
            <h2 className="text-2xl font-bold gradient-text">POWERBANK</h2>
            <img src="/assets/third_place_prize.png" alt="" className="h-50" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Prizes;
