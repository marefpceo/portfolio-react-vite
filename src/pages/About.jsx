import TechStackDiv from '../components/TechStackDiv';

function About() {
  return (
    <section className='m-4 p-4 h-full w-11/12 flex flex-col items-center md:flex-row md:justify-evenly '>
      <title>About | Lamar Stevens</title>
      <meta
        name='description'
        content='Welcome! I’m Lamar, an experienced web developer and 22-year military veteran. Learn how a mission-driven mindset can turn obstacles into solid solutions.'
      />
      <div
        className='m-auto px-0 pt-0 pb-4 h-125 md:h-3/4 overflow-scroll md:w-2/3 lg:w-2/4 xl:w-2/5 rounded-md 
        bg-nature-light text-nature-dark shadow-[0px_0px_10px_-5px] shadow-black 
        [&>p]:text-center [&>p]:px-4 md:[&>p]:text-start no-scrollbar'
      >
        <h1
          className='mb-4 mt-0 py-5 text-3xl sm:text-4xl md:text-5xl text-center text-shadow-sm 
          text-shadow-nature-accent/25 sticky top-0 bg-nature-light'
        >
          About
        </h1>
        <p>
          I’m a Full Stack Web Developer and Computer Science graduate
          from the University of Maryland Global Campus (UMGC), with a
          strong foundation in building scalable, user-focused web
          applications. As a military veteran, I bring a disciplined,
          mission-driven mindset to every project—valuing teamwork,
          accountability, and clear execution.
        </p>
        <br />
        <p>
          I specialize in building responsive, high-performance
          applications using React, Express, Node, and PostgreSQL.
          With experience across both frontend and backend
          development, I design intuitive user interfaces while
          developing reliable REST APIs and backend systems that
          support them.
        </p>
        <br />
        <p>
          I enjoy solving complex problems and take pride in writing
          clean, maintainable code. Whether collaborating with a team
          or working independently, I focus on delivering dependable
          solutions that provide real value to users.
        </p>
        <br />
        <p>
          Outside of development, you’ll usually find me in the
          workshop covered in saw dust from a woodworking project,
          logging miles on long-distance runs, spending time with my
          wife and two dogs, or watching the garden grow.
        </p>
      </div>

      <div className='w-full md:ml-12 md:w-1/3 lg:w-2/5 overflow-hidden'>
        <TechStackDiv />
      </div>
    </section>
  );
}

export default About;
