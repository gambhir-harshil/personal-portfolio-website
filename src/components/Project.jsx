import { Launch, GitHub } from "@mui/icons-material";

export default function Project({ project }) {
  return (
    <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-8 items-center justify-center md:p-20 p-8 2xl:p-44 h-screen">
      <h1 className="text-3xl font-semibold tracking-wide">{project.name}</h1>
      <div className="relative lg:flex w-[80%] items-center hidden">
        <img
          src={project.image}
          alt={project.name}
          className="xl:h-[350px] 2xl:h-[400px] h-[300px] z-0 grayscale hover:grayscale-0 transition-all ease-in-out drop-shadow-xl"
        />
        <div className="absolute text-secondary right-0 top-1/2 w-[50%] z-50 max-w-xl -translate-y-1/2 flex flex-col gap-5">
          <div className="bg-primary/80 rounded-lg 2xl:p-12 p-8 font-medium xl:text-base text-sm drop-shadow-xl">
            {project.description}
          </div>
          <div className="flex gap-4 xl:text-base text-sm font-semibold text-secondary items-end justify-end px-12">
            {project.stack.map((stack, id) => (
              <span key={id}>{stack}</span>
            ))}
          </div>
          <div className="flex items-end justify-end px-12 gap-4">
            <a href={project.repo} target="_blank" className="hover:text-white">
              <GitHub />
            </a>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                className="hover:text-white"
              >
                <Launch />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* For small devices */}

      <div className="lg:hidden flex-col relative">
        <img
          src={project.image}
          alt={project.name}
          className="md:h-[300px] h-[250px] z-0 grayscale hover:grayscale-0 transition-all ease-in-out drop-shadow-xl"
        />
        <div className="absolute h-full w-full top-0 text-secondary z-50 gap-5">
          <div className="bg-primary/80 flex flex-col justify-around h-full w-full px-4 py-2 sm:px-8 font-medium sm:text-sm text-xs md:text-base drop-shadow-xl">
            {project.description}
            <div className="flex gap-4 md:text-base sm:text-sm text-xs font-semibold text-white items-end justify-end sm:px-12 px-4">
              {project.stack.map((stack, id) => (
                <span key={id}>{stack}</span>
              ))}
            </div>
            <div className="flex items-end justify-end sm:px-12 px-4 gap-4">
              <a
                href={project.repo}
                target="_blank"
                className="hover:text-white"
              >
                <GitHub />
              </a>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  className="hover:text-white"
                >
                  <Launch />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
