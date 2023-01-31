import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setLogout } from "../features/User/userSlice";
import ButtonPrimary from "./ButtonPrimary";
import ImageUpload from "../components/ImageUpload";

const Header = () => {
   const navigate = useNavigate();
   const user = useSelector((state) => state.user);
   const dispatch = useDispatch();
   

   return (
      <header className="flex shadow-md sticky top-0 bg-white mb-6 items-center justify-between px-10 py-2 border-b border-gray-300 z-10">
         <img className="h-8 w-auto" src="https://www.pngkey.com/png/full/409-4090454_socialize-agency-logo.png" alt="" />
         {user.isLoggedIn && <ImageUpload username={user.user.displayName} />}
         <div
            className=" flex justify-center cursor-pointer shadow-md h-12 w-12 rounded-full"
            onClick={() => {
               dispatch(setLogout());
               navigate("/");
            }}
         >
            <svg
               xmlns="http://www.w3.org/2000/svg"
               className="h-7 w-7 mt-3 text-blue-500"
               fill="none"
               viewBox="0 0 24 24"
               stroke="currentColor"
               strokeWidth={2}
            >
               <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
               />
            </svg>
         </div>
      </header>
   );
};

export default Header;
