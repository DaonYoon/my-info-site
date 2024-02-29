import React, { useEffect, useState } from "react";

export default function SchoolDetail({ onClose }) {
  return (
    <div className="w-[500px] p-4 h-[300px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-md bg-white z-10 rounded-lg">
      <div className="flex justify-between border-b items-center pb-2">
        <span className="font-semibold">경남정보대학교 상세 페이지</span>
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
          <h1 className="font-semibold">1학년</h1>
          <span>- Let's Coding 웹 애플리케이션 창업 동아리 활동</span>
        </div>
        <div className="flex flex-col items-start">
          <h1 className="font-semibold">2학년</h1>
          <span>- 컴퓨터계열 학생회장 으로 활동</span>
          <span>- 프로보노 IOT 공모전 경연대회 참여</span>
          <span className="text-sm pl-2">( 3D프린터, 하드웨어, 웹 중 웹 담당 )</span>
        </div>
      </div>
    </div>
  );
}
