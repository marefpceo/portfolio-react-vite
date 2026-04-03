import ProjectCard from '../components/ProjectCard';
import placeholder from '../assets/placeholder-view.png';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const cardTitle = 'Last Stop Shop';
const description =
  'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est ipsum modi error facilis doloribus quas, adipisci dicta provident incidunt cupiditate.';

function Projects() {
  return (
    <section className='my-2 mx-auto w-3/4'>
      <h1 className='my-4 py-4 text-center text-nature-altLight text-shadow-xs text-shadow-nature-light'>
        Projects
      </h1>

      <div className='flex flex-wrap gap-8 justify-center'>
        <Carousel>
          <CarouselContent>
            <CarouselItem>
              <ProjectCard
                cardImage={placeholder}
                title={cardTitle}
                description={description}
              />
            </CarouselItem>
            <CarouselItem>
              <ProjectCard
                cardImage={placeholder}
                title={cardTitle}
                description={description}
              />
            </CarouselItem>
            <CarouselItem>
              <ProjectCard
                cardImage={placeholder}
                title={cardTitle}
                description={description}
              />
            </CarouselItem>
            <CarouselItem>
              <ProjectCard
                cardImage={placeholder}
                title={cardTitle}
                description={description}
              />
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}

export default Projects;
