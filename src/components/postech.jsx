import React, { useEffect, useState } from "react";
import CheckCircle from "./CheckCircle";

export default function PostechDetail({ onClose }) {
  return (
    <div className="w-[500px] p-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-md bg-white z-10 rounded-lg">
      <div className="flex justify-between border-b items-center pb-2">
        <span className="font-semibold">(주)포스텍 상세 페이지</span>
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
          <h1 className="font-semibold">2025/01</h1>
          <div>
            <span className="font-semibold">- 완도 해양치유센터 관리자페이지 ERP</span>
          </div>

          <span className="flex">
            <CheckCircle /> React18
          </span>
        </div>
        <div className="flex flex-col items-start border-b mb-2 pb-2 space-y-1">
          <h1 className="font-bold">2024/02 ~ ing.</h1>
          <div>
            <span className="font-semibold">- 완도 해양치유센터 배정프로그램</span>
          </div>
          <span className="flex">
            <CheckCircle /> React18, React-Query, Tailwind CSS, Electron (자동업데이트)
          </span>
          <span className="font-semibold">- 완도 해양치유센터 건강측정 키오스크 프로그램</span>
          <span className="flex">
            <CheckCircle /> React18, React-Query, Tailwind CSS, Electron (자동업데이트)
          </span>
      
          <span className="font-semibold">- 완도 해양치유센터 포스 프로그램(결제)</span>
          <span className="flex">
            <CheckCircle /> React18, React-Query, Tailwind CSS, Electron (자동업데이트)
          </span>
          <span className="font-semibold">- 완도 해양치유센터 입장프로그램</span>
          <span className="flex">
            <CheckCircle /> 치유방에 입장하면 사용자가 몸에있는 태그 자동인식하는 시스템 구축 (자세한 설명은 이메일 부탁드립니다.)
          </span>
          <span className="font-semibold">- 배포 자동화 ( CICD )</span>
          <span className="flex">
            <CheckCircle /> GitHub Actions, Linux, Eginx, PM2
          </span>
        </div>
      </div>
    </div>
  );
}
