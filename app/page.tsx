import Link from 'next/link';
import { TablerExternalLink, XolvingIcon } from './components/Icons';

export default function Home() {
  return (
    <main className="w-full min-h-screen grid">
      <div className="m-auto border border-neutral-800 bg-neutral-950 shadow-neutral-950 shadow-md rounded-lg w-[30rem] h-[16rem] p-7 grid">
        <div className="flex">
          <div>
            <h1 className="font-semibold text-2xl">김동학</h1>
            <h2>Backend Engineer</h2>
          </div>
          <div className="ml-auto">
            <XolvingIcon scope={50} />
          </div>
        </div>
        <div className="mt-auto grid gap-y-1">
          <div className="flex items-center gap-x-2">
            <TablerExternalLink scope={18} />
            <Link href={'https://blog.fodo.dev'}>Blog</Link>
          </div>
          <div className="flex items-center gap-x-2">
            <TablerExternalLink scope={18} />
            <Link href={'https://github.com/enbraining'}>Github</Link>
          </div>
          <div className="flex items-center gap-x-2">
            <TablerExternalLink scope={18} />
            <Link href={'https://www.linkedin.com/in/enbraining'}>
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
