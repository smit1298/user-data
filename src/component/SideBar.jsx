import React from 'react'
import profile from "../assets/icon/profile.svg";

const SideBar = ({userDetail}) => {
  return (
    <div className="fixed">
      <div className="w-[270px] h-[100vh] bg-white border-solid rounded py-4 flex flex-col">
        <div className="mx-auto">
          <img
            className="rounded-full border-4 border-black border-solid h-[100px] w-[100px]"
            src={userDetail.picture?.medium}
            alt={userDetail.name?.first}
          />
        </div>
        <div className="flex mx-auto my-4">
          <h3 className="uppercase font-bold leading-6 tracking-wider text-base">
            welcome &nbsp;
          </h3>
          <p className="capitalize flex text-center font-medium leading-6 tracking-wider">
            {userDetail.name?.first}
          </p>
        </div>
        <div className="flex bg-gray-300  rounded w-fit ml-8 gap-4 px-2 py-3">
          <img className="h-6 w-6" src={profile} alt="profile" />
          <h3 className="capitalize font-medium w-36 text-black cursor-pointer">
            my profile
          </h3>
        </div>
      </div>
    </div>
  );
}

export default SideBar