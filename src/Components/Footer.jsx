// import React from 'react';
import cricLogo from "../assets/logo-footer.png";

const Footer = () => {
  return (
    <div>
      <div className="bg-black text-white p-20 ">
        <img className="mx-auto pt-30 " src={cricLogo} alt="" />
        <div className="flex justify-evenly mt-10 ">
          <div>
            <h1 className="text-lg font-bold">About US</h1>
            <p className="mt-2">
              We are a passionate team <br /> dedicated  to providing the  <br />  best services
              to our customers.
            </p>
          </div>
          <div>
            <h1 className="mb-2 text-lg font-bold">Quick Links</h1>

            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Services</a>
            </li>
            <li>
              {" "}
              <a href="">About</a>
            </li>
            <li>
              {" "}
              <a href="">Contact</a>
            </li>
          </div>

          <div>
            <h1 className="mb-2 text-lg font-bold">Subscribe</h1>
            <p className="mb-2">Subscribe to our newsletter <br /> for the latest updates.</p>
            <div className="join">
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
                  <input
                    type="email"
                    placeholder="Enter Your Valid Email"
                    required
                  />
                </label>
                <div className="validator-hint hidden">
                  Enter valid email address
                </div>
              </div>
              <button className="btn btn-primary join-item bg-[#E7FE29] text-black border-none hover:bg-[#d4eb1f]">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
