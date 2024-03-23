import React, { useEffect, useState } from "react";
import CheckCircle from "./CheckCircle";

export default function SeamansDetail({ onClose }) {
  return (
    <div className="w-[500px] p-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-md bg-white z-10 rounded-lg">
      <div className="flex justify-between border-b items-center pb-2">
        <span className="font-semibold">(주)씨멘스클럽 상세 페이지</span>
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
          <h1 className="font-semibold">2024/01 ~</h1>
          <div>
            <span>- 씨멘스클럽 뉴스페이지 제작 (반응형)</span>
            <span
              onClick={() => {
                window.open(
                  "https://www.seamansclub.com/seamansclub-news/",
                  "_blank"
                );
              }}
              className="ml-2 text-sky-500 hover:text-sky-600 cursor-pointer"
            >
              바로가기
            </span>
          </div>

          <span className="flex">
            <CheckCircle /> React
          </span>
        </div>
        <div className="flex flex-col items-start border-b mb-2 pb-2">
          <h1 className="font-semibold">2024/02 ~ Ing</h1>
          <div>
            <span className="">- 씨멘스클럽 홈페이지 리뉴얼 (반응형)</span>
            <span
              onClick={() => {
                window.open("https://main.seamansclub.site/", "_blank");
              }}
              className="ml-2 text-sky-500 hover:text-sky-600 cursor-pointer"
            >
              바로가기
            </span>
          </div>
          <span className="flex">
            <CheckCircle /> Next, React
          </span>
          <span className="">- 씨멘스클럽 홈페이지 배포</span>
          <span className="flex">
            <CheckCircle /> AWS EC2, Nginx, Docker
          </span>
          <span className="">- 씨멘스클럽 홈페이지 배포 자동화 ( CICD )</span>
          <span className="flex">
            <CheckCircle /> GitHub Actions
          </span>
        </div>
      </div>
    </div>
  );
}
