import { useState } from 'react';
import Header from './components/header';
import SchoolDetail from './components/School';
import DoubleDetail from './components/DoubleMedia';
import SeamansDetail from './components/SeamansClub';
import PostechDetail from './components/postech';
import OpmtDetail from './components/opmt';

export default function App() {
  const [detailStatus, setDetailStatus] = useState(0);

  const row1 = [
    'https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/7ae42bac3b34999c0db3.png',
    'https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/b2bd91d7b87b2181ca45.png',
    'https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/6591cdc0702b32310306.png',
   // 'https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/3b7d9f4b073deb6a9b74.png',
    'https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/3cd767dea94a85078ca4.png',
    'https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/a2b3c3709ffedce2a22a.png',
  ];

  const row2 = [
    'https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/6c585c33ca6c71c79bb7.png',
    'https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/9dd55e54b5a28658bf4e.png',
    'https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/0384060dcbf73b6a707c.png',
    'https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/35e044b3354aaa0caed5.png',
    'https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/f50ae7cbf6cc805bdadc.png',
    'https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/6c585c33ca6c71c79bb7.png',
  ];

  const detailView = data => setDetailStatus(data);
  const onClose = () => setDetailStatus(0);

  return (
    <div className="relative min-h-[100dvh] bg-gradient-to-b from-white to-slate-50 text-slate-800">
      {/* Modals / Detail Sheets */}
      {detailStatus === 1 && <SchoolDetail onClose={onClose} />}
      {detailStatus === 2 && <DoubleDetail onClose={onClose} />}
      {detailStatus === 3 && <SeamansDetail onClose={onClose} />}
      {detailStatus === 4 && <PostechDetail onClose={onClose} />}
      {detailStatus === 'opmt' && <OpmtDetail onClose={onClose} />}

      <Header />

      {/* Top marquee showcase */}
      <section className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 pt-6">
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="relative">
            <div className="flex w-full select-none">
              <div className="flex flex-none items-center gap-6 animate-marquee will-change-transform py-3 pr-6">
                {[...row1, ...row1].map((item, index) => (
                  <div key={`r1-${index}`} className="h-4 sm:h-4 md:h-8 lg:h-12 xl:h-16 w-auto grid place-items-center">
                    <img src={item} alt="Showcase logo" loading="lazy" className="h-full w-fit object-contain rounded-lg" />
                  </div>
                ))}
              </div>
            </div>
            <div className="flex w-full select-none">
              <div className="flex flex-none items-center gap-6 animate-marquee-reverse will-change-transform py-3 pr-6">
                {[...row2, ...row2].map((item, index) => (
                  <div key={`r2-${index}`} className="h-4 sm:h-4 md:h-8 lg:h-12 xl:h-16 w-auto grid place-items-center">
                    <img src={item} alt="Showcase logo" loading="lazy" className="h-full w-fit object-contain rounded-lg" />
                  </div>
                ))}
              </div>
            </div>
            {/* gradient masks */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent" />
          </div>
        </div>
      </section>

      {/* Profile + Contact */}
      <section className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="relative mt-8 flex items-center justify-between">
          <div>
            <span className="text-slate-500 font-semibold ml-2">윤다온 (Yoon Daon, Ben)</span>
            <span className="absolute -left-2 top-0 block h-6 w-1.5 rounded-full bg-[#40A2E3]" />
          </div>
          <span className="text-xs sm:text-sm font-semibold text-slate-500">Last Updated, 2025.08.13</span>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-[auto,1fr] items-center border-b-2 border-slate-200 pb-8">
          <div className="mx-auto md:mx-0">
            <img src="profile.jpg" alt="Profile" className="h-36 w-36 sm:h-44 sm:w-44 md:h-52 md:w-52 rounded-full object-cover shadow-md" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-[#40A2E3]">Contact</h3>
              <dl className="space-y-2 text-sm sm:text-base">
                <div className="flex items-center gap-3">
                  <dt className="font-semibold">Phone.</dt>
                  <dd className="text-slate-600">010-5685-7691</dd>
                </div>
                <div className="flex items-center gap-3">
                  <dt className="font-semibold">Email.</dt>
                  <dd className="text-slate-600">zfydz@naver.com</dd>
                </div>
                <div className="flex items-center gap-3">
                  <dt className="font-semibold">GitHub.</dt>
                  <dd>
                    <button onClick={() => window.open('https://github.com/DaonYoon', '_blank')} className="text-slate-600 hover:text-[#40A2E3] underline underline-offset-4">
                      github.com/DaonYoon
                    </button>
                  </dd>
                </div>
              </dl>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-[#40A2E3]">Skills</h3>
              <div className="grid grid-cols-2 gap-2 text-sm sm:text-base">
                <Skill label="CSS" items={['SCSS', 'Tailwind', 'Styled-Components']} />
                <Skill label="FrontEnd" items={['JS', 'TS', 'React 18~19', 'Vue 2/3', 'Next', 'Nuxt 13~15', "Electron"]} />
                <Skill label="BackEnd" items={['PHP', 'Node', 'Next', 'Nest (express)', 'Java (Spring Boot)']} />
                <Skill label="Database" items={['MySQL', 'MongoDB', 'PostgreSQL', 'Redis']} />
                <Skill label="App" items={['Flutter']} />
                <Skill label="Server" items={['S3', 'Nginx', 'Docker', 'GitHub Actions (CI/CD)', 'GCP(Google Cloud Platform)', 'EC2']} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Record / Timeline */}
      <section className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-8">
        <h3 className="text-lg sm:text-xl font-semibold text-[#40A2E3]">Record</h3>
        <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-[220px,1fr]">
          <div className="font-semibold text-slate-700 space-y-4">
            <p>개인프로젝트</p>
            <p>2020/03 ~ 2022/02</p>
            <p>2022/10 ~ 2023/11</p>
            <p>2024/01 ~ 2025/01</p>
            <p>2025/01 ~ ing</p>
          </div>

          <ul className="relative space-y-4 before:absolute before:left-3 before:top-0 before:h-full before:w-0.5 before:rounded before:bg-slate-200">
            <TimelineItem onClick={() => detailView('opmt')} title="오픈매트" />
            <TimelineItem onClick={() => detailView(1)} title="경남정보대학교 컴퓨터계열 졸업" />
            <TimelineItem onClick={() => detailView(2)} title="(주) 더블미디어 근무 (사원)" />
            <TimelineItem onClick={() => detailView(3)} title="(주) 씨멘스클럽 근무 (사원)" />
            <TimelineItem onClick={() => detailView(4)} title="(주) 포스텍 근무 (계약직, 직급은 대리)" />
          </ul>
        </div>
      </section>

      {/* Local styles for marquee keyframes */}
      <style>{`
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes marquee-reverse { from { transform: translateX(-50%); } to { transform: translateX(0); } }
        .animate-marquee { animation: marquee 30s linear infinite; }
        .animate-marquee-reverse { animation: marquee-reverse 30s linear infinite; }
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee, .animate-marquee-reverse { animation: none; }
        }
      `}</style>
    </div>
  );
}

function Skill({ label, items }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm select-none">
      <div className="mb-2 text-sm font-semibold text-slate-800">{label}</div>
      <div className="flex flex-wrap gap-1.5">
        {items.map(it => (
          <span key={`${label}-${it}`} className="inline-flex items-center rounded-full border border-slate-200 px-2 py-0.5 text-xs text-slate-600">
            {it}
          </span>
        ))}
      </div>
    </div>
  );
}

function TimelineItem({ title, onClick }) {
  return (
    <li className="relative pl-10">
      <span className="absolute left-0 top-1 grid h-6 w-6 place-items-center rounded-full bg-[#40A2E3]/10 text-[#40A2E3] shadow-sm">
        <ArrowRightIcon className="h-4 w-4" />
      </span>
      <button onClick={onClick} className="text-left text-slate-600 hover:text-[#40A2E3] font-semibold transition-colors">
        {title}
      </button>
    </li>
  );
}

function ArrowRightIcon({ className = 'h-5 w-5' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={className} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
    </svg>
  );
}
