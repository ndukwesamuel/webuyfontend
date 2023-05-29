import React from 'react';


const Main = () => {
  return (
    <div className="flex content-center justify-center w-full h-full bg-[url('/src/img/markus-spiske-ezYZfFnzARM-unsplash.jpg')] bg-no-repeat bg-cover bg-center relative z-10">
      <div className="flex flex-row absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white w-[1100px] h-[500px] z-40">
        <div className=" w-full h-full">
          <img src={image} alt=""></img>
        </div>
        <div>
          
        </div>
        
      </div>
    </div>
  );
}

export default Main