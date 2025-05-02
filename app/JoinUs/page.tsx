import Header from "@/Components/Header";
import React from "react";

function page() {
  return (
    <div>
      <Header />
      <div className="w-[380px] h-[833px] ml-[470px] relative bg-white">
        <div className="w-[324px] h-[182px] absolute left-7 top-7">
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
          <p className="w-[231.22px] h-[31px] absolute left-[46.48px] top-[46px] text-lg font-bold text-center text-[#111]">
            BECOME A NIKE MEMBER
          </p>
          <p className="w-[282.08px] h-[60px] absolute left-[21.06px] top-[104px] text-sm text-center text-[#8d8d8d]">
            Create your Nike Member profile and get first access to the very
            best of Nike products, inspiration and community.
          </p>
        </div>
        <div className="w-[324px] h-[561px] absolute left-7 top-[210px] overflow-hidden">
          <div className="w-[324px] h-[59px] absolute left-0 top-[452px]">
            <p className="w-[309.31px] h-[30px] absolute left-[7.44px] top-1 text-xs text-center text-[#8d8d8d]">
              <span className="w-[309.31px] h-[30px] text-xs text-center text-[#8d8d8d]">
                By creating an account, you agree to Nike&apos;s{" "}
              </span>
              <span className="w-[309.31px] h-[30px] text-xs font-medium text-center text-[#8d8d8d]">
                Privacy Policy
              </span>
              <span className="w-[309.31px] h-[30px] text-xs text-center text-[#8d8d8d]">
                {" "}
                and{" "}
              </span>
              <span className="w-[309.31px] h-[30px] text-xs font-medium text-center text-[#8d8d8d]">
                Terms of Use
              </span>
              <span className="w-[309.31px] h-[30px] text-xs text-center text-[#8d8d8d]">
                .
              </span>
            </p>
          </div>
          <div className="w-[324px] h-10 absolute left-0 top-[5px] rounded-[3px] bg-white border border-neutral-200">
            <p className="w-[290.2px] h-4 absolute left-[17px] top-3 text-sm text-left text-[#8d8d8d]">
              Email address
            </p>
          </div>
          <div className="w-[324px] h-10 absolute left-0 top-[58px] rounded-[3px] bg-white border border-neutral-200">
            <p className="w-[261.2px] h-4 absolute left-[17px] top-3 text-sm text-left text-[#8d8d8d]">
              Password
            </p>
          </div>
          <div className="w-[324px] h-10 absolute left-0 top-[111px] rounded-[3px] bg-white border border-neutral-200">
            <p className="w-[290.2px] h-4 absolute left-[17px] top-3 text-sm text-left text-[#8d8d8d]">
              First Name
            </p>
          </div>
          <div className="w-[324px] h-10 absolute left-0 top-[164px] rounded-[3px] bg-white border border-neutral-200">
            <p className="w-[290.2px] h-4 absolute left-[17px] top-3 text-sm text-left text-[#8d8d8d]">
              Last Name
            </p>
          </div>
          <div className="w-[324px] h-[69px] absolute left-0 top-[217px]">
            <p className="w-[301.45px] h-3.5 absolute left-[11.38px] top-[47px] text-[11px] text-center text-[#8d8d8d]">
              Get a Nike Member Reward every year on your Birthday.
            </p>
            <p className="w-[78.03px] h-4 absolute left-4 top-3 text-[13px] text-left text-[#8d8d8d]">
              Date of Birth
            </p>
          </div>
          <div className="w-[324px] h-10 absolute left-0 top-[296px] rounded-[3px] bg-white border border-neutral-200">
            <svg
              width={11}
              height={8}
              viewBox="0 0 11 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-2.5 h-[7.14px] absolute left-[307px] top-[17px]"
              preserveAspectRatio="none"
            >
              <g clipPath="url(#clip0_1_4835)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.09013 5.56103L0.5 1.57109L1.90512 0L5.49974 3.99456L9.0944 0L10.5 1.57109L6.90948 5.5611L6.91854 5.5712L5.51343 7.14286L5.49974 7.12765L5.48605 7.14286L4.08093 5.5712L4.09013 5.56103Z"
                  fill="#BCBCBC"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_4835">
                  <rect
                    width={10}
                    height="7.14286"
                    fill="white"
                    transform="translate(0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
            <p className="w-[290.2px] h-[17px] absolute left-[17px] top-[11.5px] text-sm text-left text-[#8d8d8d]">
              India
            </p>
          </div>
          <div className="w-[324px] h-10 absolute left-0 top-[346px]">
            <div className="w-[153.89px] h-[43px] absolute left-0 top-0">
              <div className="w-[153.89px] h-10 absolute left-[-1px] top-[-1px] rounded-[3px] bg-white border border-neutral-200" />
              <p className="w-[30.56px] h-4 absolute left-[61.77px] top-3 text-[13px] text-center text-[#8d8d8d]">
                Male
              </p>
            </div>
            <div className="w-[153.89px] h-[43px] absolute left-[170.11px] top-0">
              <div className="w-[153.89px] h-10 absolute left-[-1px] top-[-1px] rounded-[3px] bg-white border border-neutral-200" />
              <p className="w-[46.89px] h-4 absolute left-[53.59px] top-3 text-[13px] text-center text-[#8d8d8d]">
                Female
              </p>
            </div>
          </div>
          <div className="flex justify-start items-start absolute left-0 top-[406.34px] pl-[34px] pr-[43.00312805175781px]">
            <div className="flex-grow-0 flex-shrink-0 w-5 h-5 rounded-[3px] border border-[#bcbcbc]" />
            <p className="flex-grow-0 flex-shrink-0 w-[247px] text-[11px] text-left text-[#8d8d8d]">
              Sign up for emails to get updates from Nike on products, offers
              and your Member benefits
            </p>
          </div>
          <div className="w-[324px] h-10 absolute left-0 top-[516px] rounded-[3px] bg-black border border-black">
            <p className="absolute left-[132.5px] top-[11px] text-[15px] text-center text-white">
              JOIN US
            </p>
          </div>
        </div>
        <div className="w-[324px] h-6 absolute left-7 top-[776px]">
          <p className="w-[148.95px] h-3.5 absolute left-[87.63px] top-2.5 text-[11px] text-center">
            <span className="w-[148.95px] h-3.5 text-[11px] text-center text-[#8d8d8d]">
              Already a Member?{" "}
            </span>
            <span className="w-[148.95px] h-3.5 text-[11px] font-medium text-center text-[#111]">
              Sign In.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default page;
