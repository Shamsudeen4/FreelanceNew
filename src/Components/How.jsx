import React from "react";

function How() {
  return (
    <div className=" min-h-screen w-full p-10 bg-[#A4F1A7]">
      <h1 className="text-center text-4xl">How FreelanceHQ Works?</h1>
      <div className="flex items-center flex-col  gap-5 lg:gap-20 container lg:flex-row">
        <div className="flex  flex-col  mt-10 justify-center items-center ">
          <div className="">
            <div style={{ border: "3px solid black" }} className="flex capitalize flex-row p-5 items-center gap-1">
              <h1 className="text-3xl text-white">1.</h1>
              <h2 className="text-2xl">Create Account</h2>
            </div>
            <div className="border-l-[2px] border-black pt-5 pb-7 ">
              <p className="p-5 text-lg">
                Sign up to get free Account You’d be redirected to the dashboard
                You’d get a free wallet and free search coin.
              </p>
            </div>
          </div>
          <div className="">
            <div
              style={{ border: "3px solid black" }}
              className="flex flex-row p-5 items-center capitalize gap-1"
            >
              <h1 className="text-3xl ">2.</h1>
              <h2 className="text-2xl">Search your company of choice</h2>
            </div>
            <p className="p-5 text-lg">
              {" "}
              Sign up to get a free account You’d be redirected to the dashboard
              You’d get a free wallet and free search coin.
            </p>
          </div>
        </div>
        <div className="flex border border-solid flex-col  w-[100%] mt-10  justify-center items-center ">
          <div className="">
            <div
              style={{ border: "3px solid black" }}
              className="flex flex-row p-5 items-center gap-1 capitalize"
            >
              <h1 className="text-3xl ">3.</h1>
              <h2 className="text-2xl">Reach out to them</h2>
            </div>
            <div className="border-l-[2px] border-black pt-5 pb-7 ">
              <p className="p-5 text-lg">
                Sign up to get free Account You’d be redirected to the dashboard
                You’d get a free wallet and free search coin.
              </p>
            </div>
          </div>
          <div className="">
            <div
              style={{ border: "3px solid black" }}
              className="flex flex-row p-5 items-center gap-1 capitalize"
            >
              <h1 className="text-3xl text-white ">4.</h1>
              <h2 className="text-2xl">Get Response & Cash Out</h2>
            </div>
            <p className="p-5 text-lg">
              {" "}
              Sign up to get a free account You’d be redirected to the dashboard
              You’d get a free wallet and free search coin.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default How;
