import Header from "@/Components/Header";
import Link from "next/link";
import React from "react";

function page() {
  return (
    <div>
      <Header />
      <div className="w-[380px] h-[489px] ml-[470px] relative bg-white">
        <div className="w-[324px] h-32 absolute left-7 top-7">
          <div className="flex title-font font-medium items-center text-gray-900 ml-32 mb-4 md:mb-0">
            <svg
              width="59"
              height="22"
              viewBox="0 0 59 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M58.9262 0.772461L15.8854 19.0298C12.302 20.5502 9.28743 21.3087 6.85813 21.3087C4.12475 21.3087 2.13358 20.3442 0.910756 18.4184C-0.674992 15.9335 0.0181595 11.9381 2.73845 7.72033C4.35363 5.25506 6.40692 2.99251 8.40791 0.828045C7.93709 1.59313 3.78145 8.5083 8.32617 11.7648C9.22531 12.4187 10.5037 12.7391 12.0764 12.7391C13.3384 12.7391 14.7869 12.5332 16.3792 12.1179L58.9262 0.772461Z"
                fill="#111111"
              ></path>
            </svg>
          </div>
          <p className="w-[186.5px] h-[57px] absolute left-[68.84px] top-[46px] text-lg font-bold text-center text-[#111]">
            YOUR ACCOUNT FOR EVERYTHING NIKE
          </p>
        </div>
        <div className="w-[324px] h-[305px] absolute left-7 top-[156px] overflow-hidden">
          <div className="w-[324px] h-10 absolute left-0 top-[5px] rounded-[3px] bg-white border border-neutral-200">
            <div className="w-[290px] h-4 absolute left-[17px] top-3 overflow-hidden">
              <p className="w-[88.9px] h-4 absolute left-0 top-0 text-sm text-left text-[#8d8d8d]">
                Email address
              </p>
            </div>
          </div>
          <div className="w-[324px] h-10 absolute left-0 top-[58px] rounded-[3px] bg-white border border-neutral-200">
            <div className="w-[290px] h-4 absolute left-[17px] top-3 overflow-hidden">
              <p className="w-[61.67px] h-4 absolute left-0 top-0 text-sm text-left text-[#8d8d8d]">
                Password
              </p>
            </div>
          </div>
          <div className="w-[162px] h-5 absolute left-0 top-[121px]">
            <p className="w-[99.61px] h-3.5 absolute left-[34px] top-[4.3px] text-xs text-left text-[#8d8d8d]">
              Keep me signed in
            </p>
            <svg
              width={20}
              height={20}
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 absolute left-0 top-0"
              preserveAspectRatio="none"
            >
              <rect
                x="0.5"
                y="0.5"
                width={19}
                height={19}
                rx="2.5"
                stroke="#BCBCBC"
              />
              <g clipPath="url(#clip0_1_2023)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.63121 10.6863L6.67606 8.73415L5.11133 10.2959L8.63128 13.8104L14.8891 7.56229L13.3244 6L8.63121 10.6863Z"
                  fill="#111111"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_2023">
                  <rect
                    width="9.77778"
                    height={8}
                    fill="white"
                    transform="translate(5.11133 6)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <p className="w-[139.61px] h-3.5 absolute left-[184.59px] top-[125px] text-xs text-right text-[#bcbcbc]">
            Forgotten your password?
          </p>
          <div className="w-[324px] h-[59px] absolute left-0 top-[162px]">
            <p className="w-[279.31px] h-[30px] absolute left-[22.44px] top-1 text-xs text-center text-[#8d8d8d]">
              By logging in, you agree to Nike&apos;s Privacy Policy and Terms
              of Use.
            </p>
          </div>
          <div className="w-[324px] h-10 absolute left-0 top-[226px] rounded-[3px] bg-black border border-black">
            <p className="w-[41.04px] h-[18px] absolute left-[141.58px] top-[10.5px] text-[11px] text-center text-white">
              SIGN IN
            </p>
          </div>
          <div className="w-[324px] h-6 absolute left-0 top-[276px]">
            <p className="w-[129.61px] h-3.5 absolute left-[97.3px] top-2.5 text-xs text-center">
              <span className="w-[129.61px] h-3.5 text-xs text-center text-[#8d8d8d]">
                Not a Member?{" "}
              </span>
              <Link href="/JoinUs">
                <span className="w-[129.61px] h-3.5 text-xs text-center text-[#111]">
                  Join Us.
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
