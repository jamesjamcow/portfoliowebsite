import { projects } from "./data";
import { ProjectGrid } from "./components/ProjectSection";
import { ImageGax } from "./components/ImageGax";
import { images } from "./data";
import { NavBar } from "./components/NavBar";
import { navItems } from "./data";

function App() {
  return (
    <>
      <div className="text-[#513D24] bg-[#FCFBFA] min-h-screen w-full bg-[radial-gradient(#EFE9E3_1px,transparent_1px)] bg-size-[16px_16px] py-20">
        <div className="flex flex-col mx-auto gap-4 max-w-4xl">
          <div className="mx-auto px-4 py-16 font-sans">
            <div className="flex flex-row">
              <div className="w-3/5 mr-2">
                <div className="flex items-center justify-between">
                  <h1 className="text-5xl font-bold">Hey, I'm James Cao</h1>
                </div>
                <p className="mt-3">
                  Software/Computer Engineer. Hardware(ish).
                </p>
                <p className="mt-1">Incoming Student At @Uwaterloo</p>

                <p className="mt-8 text-xl font-bold">
                  The highlight of my journey:
                </p>
                <ul className="mt-2 pr-5 list-disc space-y-1.5 pl-5 text-md">
                  <li>
                    Founded and scaled{" "}
                    <span className="rounded bg-yellow-200/80 px-1.5 py-0.5 font-medium">
                      Hack Canada
                    </span>{" "}
                   into one of Canada's largest hackathons. 700 hackers, 200 projects.
                  </li>
                  <li>
                    Built Canada's largest{" "}
                    <span className="rounded bg-yellow-200/80 px-1.5 py-0.5 font-medium">
                      hackathon community
                    </span>{" "}
                    5k members. 8M+ Impressions across instagram and Linkedin.
                  </li>
                  <li>
                    Help Host{" "}
                    <span className="rounded bg-yellow-200/80 px-1.5 py-0.5 font-medium">
                      Stan's
                    </span>{" "}
                    flag ship Hackathon. 70 Builers. 20K First Prize. 100K+
                    Impressions. Three Engineers Hired.
                  </li>
                  <li>
                    Hosting a kick off Hackathon for a{" "}
                    <span className="rounded bg-yellow-200/80 px-1.5 py-0.5 font-medium">
                      Frontier AI Lab
                    </span>{" "}
                    [Backed by Griffin Gaming Partners, a16z, and more] to find
                    top AI talent in Canada.
                  </li>
                </ul>
              </div>
              <div className="w-2/5 self-stretch">
                <ImageGax images={images} />
              </div>
            </div>
            <div className="mt-20">
              <ProjectGrid projects={projects} />
            </div>
          </div>
        </div>
        <div className="fixed inset-x-0 bottom-0 z-50 p-10 flex items-center justify-center w-full">
          <NavBar items={navItems} />
        </div>
        
      </div>
    </>
  );
}

export default App;
