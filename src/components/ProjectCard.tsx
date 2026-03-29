import type { Project } from "../type";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div>
      <div className="overflow-hidden bg-gray-100">
        <img
          src={project.image}
          alt={project.title}
          className="aspect-[4/3] w-full object-cover"
        />
      </div>

      <div className="mt-3 flex items-center gap-2">
        <h3 className="font-semibold text-gray-900">{project.title}</h3>
        {project.tag ? (
          <span
            className={`ml-auto whitespace-nowrap rounded-full ${project.tag.color} px-2.5 py-0.5 text-xs font-medium text-white`}
          >
            {project.tag.label}
          </span>
        ) : (
          <span className="ml-auto text-xs text-gray-500">
            {project.category}
          </span>
        )}
      </div>

      <p className="mt-1 text-xs leading-relaxed text-gray-600">
        {project.description}
        {project.link && (
          <>
            {" "}
            <a
              href={project.link.href}
              className="underline hover:text-gray-900"
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.link.text}
            </a>
          </>
        )}
      </p>
    </div>
  );
}