import aboutPhoto from '../assets/about_me_photo.webp';

function About() {
  return (
    <section className='flex m-4 p-4 min-h-full'>
      <div className='flex m-auto p-4 h-full md:w-fit rounded-md bg-nature-altLight text-nature-dark shadow-[0_0_10px_0px] shadow-nature-accent'>
        <img src={aboutPhoto} alt='Photo of Lamar' width={280} height={375} />
        <div>
          <h1 className='m-2 text-4xl text-center text-shadow-sm text-shadow-nature-accent/25'>
            About
          </h1>
          <p>
            I’m a Full Stack Web Developer and Computer Science graduate from
            the University of Maryland Global Campus (UMGC), with a strong
            foundation in building scalable, user-focused web applications. As a
            military veteran, I bring a disciplined, mission-driven mindset to
            every project—valuing teamwork, accountability, and clear execution
          </p>
          <br />
          <p>
            I specialize in building responsive, high-performance applications
            using React, Express, Node, and PostgreSQL. With experience across
            both frontend and backend development, I design intuitive user
            interfaces while developing reliable REST APIs and backend systems
            that support them.
          </p>
          <br />
          <p>
            I enjoy solving complex problems and take pride in writing clean,
            maintainable code. Whether collaborating with a team or working
            independently, I focus on delivering dependable solutions that
            provide real value to users.
          </p>
          <br />
          <p>
            Outside of development, you’ll usually find me in the workshop
            covered in “man glitter” from a woodworking project, logging miles
            on long-distance runs, spending time with my wife and two dogs, or
            watching the garden grow.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
