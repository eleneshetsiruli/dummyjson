import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Profile = () => {
  const [userInfo, setUserInfo] = useState({});

  function loadUserInformation() {
    fetch("https://dummyjson.com/users/1")
      .then((res) => res.json())
      .then((data) => setUserInfo(data));
  }
  useEffect(() => {
    loadUserInformation();
  }, []);
  return (
    <>
      <div className="px-4 sm:px-0 m-[50px] flex items-center ml-[250px]">
        <img className="h-[100px]" src={userInfo.image} alt="" />
        <div>
          <h3 className="text-base font-semibold leading-7 text-gray-900">
            user Information
          </h3>
          <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
            Personal details
          </p>
        </div>
      </div>
      <div className="flex">
        <div>
          <div className="mt-6 border-t border-gray-100 m-[250px]">
            <dl className="divide-y divide-gray-100">
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Full name
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  <input type=" text" placeholder={userInfo.firstName} />
                  <span className="text-green-500">✮</span>
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Last Name
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  <input type=" text" placeholder={userInfo.lastName} />
                  <span className="text-green-500">✮</span>
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Email address
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  <div> {userInfo.email}</div>
                  <span className="text-red-500 italic">cannot be changed</span>
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Age
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  <input type=" text" placeholder={userInfo.age} />
                  <span className="text-green-500">✮</span>
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Gender
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  <input type=" text" placeholder={userInfo.gender} />
                  <span className="text-green-500">✮</span>
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Ip
                </dt>
                <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  <div>{userInfo.ip}</div>
                  <span className="text-red-500 italic">cannot be changed</span>
                </dd>
              </div>
            </dl>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                MacAddress
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                <div>{userInfo.macAddress}</div>
                <span className="text-red-500 italic">cannot be changed</span>
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Domain
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                <div>{userInfo.domain}</div>
                <span className="text-red-500 italic">cannot be changed</span>
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                MaidenName
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                <input type=" text" placeholder={userInfo.maidenName} />
                <span className="text-green-500">✮</span>
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Phone
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                <input type=" text" placeholder={userInfo.phone} />
                <span className="text-green-500">✮</span>
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                University
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                <input type=" text" placeholder={userInfo.university} />
                <span className="text-green-500">✮</span>
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                UserAgent
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                <div>{userInfo.userAgent}</div>
                <span className="text-red-500 italic">cannot be changed</span>
              </dd>
            </div>
            <Link
              to={"/"}
              href="#"
              className=" flex justify-center rounded-md bg-pink-100 px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-gray-100  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              ok
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
