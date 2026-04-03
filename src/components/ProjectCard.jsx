function ProjectCard({ cardImage, title, description }) {
  return (
    <div className='p-0 border border-nature-accent/65 rounded-md w-80'>
      <div className='image-div'>
        <img
          src={cardImage}
          alt='Project card image'
          className='w-full rounded-t-md'
        />
      </div>
      <div className='card-body p-2 bg-linear-to-t from-nature-light via-70% via-nature-altLight to-nature-dark rounded-b-md'>
        <h2 className='p-1 text-2xl text-nature-light text-shadow-xs text-shadow-nature-dark'>
          {title}
        </h2>
        <hr className='mt-1 border border-nature-dark shadow-[0_0px_5px_0] shadow-nature-accent' />
        <p className='mt-4'>{description}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
