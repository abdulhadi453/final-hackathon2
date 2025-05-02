import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-black w-full h-auto  py-10">
      <div className="container mx-auto flex ml-14 justify-between text-white">
        {/* Left Column */}
        <div className="w-1/3">
          <Link href="/signin">
            <p className="text-xs uppercase mb-2">Find A Store</p>
          </Link>
          <Link href="/JoinUs">
            <p className="text-xs uppercase mb-2">Become A Member</p>
          </Link>
          <Link href="/JoinUs">
            <p className="text-xs uppercase mb-2">Sign Up for Email</p>
          </Link>
          <Link href="/help">
            <p className="text-xs uppercase mb-2">Send Us Feedback</p>
          </Link>
          <p className="text-xs uppercase mb-2">Student Discounts</p>
        </div>

        {/* Middle Column */}
        <div className="w-1/3 mr-4">
          <p className="text-xs uppercase mb-2">Get Help</p>
          <p className="text-sm text-gray-400 mb-2">Order Status</p>
          <p className="text-sm text-gray-400 mb-2">Delivery</p>
          <p className="text-sm text-gray-400 mb-2">Returns</p>
          <p className="text-sm text-gray-400 mb-2">Payment Options</p>
          <p className="text-sm text-gray-400 mb-2">
            Contact Us On Nike.com Inquiries
          </p>
          <p className="text-sm text-gray-400 mb-2">
            Contact Us On All Other Inquiries
          </p>
        </div>

        {/* Right Column */}
        <div className="w-1/3 mr-10">
          <p className="text-xs uppercase mb-2">About Nike</p>
          <p className="text-sm text-gray-400 mb-2">News</p>
          <p className="text-sm text-gray-400 mb-2">Careers</p>
          <p className="text-sm text-gray-400 mb-2">Investors</p>
          <p className="text-sm text-gray-400 mb-2">Sustainability</p>
        </div>
      </div>

      {/* SVG (if it's part of the design) */}
      <svg
        width="100%"
        height="38"
        viewBox="0 0 337 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mx-auto mt-8"
        preserveAspectRatio="none"
      >
        {/* Your SVG Paths */}
      </svg>

      <div className="w-[672px] left-14 h-8 relative">
        <div className="flex justify-start items-end absolute left-0 top-[17px] gap-2 pr-[8.03125px]">
          <svg
            width={18}
            height={15}
            viewBox="0 0 18 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-grow-0 flex-shrink-0 w-[18px] h-[15px] relative"
            preserveAspectRatio="none"
          >
            <g clipPath="url(#clip0_1_3920)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.3125 5.62598C4.3125 4.38277 4.80636 3.19049 5.68544 2.31141C6.56451 1.43234 7.7568 0.938477 9 0.938477C10.2432 0.938477 11.4355 1.43234 12.3146 2.31141C13.1936 3.19049 13.6875 4.38277 13.6875 5.62598C13.6875 6.3791 13.4469 7.23598 13.1038 8.08098C12.7569 8.93348 12.29 9.81035 11.8038 10.6154C11.36 11.349 10.8787 12.0594 10.3619 12.7435C9.93187 13.3091 9.53938 13.7635 9.2925 13.9604C9.20944 14.0267 9.1063 14.0628 9 14.0628C8.8937 14.0628 8.79056 14.0267 8.7075 13.9604C8.46062 13.7635 8.06813 13.3091 7.63812 12.7435C7.12146 12.0593 6.64041 11.349 6.19687 10.6154C5.70937 9.81035 5.24312 8.93348 4.89687 8.08035C4.55312 7.23598 4.3125 6.3791 4.3125 5.62598ZM9 7.6566C9.53872 7.6566 10.0554 7.4426 10.4363 7.06166C10.8172 6.68073 11.0312 6.16407 11.0312 5.62535C11.0312 5.08663 10.8172 4.56997 10.4363 4.18904C10.0554 3.80811 9.53872 3.5941 9 3.5941C8.46128 3.5941 7.94462 3.80811 7.56369 4.18904C7.18276 4.56997 6.96875 5.08663 6.96875 5.62535C6.96875 6.16407 7.18276 6.68073 7.56369 7.06166C7.94462 7.4426 8.46128 7.6566 9 7.6566Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_3920">
                <rect width={18} height={15} fill="white" />
              </clipPath>
            </defs>
          </svg>
          <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-white">
            India
          </p>
        </div>
        <p className="w-[200.48px] h-3.5 absolute left-[76.03px] top-[19px] text-[11px] text-left text-[#7e7e7e]">
          © 2023 Nike, Inc. All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
