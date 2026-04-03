import TechTextBubble from './TextBubble';

function ProjectCard({ cardImage, title, description }) {
  return (
    <div className='p-0 border border-nature-accent/65 rounded-md w-80'>
      <div className='image-div bg-nature-dark'>
        <img
          src={cardImage}
          alt='Project card image'
          className='w-full rounded-t-md'
        />
        <div className='px-1 pt-2 flex justify-center gap-4'>
          <TechTextBubble
            text={'React'}
            bgColor={'bg-nature-altLight'}
            textColor={'text-nature-dark'}
          />
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
          <p className='mt-4'>{description}</p>
        </div>
        <div className='card-footer mt-2 py-2'>github and live links</div>
      </div>
    </div>
  );
}

export default ProjectCard;
