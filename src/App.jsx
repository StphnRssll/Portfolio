import { useState } from "react";

function App() {
  return (
    <div className="app bg-[url('/paper-bg.jpg')] min-h-screen min-w-full bg-center bg-cover bg-no-repeat font-baskerville">
      {/* <div className="app bg-[url('/paper-bg.jpg')] min-h-screen w-full bg-cover bg-center bg-no-repeat font-baskerville"> */}
      <div className="main max-w-7xl mx-auto my-0 p-6 sm:p-16 text-center flex flex-col space-y-[31vh] text-gray-800 ink-effect">
        <div className="top-links flex flex-row justify-between ">
          <div className=" border-green-800 border-b-2 text-lg px-2">
            <p>StephenDonRussell@gmail.com</p>
          </div>
          <div className=" border-green-800 border-b-2 text-lg px-2">
            <p>About</p>
          </div>
        </div>
        <div className="content min-h-[80%] flex flex-col">
          <h1 className=" text-4xl font-semibold tracking-wider">
            Stephen Russell
          </h1>
          <p className=" text-lg ">Software Developer</p>
        </div>
        <div className="bottom-links border-b-2 border-b-green-800 w-fit mx-auto">
          <ul className="flex flex-row my-1 mx-8">
            <li className="mx-2">Portfolio</li>
            <li>|</li>
            <li className="mx-2">Resume</li>
            <li>|</li>
            <li className="mx-2">GitHub</li>
            <li>|</li>
            <li className="mx-2">LinkedIn</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
