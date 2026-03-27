import { projects } from "./data";
import { ProjectGrid } from "./components/ProjectSection";

function App() {
  return (
    <>
      <div className="absolute inset-0 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-size-[16px_16px] py-20">
        <div className="flex flex-col mx-auto gap-4 max-w-4xl">
          <div className="mx-auto max-w-3xl px-4 py-12 font-sans">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold">Hey, I'm James Cao</h1>
              <div className="flex items-center text-gray-700">
                {/* <a href="#">
                  <XIcon />
                </a>
                <a href="#">
                  <GithubIcon />
                </a>
                <a href="#">
                  <LinkedinIcon />
                </a>
                <a href="#">
                  <DevpostIcon />
                </a>
                <a href="#">
                  <MailIcon />
                </a> */}
              </div>
            </div>

            <p className="mt-2 text-gray-800">
              Software/Computer Engineer. Incoming student at{" "}
              <span className="rounded bg-yellow-200 px-1.5 py-0.5 font-medium hover:bg-yellow-300">
                @uwaterloo
              </span>
            </p>

            <p className="mt-6 font-semibold text-gray-900">
              The highlight of my journey:
            </p>
            <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm text-gray-800">
              <li>
                Founded and scaled <span className="rounded bg-red-200 px-1.5 py-0.5 font-medium">
                  Hack Canada
                </span> to one of the largest hackathons
                IN Canada. 700 Hackers. 200 projects.
              </li>
              <li>
                Built Canada's largest{" "}
                <span className="rounded bg-yellow-200 px-1.5 py-0.5 font-medium">
                  Hackathons Community
                </span>{" "}
                 5k members. 8M+ Impressions across instagram and Linkedin.
              </li>
              <li>
                Help Host{" "}
                <span className="rounded bg-green-200 px-1.5 py-0.5 font-medium">
                  Stan
                </span>{" "}
                Flag Ship Hackathon. 70 Builers. 20K First Prize. 100K+
                Impressions. Three Engineers Hired.
              </li>
              <li>
                Hosting a kick off Hackathon for a{" "}
                <span className="rounded bg-red-200 px-1.5 py-0.5 font-medium">
                  Frontier AI Lab
                </span> [Backed by Griffin Gaming Partners, a16z, and more] to find top AI talent in Canada.
              </li>
            </ul>

            <div className="mx-auto max-w-3xl px-4 py-12">
              <ProjectGrid projects={projects} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
