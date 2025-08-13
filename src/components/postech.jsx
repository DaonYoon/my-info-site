import React from 'react';
import CheckCircle from './CheckCircle';

/**
 * PostechDetail
 * - 데이터 기반 렌더링 + 소컴포넌트 분리
 * - 반응형: 모바일 w-full, 데스크톱 max-w
 */
export default function PostechDetail({ onClose }) {
  const sections = [
    {
      date: '2025/01 ~ 2025/03',
      items: [
        {
          title: '완도 해양치유센터 관리자페이지 ERP',
          tech: ['React 18'],
        },
      ],
    },
    {
      date: '2024/02 ~ ing.',
      items: [
        {
          title: '완도 해양치유센터 배정프로그램',
          tech: ['React 18', 'React Query', 'Tailwind CSS', 'Electron(자동업데이트)'],
        },
        {
          title: '완도 해양치유센터 건강측정 키오스크 프로그램',
          tech: ['React 18', 'React Query', 'Tailwind CSS', 'Electron(자동업데이트)'],
          description: '기기에 연결된 카메라 연동하여 실시간 촬영을 통해 사용자 건강측정 후 연결된 API에 결과값전송하면, 측정결과를 현재 사용자의 건강상태를 반환',
        },
        {
          title: '완도 해양치유센터 포스(결제, 배정)',
          tech: ['React 18', 'React Query', 'Tailwind CSS', 'Electron(자동업데이트)'],
          description: '결제시스템을 연동하여 사용자 결제 후 영수증 출력 및 결제내역을 DB에 저장하는 프로그램',
        },
        {
          title: '완도 해양치유센터 키오스크(결제, 배정)',
          tech: ['React 18', 'React Query', 'Tailwind CSS', 'Electron(자동업데이트)'],
          description: '직원의 업무 과중화를 피하기위해, 사용자 스스로 결제 및 배정이 가능하도록 키오스크 프로그램 개발',
        },
        {
          title: '완도 해양치유센터 입장프로그램 알고리즘 구축',
          description: '치유방에 입장하면 RFID리더기를 통해 사용자 몸에있는 태그 자동인식하는 하이패스 시스템 구축',
          tech: ['Node.js', 'Express', 'Socket.IO'],
        },
        {
          title: '배포 자동화 (CI/CD)',
          tech: ['GitHub Actions', 'Linux', 'Nginx', 'PM2'],
        },
      ],
    },
  ];

  return (
    <ModalCard title="(주)포스텍 상세 페이지" onClose={onClose}>
      <div className="text-gray-700">
        <h1 className="text-xl font-bold">이력</h1>
        <div className="mt-2 space-y-4">
          {sections.map(sec => (
            <Section key={sec.date} date={sec.date} items={sec.items} />
          ))}
        </div>
      </div>
    </ModalCard>
  );
}

/** Modal wrapper */
function ModalCard({ title, onClose, children }) {
  return (
    <div className="w-full max-w-[560px] p-4 sm:p-6 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white shadow-lg z-10">
      <div className="flex items-center justify-between pb-2 border-b">
        <span className="font-semibold">{title}</span>
        <button className="px-3 py-2 bg-sky-500 rounded-md text-white text-sm font-semibold hover:bg-sky-600" onClick={onClose}>
          닫기
        </button>
      </div>
      <div className="pt-3">{children}</div>
    </div>
  );
}

/** Date section */
function Section({ date, items }) {
  return (
    <section className="border-b pb-3 last:border-none">
      <h2 className="font-semibold">{date}</h2>
      <ul className="mt-1 space-y-2">
        {items.map((item, idx) => (
          <li key={`${date}-${idx}`} className="space-y-1">
            <p className="font-semibold">- {item.title}</p>
            {item.description && <Bullet>{item.description}</Bullet>}
            {Array.isArray(item.tech) && item.tech.length > 0 && <TechList tech={item.tech} />}
          </li>
        ))}
      </ul>
    </section>
  );
}

/** bullet line with Check icon */
function Bullet({ children }) {
  return (
    <span className="flex items-start gap-2 text-sm text-gray-700">
      <CheckCircle />
      <span>{children}</span>
    </span>
  );
}

/** pill style tech stack list */
function TechList({ tech }) {
  return (
    <div className="flex flex-wrap items-center gap-1.5">
      <span className="flex items-center gap-2 text-sm">
        <CheckCircle />
      </span>
      <div className="flex flex-wrap gap-1.5">
        {tech.map(t => (
          <span key={t} className="inline-flex rounded-full border border-slate-200 px-2 py-0.5 text-xs text-slate-600">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
