import ExternalLink from './components/ExternalLink';
import { XolvingIcon } from './components/Icons';

export default function Home() {
  return (
    <main className="w-full min-h-screen grid sm:p-8 p-4">
      {/* Mobile Version */}
      <div className="grid sm:hidden m-auto border border-neutral-800 bg-neutral-950 shadow-neutral-950 shadow-md rounded-lg w-[20rem] h-[25rem] p-7">
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
          <ExternalLink href="https://blog.fodo.dev">Blog</ExternalLink>
          <ExternalLink href="https://github.com/enbraining">
            Github
          </ExternalLink>
          <ExternalLink href="https://www.linkedin.com/in/enbraining">
            LinkedIn
          </ExternalLink>
        </div>
      </div>

      {/* PC Version */}
      <div className="sm:grid hidden m-auto border border-neutral-800 bg-neutral-950 shadow-neutral-950 shadow-md rounded-lg w-[30rem] h-[16rem] p-7">
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
          <ExternalLink href="https://blog.fodo.dev">Blog</ExternalLink>
          <ExternalLink href="https://github.com/enbraining">
            Github
          </ExternalLink>
          <ExternalLink href="https://www.linkedin.com/in/enbraining">
            LinkedIn
          </ExternalLink>
        </div>
      </div>
    </main>
  );
}
