import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router';
import { v4 as uuidv4 } from 'uuid';

import TechTextBubble from './TextBubble';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

import { auto } from '@cloudinary/url-gen/actions/resize';
import cld from '../utilities/CloudinaryConfig';

function ProjectCard({
  cardImage,
  localImage,
  title,
  description,
  demoLink,
  sourceLink,
  techStack,
}) {
  const textRef = useRef(null);
  const [isClamped, setIsClamped] = useState(false);
  const [imageSrc, setImageSrc] = useState(
    processProjectImage(cardImage).toURL(),
  );

  useEffect(() => {
    function checkOverflow() {
      if (textRef.current) {
        setIsClamped(
          textRef.current.scrollHeight > textRef.current.clientHeight,
        );
      }
    }
    checkOverflow();
    window.addEventListener('resize', checkOverflow());
    return window.removeEventListener('resize', checkOverflow());
  }, [description]);

  // Function to set and use fallback image if issues with Cloudinary occur
  function handleError(e) {
    e.targe.onerror = null;
    setImageSrc(localImage);
  }

  // Creates a Cloudinary image link based on the input
  function processProjectImage(imageId) {
    const image = cld
      .image(imageId)
      .format('auto')
      .quality('auto')
      .resize(auto());
    return image;
  }

  return (
    <div className='p-0 flex flex-col border border-nature-accent/65 rounded-md w-96'>
      <div className='image-div bg-nature-dark rounded-t-md *:rounded-t-md'>
        <div className='rounded-t-md'>
          <img
            src={imageSrc}
            alt={`${title} cover image`}
            onError={handleError}
            className='h-full w-full rounded-t-md'
          />
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
        className='card-body-wrapper p-2 flex flex-col flex-1 bg-linear-to-t from-nature-light via-70% 
          via-nature-altLight to-nature-dark rounded-b-md'
      >
        <div className='card-body flex-1 relative'>
          <h2 className='p-1 text-2xl text-nature-light text-shadow-xs text-shadow-nature-dark'>
            {title}
          </h2>
          <hr className='mt-1 border border-nature-dark shadow-[0_0px_5px_0] shadow-nature-accent' />
          <p ref={textRef} className='mt-4 line-clamp-4'>
            {description}
          </p>
          {isClamped && (
            <a
              href='#more'
              className='absolute right-0 pr-1 text-nature-dark hover:text-nature-accent 
                hover:text-shadow-nature-dark'
            >
              (Read more)
            </a>
          )}
        </div>
        <div className='card-footer flex gap-4 mt-8 py-2 '>
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
