import React from 'react';

import image from '../src/img/istockphoto-1320029684-612x612__1_-removebg.png';

const Main = () => {
  return (
    <div className="flex content-center justify-center w-full h-full bg-[url('/src/img/markus-spiske-ezYZfFnzARM-unsplash.jpg')] bg-no-repeat bg-cover bg-center relative z-10">
      <div className="flex flex-row absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white w-[1100px] rounded-xl rounded-l-xl h-[500px] z-40">
        <div className=" w-1/2 h-full bg-[#5F8575] rounded-l-xl">
          <img className=" w-auto h-full ml-8" src={image} alt=""></img>
        </div>
        <div className=" p-7">
          <h1 className="text-[#4F7942] text-[40px] font-semibold">Welcome</h1>
          <p className="text-[#4F7942] opacity-70">Let's get you started!</p>
          <div
            id="form"
            className="block  rounded-md p-6 shadow-md shadow-[#5f8575] w-[400px]"
          >
            <form action="">
              <div id="fullName" className="flex flex-row gap-7">
                <div id="firstName" className=" flex flex-col">
                  <label for="fname" className="">
                    First Name
                  </label>
                  <input
                    type="text"
                    name=""
                    id="fname"
                    placeholder="Enter your first name here"
                    className="border-[1px] rounded-[4px] focus:border-2 active:border-[#4F7942] focus:outline-none outline-none w-[150px] text-[10px] p-1 pl-2 border-[#4F7942]"
                  ></input>
                </div>
                <div id="lastName" className=" flex flex-col">
                  <label for="lname" className="">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name=""
                    id="lname"
                    placeholder="Enter your last name here"
                    className="border-[1px] rounded-[4px] focus:border-2 active:border-[#4F7942] focus:outline-none outline-none w-[150px] text-[10px] p-1 pl-2 border-[#4F7942]"
                  ></input>
                </div>
              </div>
              <div id="email" className=
              'flex flex-col'>
                <label for="email">
                  Email Address
                </label>
                <input type="email" id="email" placeholder="Youremail@gmail.com" className="border-[1px] rounded-[4px] p-1 pl-2 focus:border-2 active:border-[#4F7942] focus:outline-none outline-none w-[200px] text-[10px] border-[#4F7942]"></input>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main