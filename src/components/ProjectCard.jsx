import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import TechTextBubble from './TextBubble';
import { Link } from 'react-router';
import { AdvancedImage } from '@cloudinary/react';
import { auto } from '@cloudinary/url-gen/actions/resize';
import cld from '../utilities/CloudinaryConfig';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';

function ProjectCard({
  cardImage,
  localImage,
  title,
  description,
  demoLink,
  sourceLink,
  techStack,
}) {
  const [imageSrc, setImageSrc] = useState(
    processProjectImage(cardImage).toURL(),
  );

  function handleError(e) {
    e.targe.onerror = null;
    setImageSrc(localImage);
  }

  function processProjectImage(imageId) {
    const image = cld
      .image(imageId)
      .format('auto')
      .quality('auto')
      .resize(auto());
    return image;
  }

  console.log(processProjectImage(cardImage).toURL());

  return (
    <div className='h-fit p-0 border border-nature-accent/65 rounded-md w-96'>
      <div className='image-div bg-nature-dark rounded-t-md *:rounded-t-md'>
        <div className='h-60 rounded-t-md'>
          <img src={imageSrc} alt='' onError={handleError} />
        </div>
        <div className='px-1 pt-3 flex flex-wrap justify-start gap-4'>
          {techStack.map((tech) => (
            <TechTextBubble
              key={uuidv4()}
              text={tech}
              bgColor={'bg-nature-altLight'}
              textColor={'text-nature-dark'}
            />
          ))}
        </div>
      </div>
      <div
        className='card-body-wrapper p-2 bg-linear-to-t from-nature-light via-70% via-nature-altLight 
        to-nature-dark rounded-b-md'
      >
        <div className='card-body'>
          <h2 className='p-1 text-2xl text-nature-light text-shadow-xs text-shadow-nature-dark'>
            {title}
          </h2>
          <hr className='mt-1 border border-nature-dark shadow-[0_0px_5px_0] shadow-nature-accent' />
          <p className='mt-4 line-clamp-4'>{description}</p>
        </div>
        <div className='card-footer flex gap-4 mt-2 py-2 '>
          <Link to={sourceLink} target='_blank'>
            <FontAwesomeIcon
              icon={faGithub}
              className='text-nature-dark hover:scale-110 hover:text-nature-accent'
              fontSize={28}
            />
          </Link>
          <Link to={demoLink} target='_blank'>
            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              className='text-nature-dark hover:scale-110 hover:text-nature-accent'
              fontSize={28}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
