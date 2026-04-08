import ProjectCard from '../components/ProjectCard';
import { projectList } from '../helpers/projectList';
import { v4 as uuidv4 } from 'uuid';

function Projects() {
  return (
    <section className='my-2 mx-auto w-3/4'>
      <h1 className='my-4 py-8 text-3xl sm:text-4xl md:text-5xl text-center text-nature-altLight text-shadow-xs text-shadow-nature-light'>
        Projects
      </h1>

      <div className='flex flex-wrap gap-16 justify-center'>
        {projectList.map((project) => (
          <ProjectCard
            key={uuidv4()}
            cardImage={project.projectImageUrl}
            localImage={project.projectImage}
            title={project.projectTitle}
            description={project.projectDescription}
            demoLink={project.projectLinks[0].url}
            sourceLink={project.projectLinks[1].url}
            techStack={project.techStack}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
