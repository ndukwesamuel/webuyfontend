import React from 'react';

import image from '../src/img/istockphoto-1320029684-612x612__1_-removebg.png';

const Main = () => {
  return (
    <div className="flex content-center justify-center w-full h-full bg-[url('/src/img/markus-spiske-ezYZfFnzARM-unsplash.jpg')] bg-no-repeat bg-cover bg-center relative z-10">
      <div className="flex flex-row absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white w-[1000px] max-sm:w-full max-sm:bg-transparent rounded-xl rounded-l-xl h-[500px] z-40">
        <div className=" w-1/2 h-full max-sm:hidden bg-[#5F8575] rounded-l-xl">
          <img
            className=" w-auto h-full ml-4 max-sm:hidden"
            src={image}
            alt=""
          ></img>
        </div>
        <div className="w-1/2 p-7 max-sm:p-0 max-sm:w-full">
          <div className="w-[200px] max-sm:w-full flex flex-col content-center justify-center max-sm:-mt-3">
            <h1 className="text-[#4F7942] text-[40px] max-sm:text-[#ffffff] max-sm:text-[40px] max-sm:text-center font-semibold">
              Welcome
            </h1>
            <p className="text-[#4F7942] max-sm:text-[#ffffff] max-sm:text-[25px] max-sm:font-semibold opacity-70 max-sm:text-center">
              Let's get you started!
            </p>
          </div>
          <div
            id="form"
            className="flex flex-col rounded-md p-6 max-sm:mt-3 w-auto content-center justify-center"
          >
            <form
              action=""
              className="ml-8 max-sm:mx-auto content-center justify-center flex flex-col"
            >
              <div
                id="fullName"
                className="flex flex-col gap-[4px] mb-3 max-sm:text-[#ffffff] max-sm:text-base"
              >
                <div id="firstName" className=" flex flex-col gap-[4px]">
                  <label for="fname" className="">
                    First Name
                  </label>
                  <input
                    type="text"
                    name=""
                    id="fname"
                    placeholder="Enter your first name here"
                    className=" border-b-[2px] rounded-[4px] focus:border-b-[2px] active:border-[#4F7942] focus:outline-none outline-none w-[250px] text-[10px] max-sm:text-sm max-sm:text-[#000000] p-1 pl-2 border-[#4F7942]"
                  ></input>
                </div>
                <div id="lastName" className=" flex flex-col gap-[4px] ">
                  <label for="lname" className="">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name=""
                    id="lname"
                    placeholder="Enter your last name here"
                    className="border-b-[2px] rounded-[4px] focus:border-b-[2px] active:border-[#4F7942] focus:outline-none outline-none w-[250px] text-[10px] p-1 pl-2 max-sm:text-sm border-[#4F7942] max-sm:text-[#000000]"
                  ></input>
                </div>
              </div>
              <div
                id="email"
                className="flex flex-col gap-[4px] mb-3 max-sm:text-[#ffffff] max-sm:text-base"
              >
                <label for="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Youremail@gmail.com"
                  className="border-b-[2px] rounded-[4px] p-1 pl-2 focus:border-b-[2px] active:border-[#4F7942] focus:outline-none outline-none w-[250px] text-[10px] border-[#4F7942] max-sm:text-sm max-sm:text-[#000000]"
                ></input>
              </div>
              <div
                id="password"
                className="flex flex-col gap-[4px] max-sm:text-[#ffffff] max-sm:text-base"
              >
                <label for="password">Password</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  className="border-b-[2px] rounded-[4px] p-1 pl-2 focus:border-b-[2px] active:border-[#4F7942] focus:outline-none outline-none w-[250px] text-[10px] border-[#4F7942] max-sm:text-sm max-sm:text-[#000000]"
                ></input>
              </div>
            </form>
          </div>

          <div className="flex flex-col mx-auto max-sm:mt-2">
            <button
              className="text-[#ffffff] hover:text-[#355E3B] max-sm:hover:text-[#ffffff] hover:bg-transparent hover:border-[1px] hover:border-[#355E3B] bg-[#355E3B] text-center px-[55px] py-[7px] max-sm:py-[10px] text-[14px] max-sm:text-[17px] rounded-full mx-auto"
              type="signup"
            >
              Create Account
            </button>
            <p className="mx-auto mt-1 text-sm max-sm:text-[#ffffff]">
              Already have an account?
              <span className="text-[#4F7942] opacity-70 text-sm">
                <a className="hover:text-[#355E3B] text-xl" href="/">
                  Sign In
                </a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
