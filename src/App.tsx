function App() {
  return (
    <>
      <div className="absolute inset-0 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-size-[16px_16px] py-20">
        <div className="flex flex-col mx-auto gap-4 max-w-4xl">
          <div className="mx-auto max-w-3xl px-4 py-12 font-sans">
            {/* Header */}
            <div className="flex items-center justify-between">
              <h1 className="text-5xl font-bold">Hey, I'm James Cao</h1>
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

            {/* Intro */}
            <p className="mt-6 text-gray-800">
              Software/Computer Engineer. Incoming student at{" "}
              <span className="rounded bg-yellow-200 px-1.5 py-0.5 font-medium hover:bg-yellow-300">
                @uwaterloo
              </span>{" "}. I love Hackathons.
            </p>

            {/* Cool things */}
            <p className="mt-6 font-semibold text-gray-900">
              The highlight of my journey:
            </p>
            <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm text-gray-800">
              <li>
                Founded and scaled Hack Canada to one of the largest worked on building the best edtech platform in the world{" "}
                <span className="rounded bg-orange-200 px-1.5 py-0.5 font-medium">
                  @RevisionDojo (YCF24)
                </span>
              </li>
              <li>
                spent a year building autonomous drones to predict forest fires
                [backed by{" "}
                <span className="rounded bg-yellow-200 px-1.5 py-0.5 font-medium">
                  bloomberg philanthropies
                </span>{" "}
                ]
              </li>
              <li>
                built a{" "}
                <span className="rounded bg-green-200 px-1.5 py-0.5 font-medium">
                  community
                </span>{" "}
                for cracked/ambitious teenagers building cool sh*t
              </li>
              <li>
                worked as a growth intern at{" "}
                <span className="rounded bg-red-200 px-1.5 py-0.5 font-medium">
                  hack club
                </span>
                , grew{" "}
                <span className="rounded bg-red-200 px-1.5 py-0.5 font-medium">
                  @starthackclub
                </span>{" "}
                to 100k followers
              </li>
              <li>
                organized{" "}
                <span className="rounded bg-green-200 px-1.5 py-0.5 font-medium">
                  canada's largest high school hackathon
                </span>
                , raised $50k
              </li>
              <li>
                founded{" "}
                <span className="rounded bg-purple-200 px-1.5 py-0.5 font-medium">
                  robotics club
                </span>{" "}
                at my hs, ranked top 62/2400 in the world
              </li>
              <li>
                won bronze [3rd place] at the{" "}
                <span className="rounded bg-blue-200 px-1.5 py-0.5 font-medium">
                  canadian world robot olympiad
                </span>
              </li>
              <li>
                started my own{" "}
                <span className="rounded bg-orange-200 px-1.5 py-0.5 font-medium">
                  summer camp
                </span>{" "}
                to teach kids how to code
              </li>
            </ul>

            <a
              href="#"
              className="mt-4 inline-block text-sm font-medium text-gray-900 underline"
            >
              Read More
            </a>

            {/* Tabs */}
            <div className="mt-10 flex items-center justify-between border-b border-gray-200 pb-2">
              <div className="flex items-center gap-4">
                <button className="rounded-full bg-black px-4 py-1.5 text-sm font-medium text-white">
                  Everything
                </button>
                <button className="text-sm text-gray-500 hover:text-gray-900">
                  Projects
                </button>
                <button className="text-sm text-gray-500 hover:text-gray-900">
                  Communities
                </button>
              </div>
              <button className="text-gray-500 hover:text-gray-900">
                {/* <SearchIcon /> */}
              </button>
            </div>

            {/* Cards */}
            <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2">
              {/* Card 1 */}
              <div>
                <div className="overflow-hidden rounded-xl">
                  <img
                    src="/revisiondojo.png"
                    alt="RevisionDojo"
                    className="aspect-[4/3] w-full object-cover"
                  />
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <h3 className="font-semibold text-gray-900">
                    RevisionDojo (YCF24)
                  </h3>
                  <span className="text-xs text-gray-500">internship</span>
                </div>
                <p className="mt-1 text-xs leading-relaxed text-gray-600">
                  over fall 2025, I worked at RevisionDojo as a software
                  engineer. built and shipped new features used by 600k+
                  students. learnt a lot and worked with some of the coolest
                  people.
                </p>
              </div>

              {/* Card 2 */}
              <div>
                <div className="overflow-hidden rounded-xl">
                  <img
                    src="/tensorforest.png"
                    alt="tensorforest"
                    className="aspect-[4/3] w-full object-cover"
                  />
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <h3 className="font-semibold text-gray-900">tensorforest</h3>
                  <span className="text-xs text-gray-500">project</span>
                </div>
                <p className="mt-1 text-xs leading-relaxed text-gray-600">
                  drones that find early forest fire risks. used remote sensing,
                  NDVI, and onboard ML to detect dangerous vegetation zones and
                  generate orthomosaic risk maps before fires start. worked with
                  the town of oakville to test it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
