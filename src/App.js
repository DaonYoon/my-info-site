import Header from "./components/header";
import { useState } from "react";
import SchoolDetail from "./components/School";
import DoubleDetail from "./components/DoubleMedia";
import SeamansDetail from "./components/SeamansClub";

function App() {
  const [detailStatus, setDetailStatus] = useState(0);

  function detailView(data) {
    setDetailStatus(data);
    console.log(detailStatus);
  }

  function onClose() {
    setDetailStatus(0);
  }

  return (
    <div className="w-full h-[100vh] relative z-0">
      {detailStatus === 1 && <SchoolDetail onClose={onClose} />}
      {detailStatus === 2 && <DoubleDetail onClose={onClose} />}
      {detailStatus === 3 && <SeamansDetail onClose={onClose} />}
      <Header />
      <div className=" mx-auto relative max-w-2xl">
        <div className="">
          윤다온 (Yoon Daon, Ben)
          <span className="bg-[#40A2E3] w-[4px] h-6 block absolute top-0 left-[-8px]"></span>
          <span className="absolute right-0 block text-slate-500 text-sm">
            Last Updated, 2024.02.04
          </span>
        </div>
        <div className="mt-10 flex justify-start items-center border-b-2 pb-8">
          <img className="w-52 h-52 bg-cover rounded-full" src="profile.jpg" />
          <div className="flex flex-col ml-8">
            <span className="text-xl font-semibold text-[#40A2E3]">
              Contact.
            </span>
            <span className="font-semibold">
              Phone.{" "}
              <span className="text-slate-500 text-sm border-b ml-8">
                010-5685-7691
              </span>
            </span>
            <span className="font-semibold">
              Email.{" "}
              <span className="text-slate-500 text-sm border-b  ml-10">
                zfydz@naver.com
              </span>
            </span>
            <span className="font-semibold">
              github.{" "}
              <span className="text-slate-500 text-sm border-b  ml-8">
                https://github.com/DaonYoon
              </span>
            </span>

            <span className="text-xl mt-4 font-semibold text-[#40A2E3]">
              Skill.
            </span>
            <span className="font-semibold">
              CSS
              <span className="text-slate-500 text-sm border-b ml-16">
                SCSS | Tailwind | Stlyed-Components
              </span>
            </span>
            <span className="font-semibold">
              FrontEnd.
              <span className="text-slate-500 text-sm border-b  ml-5">
                JS | TS | React | Vue2 Vue3 | Next | Nuxt
              </span>
            </span>
            <span className="font-semibold">
              BackEnd.
              <span className="text-slate-500 text-sm border-b  ml-6">
                PHP | Node | Next | Nest
              </span>
            </span>
            <span className="font-semibold">
              DataBase.
              <span className="text-slate-500 text-sm border-b  ml-4">
                MYSQL | MongoDB | PostgreSQL | Redis
              </span>
            </span>
          </div>
        </div>
        <div className="pt-8 border-b-2 pb-8">
          <span className="text-xl font-semibold text-[#40A2E3]">Record.</span>
          <div className="flex justify-start mt-4">
            <div className="flex flex-col mr-8 font-semibold ">
              <span>2020/03 ~ 2022/02</span>
              <span>2022/10 ~ 2023/11 </span>
              <span>2024/01 ~ ing. </span>
            </div>
            <div className="flex flex-col text-slate-500">
              <span onClick={() => detailView(1)}>
                경남정보대학교 컴퓨터계열 졸업
              </span>
              <span onClick={() => detailView(2)}>(주) 더블미디어 근무</span>
              <span onClick={() => detailView(3)}>(주) 씨멘스클럽 근무</span>
            </div>
            <div className="flex flex-col text-slate-500 ml-16">
              <span
                className="hover:text-[#40A2E3] cursor-pointer"
                onClick={() => detailView(1)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                  />
                </svg>
              </span>
              <span
                className="hover:text-[#40A2E3] cursor-pointer"
                onClick={() => detailView(2)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                  />
                </svg>
              </span>
              <span
                className="hover:text-[#40A2E3] cursor-pointer"
                onClick={() => detailView(3)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
