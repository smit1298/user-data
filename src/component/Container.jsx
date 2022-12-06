import React, { useState, useEffect } from "react";
import axios from "axios";
import SideBar from "./SideBar";

export default function UserDetails() {
  const [userDetail, setUserDetail] = useState([]);

  const fetchProfile = async () => {
    try {
      const profile = await axios.get("https://randomuser.me/api/");
      setUserDetail(profile.data.results[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    let interval = setInterval(() => {
      fetchProfile();
    }, 15000);
    return () => {
      clearInterval(interval);
    };
  }, [setUserDetail]);

  return (
    <div className="flex max-h-screen overflow-hidden relative px-10 gap-8 py-5">
      {/* Left panel info */}
      <SideBar userDetail={userDetail} />
      <div
        style={{ width: "calc(100% - 270px)" }}
        className="relative ml-[300px] space-y-8"
      >
        <div className="flex justify-between border-2 px-4 items-center border-solid border-black">
          <h1 className="font-bold text-3xl capitalize py-3">my profile</h1>
          <img
            className="rounded-full border-4 border-black border-solid h-[30px] w-[30px]"
            src={userDetail.picture?.medium}
            alt={userDetail.name?.first}
          />
        </div>

        <div className="flex gap-8">
          {/* user details */}
          <div className="border-2 px-4 w-1/2  h-fit py-4 items-center border-solid border-white bg-white rounded-sm">
            <h1 className="font-bold text-3xl capitalize py-3">user details</h1>
            <div className="flex gap-4">
              <span className="flex items-center">
                <p className="font-medium text-lg">User Id:</p>
                <p className="bg-white text-lg px-2">
                  {userDetail?.id?.name}-{userDetail?.id?.value}
                </p>
              </span>
              <span className="flex items-center">
                <p className="font-medium text-lg">Gender:</p>
                <p className="bg-white capitalize text-lg px-2">
                  {userDetail?.gender}
                </p>
              </span>
              <span className="flex items-center">
                <p className="font-medium text-lg">Title:</p>
                <p className="bg-white text-lg px-2">
                  {userDetail?.name?.title}
                </p>
              </span>
            </div>

            <span className="flex flex-col space-y-2">
              <div className="flex flex-col">
                <p className="font-medium text-lg">First Name</p>
                <p className="bg-white text-lg border-black capitalize border-2 px-4 py-3 rounded border-solid">
                  {userDetail.name?.first}
                </p>
              </div>
              <div className="flex flex-col">
                <p className="font-medium text-lg">Last Name</p>
                <p className="bg-white text-lg border-black border-2 capitalize px-4 py-3 rounded border-solid">
                  {userDetail.name?.last}
                </p>
              </div>
            </span>

            <span className="flex flex-col space-y-2">
              <p className="font-medium text-lg">Email</p>
              <p className="bg-white text-lg border-black border-2 px-4 py-3 rounded border-solid">
                {userDetail.email}
              </p>
            </span>
            <span className="flex flex-col space-y-2">
              <p className="font-medium text-lg">Phone Number</p>
              <p className="bg-white text-lg border-black border-2 px-4 py-3 rounded border-solid">
                {userDetail.phone}
              </p>
            </span>
            <span className="flex flex-col space-y-2">
              <p className="font-medium text-lg">Cell</p>
              <p className="bg-white text-lg border-black border-2 px-4 py-3 rounded border-solid">
                {userDetail.cell}
              </p>
            </span>
          </div>
          <div className="w-1/2 space-y-8">
            {/* residential address */}
            <div className="border-2 px-4 py-3 items-center border-solid border-white bg-white rounded-sm">
              <h1 className="font-bold text-3xl capitalize py-3">Location</h1>
              <span className="flex flex-col space-y-2">
                <p className="font-medium text-lg">Location</p>
                <p className="bg-white text-lg border-black border-2 px-4 py-3 rounded border-solid">
                  {userDetail.location?.street?.number}
                </p>
              </span>
              <span className="flex flex-col space-y-2">
                <p className="font-medium text-lg">Street Name</p>
                <p className="bg-white text-lg border-black border-2 px-4 py-3 rounded border-solid">
                  {userDetail.location?.street?.name}
                </p>
              </span>
              <div className="flex gap-4">
                <span className="flex flex-col space-y-2">
                  <p className="font-medium text-lg">City</p>
                  <p className="bg-white text-lg border-black border-2 px-4 py-3 rounded border-solid">
                    {userDetail.location?.city}
                  </p>
                </span>
                <span className="flex flex-col space-y-2">
                  <p className="font-medium text-lg">State</p>
                  <p className="bg-white text-lg border-black border-2 px-4 py-3 rounded border-solid">
                    {userDetail.location?.state}
                  </p>
                </span>
              </div>
              <div className="flex gap-4">
                <span className="flex flex-col space-y-2">
                  <p className="font-medium text-lg">Country</p>
                  <p className="bg-white text-lg border-black border-2 px-4 py-3 rounded border-solid">
                    {userDetail.location?.country}
                  </p>
                </span>
                <span className="flex flex-col space-y-2">
                  <p className="font-medium text-lg">Post Code</p>
                  <p className="bg-white text-lg border-black border-2 px-4 py-3 rounded border-solid">
                    {userDetail.location?.postcode}
                  </p>
                </span>
              </div>
            </div>

            {/* KYC details */}
            <div className="border-2 px-4 py-3 items-center border-solid border-white bg-white rounded-sm">
              <h1 className="font-bold text-3xl capitalize py-3">
                KYC Details
              </h1>

              <div className="flex gap-4">
                <span className="flex items-center">
                  <p className="font-medium text-lg">DOB:</p>
                  <p className="bg-white text-lg px-2">
                    {userDetail.dob?.date.slice(0, -14)}
                  </p>
                </span>

                <span className="flex items-center">
                  <p className="font-medium text-lg">Age:</p>
                  <p className="bg-white text-lg px-2">{userDetail.dob?.age}</p>
                </span>
              </div>
              <div className="flex gap-4">
                <span className="flex items-center">
                  <p className="font-medium text-lg">DOP:</p>
                  <p className="bg-white text-lg px-2">
                    {userDetail.registered?.date.slice(0, -14)}
                  </p>
                </span>

                <span className="flex items-center">
                  <p className="font-medium text-lg">Duration:</p>
                  <p className="bg-white text-lg px-2">
                    {userDetail.registered?.age}
                  </p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
