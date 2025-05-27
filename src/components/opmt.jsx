const des = `직방과 비교하자면 앱에서 방을 알아본후 찾아가는것처럼\n 주짓수또한 다른지역 체육관에 방문하고싶을때\n기술적으로 교류하고싶을때 체육관을 개방하고싶은사람은\n 글을올리고 체육관에 방문하고싶은 사람은 해당글을 확인하여\n 방문할수있게 만드는 소셜 앱입니다.\n추후 주짓수 커뮤니티(동아리, 자유게시판) 기능을\n 추가할 예정이며 각종 대회홍보 또는 세미나 홍보 및\n 주짓수 물품 판매기능도 추가할 예정입니다.\n`;

export default function OpmtDetail({ onClose }) {
  return (
    <div className="w-[500px] p-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-md bg-white z-10 rounded-lg">
      <div className="flex justify-between border-b items-center pb-2">
        <span className="font-semibold">오픈매트 상세 페이지</span>
        <button className="p-2 bg-sky-500 rounded-md text-white mr-4 w-12 text-sm font-semibold text-center" onClick={onClose}>
          닫기
        </button>
      </div>
      <div className="text-gray-700">
        <h1 className="text-xl font-bold">설명</h1>
        <div className="flex flex-col items-start border-b mb-2 pb-2">
          <div>
            <span className="whitespace-pre-line">{des}</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start border-b mb-2 pb-2 space-y-1">
        <h1 className="font-bold">웹페이지 (Next15, React19, Nest)</h1>
        <div>
          <span
            onClick={() => {
              window.open('https://www.opmtweb.com', '_blank');
            }}
            className="font-semibold cursor-pointer hover:text-sky-500"
          >
            https://opmtweb.com
          </span>
        </div>
      </div>
      <div className="flex flex-col items-start border-b mb-2 pb-2 space-y-1">
        <h1 className="font-bold">앱 (Flutter)</h1>
        <div>
          <span className="font-semibold">앱스토어 / 플레이스토어 "오픈매트" 검색</span>
        </div>
      </div>
    </div>
  );
}
