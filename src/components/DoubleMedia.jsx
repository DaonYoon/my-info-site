import React, { useEffect, useState } from "react";
import CheckCircle from "./CheckCircle";

export default function DoubleDetail({ onClose }) {
  return (
    <div className="w-[500px] p-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-md bg-white z-10 rounded-lg">
      <div className="flex justify-between border-b items-center pb-2">
        <span className="font-semibold">(주)더블미디어 상세 페이지</span>
        <button
          className="p-2 bg-sky-500 rounded-md text-white mr-4 w-12 text-sm font-semibold text-center"
          onClick={onClose}
        >
          닫기
        </button>
      </div>
      <div className="text-gray-700">
        <h1 className="text-xl font-bold">이력</h1>

        <div className="flex flex-col items-start border-b mb-2 pb-2">
          <div>
            <span>- 팬더티비 플랫폼 프론트엔드 유지보수</span>
            <span
              onClick={() => {
                window.open("https://www.pandalive.co.kr/live", "_blank");
              }}
              className="ml-2 text-sky-500 hover:text-sky-600 cursor-pointer"
            >
              바로가기
            </span>
          </div>
          <span className="flex">
            <CheckCircle /> Vue2, Nuxt2
          </span>

          <h1 className="font-semibold">2022/10 ~</h1>
        </div>
        <div className="flex flex-col items-start border-b mb-2 pb-2">
          <h1 className="font-semibold">2022/12 ~</h1>
          <span className="">- 팬더티비 어드민 프로그램 제작 </span>
          <span className="flex">
            <CheckCircle /> Vue3, Electron, WebSocket
          </span>
        </div>
        <div className="flex flex-col items-start border-b mb-2 pb-2">
          <h1 className="font-semibold">2023/04 ~</h1>
          <span className="">- 팬더티비 플랫폼 백엔드 유지보수 </span>
          <span className="flex">
            <CheckCircle /> PHP, Mysql, Redis
          </span>
        </div>
        <div className="flex flex-col items-start border-b mb-2 pb-2">
          <h1 className="font-semibold">2023/08 ~</h1>
          <span className="">- 팬더티비 플랫폼 풀스택 개발 </span>
          <span className="flex">
            <CheckCircle /> Vue2, Nuxt2, PHP, Mysql, Redis
          </span>
        </div>
      </div>
    </div>
  );
}
