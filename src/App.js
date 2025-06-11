import Header from "./components/header";
import { useState } from "react";
import SchoolDetail from "./components/School";
import DoubleDetail from "./components/DoubleMedia";
import SeamansDetail from "./components/SeamansClub";
import PostechDetail from "./components/postech";
import OpmtDetail from "./components/opmt";

function App() {
  const [detailStatus, setDetailStatus] = useState(0);

  const row1 = [
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/7ae42bac3b34999c0db3.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/b2bd91d7b87b2181ca45.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/6591cdc0702b32310306.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/3b7d9f4b073deb6a9b74.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/3cd767dea94a85078ca4.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/a2b3c3709ffedce2a22a.png",
  ];

  const row2 = [
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/6c585c33ca6c71c79bb7.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/9dd55e54b5a28658bf4e.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/0384060dcbf73b6a707c.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/35e044b3354aaa0caed5.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/f50ae7cbf6cc805bdadc.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/6c585c33ca6c71c79bb7.png",
  ];

  function detailView(data) {
    setDetailStatus(data);
  }

  function onClose() {
    setDetailStatus(0);
  }

  return (
    <div className="w-full h-[100vh] relative z-0 ">
      {detailStatus === 1 && <SchoolDetail onClose={onClose} />}
      {detailStatus === 2 && <DoubleDetail onClose={onClose} />}
      {detailStatus === 3 && <SeamansDetail onClose={onClose} />}
      {detailStatus === 4 && <PostechDetail onClose={onClose} />}
      {detailStatus === "opmt" && <OpmtDetail onClose={onClose} />}
      <Header />

      <div className=" mx-auto max-w-2xl">
        <div className="flex w-full select-none overflow-hidden gradient-mask-r-30">
          <div className="flex-shrink-0 flex items-center justify-around whitespace-normal w-full animate-toLeft ">
            {row1.map((item, index) => (
              <div className="grid place-items-center w-full">
                <img
                  className="object-contain w-full h-full rounded-lg aspect-[16/9] py-[5px] px-5"
                  key={index}
                  src={item}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex w-full select-none overflow-hidden gradient-mask-r-30">
          <div className="flex-shrink-0 flex items-center justify-around whitespace-normal w-full animate-toRignt ">
            {row2.map((item, index) => (
              <div className="grid place-items-center w-full">
                <img
                  className="object-contain w-full h-full rounded-lg aspect-[16/9] py-[5px] px-5"
                  key={index}
                  src={item}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <span className="text-gray-500 font-semibold ">
            {" "}
            윤다온 (Yoon Daon, Ben)
          </span>
          <span className="bg-[#40A2E3] w-[4px] h-6 block absolute top-0 left-[-8px]"></span>
          <span className="font-semibold absolute right-0 block text-slate-500 text-sm">
            Last Updated, 2025.05.27
          </span>
        </div>
        <div className="mt-10 flex justify-start items-center border-b-2 pb-8">
          <img className="w-52 h-52 bg-cover rounded-full" src="profile.jpg" />
          <div className="flex flex-col ml-8 space-y-2">
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
              <span onClick={() => {
                window.open("https://github.com/DaonYoon", "_blank");
              }} className="text-slate-500 text-sm border-b  ml-8 cursor-pointer hover:text-[#40A2E3]">
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
                JS | TS | React(18~19) | Vue2 Vue3 | Next | Nuxt(13~15)
              </span>
            </span>
            <span className="font-semibold">
              BackEnd.
              <span className="text-slate-500 text-sm border-b  ml-6">
                PHP | Node | Next | Nest(express) | Java(Spring boot)
              </span>
            </span>
            <span className="font-semibold">
              DataBase.
              <span className="text-slate-500 text-sm border-b  ml-4">
                MYSQL | MongoDB | PostgreSQL | Redis
              </span>
            </span>
            <span className="font-semibold">
              App.
              <span className="text-slate-500 text-sm border-b  ml-[56px]">
                Flutter
              </span>
            </span>
            <span className="font-semibold">
              Server.
              <span className="text-slate-500 text-sm border-b  ml-[40px]">
                S3 | Nginx | Docker GitHub Actions(CI/CD) | GCP
              </span>
            </span>
          </div>
        </div>
        <div className="pt-8 border-b-2 pb-8">
          <span className="text-xl font-semibold text-[#40A2E3]">Record.</span>
          <div className="flex justify-start mt-4">
            <div className="flex flex-col mr-8 font-semibold ">

              <span>개인프로젝트</span>
              <span>2020/03 ~ 2022/02</span>
              <span>2022/10 ~ 2023/11 </span>
              <span>2024/01 ~ 2025/01. </span>
              <span>2025/01 ~ ing. </span>
            </div>
            <div className="flex flex-col text-slate-500">
              <span onClick={() => detailView("opmt")}>
                오픈매트
              </span>
              <span onClick={() => detailView(1)}>
                경남정보대학교 컴퓨터계열 졸업
              </span>
              <span onClick={() => detailView(2)}>(주) 더블미디어 근무 (사원)</span>
              <span onClick={() => detailView(3)}>(주) 씨멘스클럽 근무 (사원) </span>
              <span onClick={() => detailView(4)}>(주) 포스텍 근무 (대리) </span>
            </div>
            <div className="flex flex-col text-slate-500 ml-16">
              <span
                className="hover:text-[#40A2E3] cursor-pointer"
                onClick={() => detailView("opmt")}
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
              <span
                className="hover:text-[#40A2E3] cursor-pointer"
                onClick={() => detailView(4)}
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
