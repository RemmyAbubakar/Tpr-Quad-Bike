import React from "react";
import { Link } from "react-router-dom";
import { IoBagOutline } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { BsList } from "react-icons/bs";
import { BsX } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
import { TbBrandTiktok } from "react-icons/tb";
import { FaWhatsapp } from "react-icons/fa";

function NavBar() {
  return (
    <div className="py-0 sticky top-0 z-50 bg-gradient-to-r from-white to-red-100 shadow-2xl rounded-b-2xl cursor-pointer">
      <nav>
        <div className="flex justify-between items-center">
          <div className="flex justify-end mb-5">
            <Link to="/">
              <img
                src="./images/quadbikelogo.png"
                alt=""
                className="lg:ml-14 md:ml-14 sm:ml-7 h-16 w-32 mt-2"
              />
            </Link>
          </div>

          <div className="mb-3 lg:mr-20 md:mr-16 sm:mr-7 mt-4">
            <div className="flex">
              <Link to="https://tpr-quad-biking.reservio.com/services">
                <div className="font-rem bg-red-800 lg:p-2 md:p-2 sm:p-1 text-white md:w-32 sm:w-20 flex justify-center rounded-lg mr-6 sm:mr-4 font-bold text-sm">
                  <h3>Book</h3>
                </div>
              </Link>

              <button>
                <div class="space-y-2">
                  <span class="block w-5 h-0.5 bg-gray-600"></span>
                  <span class="block w-8 h-0.5 bg-gray-600"></span>
                  <span class="block w-8 h-0.5 bg-gray-600"></span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
