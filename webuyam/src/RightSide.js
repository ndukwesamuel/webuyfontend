import React from 'react';

const RightSide = () => {
  return (
    <div className=" bg-[#ffffff] w-1/2 h-full rounded-l-[50px] pr-5 ">
      <header className="flex justify-end text-right ">
        <span>
          Nigeria
          <i class="fa-solid fa-chevron-down ml-1 text-xs"></i>
        </span>
      </header>
      <div className="pl-6 ">
        <h1 className="mb-20 text-2xl font-semibold">Create Account</h1>
        <div className="relative w-[400px] h-[450px] bg-orange-600 flex content-center justify-center">
          <form>
            <div className=" relative mt-[30px] mb-[30px] w-[310px] border-b-2 border-solid border-[#000000]">
              <i className="fa-solid fa-envelope absolute right-[8px] text-[#000000] text-sm top-[5px]"></i>
              <input
                className=" w-full h-1/2 bg-transparent border-none outline-none text-sm pr-[35px] pl-[5px] text-[#000000] focus:outline-none focus:shadow-outline valid:top-5"
                type="text"
                required
              />
              <label
                className="absolute top-1/2 left-[5px] text-[#000000] text-sm pointer-events-none -translate-y-1/2"
                for=""
              >
                Label
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RightSide