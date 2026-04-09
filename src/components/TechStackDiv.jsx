import { v4 as uuidv4 } from 'uuid';
import { Marquee } from '../components/ui/marquee';
import htmlIcon from '../assets/icons/HTML5.svg';
import cssIcon from '../assets/icons/CSS3.svg';
import javascriptIcon from '../assets/icons/JavaScript.svg';
import nodeIcon from '../assets/icons/Node.js.svg';
import reactIcon from '../assets/icons/React.svg';
import viteIcon from '../assets/icons/Vite.js.svg';
import postgresIcon from '../assets/icons/PostgresSQL.svg';
import tailwindIcon from '../assets/icons/Tailwind CSS.svg';
import gitIcon from '../assets/icons/Git.svg';
import expressIcon from '../assets/icons/Express.svg';

function TechStackDiv() {
  const icons = [
    htmlIcon,
    cssIcon,
    javascriptIcon,
    nodeIcon,
    expressIcon,
    reactIcon,
    viteIcon,
    postgresIcon,
    tailwindIcon,
    gitIcon,
  ];

  return (
    <div className='my-8 p-2 flex flex-nowrap justify-evenly items-center bg-nature-accent/20 border border-nature-altLight/40 rounded-md'>
      <Marquee className='[--duration:20s]'>
        {icons.map((icon) => (
          <span key={uuidv4()} className='mx-2'>
            <img src={icon} alt={`${icon} icon`} width={44} />
          </span>
        ))}
      </Marquee>
    </div>
  );
}

export default TechStackDiv;
