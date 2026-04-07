import ProjectCard from '../components/ProjectCard';
import placeholder from '../assets/placeholder-view.png';
import { projectList } from '../helpers/projectList';

const cardTitle = 'Last Stop Shop';
const description =
  'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est ipsum modi error facilis doloribus quas, adipisci dicta provident incidunt cupiditate.';

function Projects() {
  return (
    <section className='my-2 mx-auto w-3/4'>
      <h1 className='my-4 py-8 text-3xl sm:text-4xl md:text-5xl text-center text-nature-altLight text-shadow-xs text-shadow-nature-light'>
        Projects
      </h1>

      <div className='flex flex-wrap gap-16 justify-center'>
        {projectList.map((project) => (
          <ProjectCard
            cardImage={placeholder}
            title={project.projectTitle}
            description={project.projectDescription}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
