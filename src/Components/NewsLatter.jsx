// import React from 'react';
import heroBg from "../assets/bg-shadow.png"

const NewsLatter = () => {
  return (
    <div>
      <div className=" p-30 text-center  my-1 mt-10 relative top-40 bg-white max-w-300 mx-auto rounded-4xl" style={{
                  backgroundImage: `url(${heroBg})`,
                }}> 
       <div className="item-center text-center">
         <h1 className="text-3xl font-bold p-2">Subscribe to our Newsletter</h1>
        <p>Get the latest updates and news right in your inbox!</p>
       </div>
        <div className="join p-3 ">
          <div>
            <label className="input validator join-item">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"            
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </g>
              </svg>
              <input type="email" placeholder="Enter Your Valid Email" required />
            </label>
            <div className="validator-hint hidden">
              Enter valid email address
            </div>
          </div>
          <button className="btn btn-neutral join-item bg-[#E7FE29] text-black border-none hover:bg-[#d4eb1f]">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default NewsLatter;
