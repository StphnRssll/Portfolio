export const BusinessCard = () => {
  return (
    <div className="card-container flex items-center justify-center align-middle mt-[30vh]">
      <div className="card-bg bg-[url('/paper-bg.jpg')] h-64 w-full max-w-md bg-center bg-cover bg-no-repeat font-baskerville shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-200 ease-in-out">
        <div className="card-content mx-auto p-6 align-middle text-center flex flex-col space-y-[4vh] text-gray-800 ink-effect">
          <div className="card-top flex flex-row justify-between ">
            <div className=" border-green-800 border-b text-xl px-2">
              <p>StephenDonRussell@gmail.com</p>
            </div>
            <div className=" border-green-800 border-b text-xl px-2">
              <p>About</p>
            </div>
          </div>
          <div className="card-middle min-h-[80%] flex flex-col">
            <h1 className=" text-4xl font-semibold tracking-wider">
              Stephen Russell
            </h1>
            <p className="text-xl ">Software Developer</p>
          </div>
          <div className="card-bottom border-b border-green-800 w-fit mx-auto">
            <ul className="flex flex-row my-1 mx-8">
              <li className="mx-2 text-xl">GitHub</li>
              <li className="mx-2 text-xl">|</li>
              <li className="mx-2 text-xl">LinkedIn</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
