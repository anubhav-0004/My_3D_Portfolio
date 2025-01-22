import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant} from '../utils/motion';
import SectionWrapper from '../hoc/SectionWrapper';

const ServiceCard = ({index, title, icon}) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 0.7)}
      className='w-full max-sm:w-68 max-sm:mx-auto green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
          <div
          options={{
            max: 30,
            scale: 1.1,
            speed: 250
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
            <img src={icon} alt={title} className='w-16 h-16 object-contain'/>
            <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
          </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}
      className='mx-auto mt-3'>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.heroHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
      variants={fadeIn("", "", 0.1, 1)}
      className='mt-4 ml-1 text-secondary text-[17px] max-w-3xl leading-[30px]'>
        I am Anubhav Mishra, a 3rd-year Computer Science Engineering student at Kamla Nehru Institute of Technology, Sultanpur. I have skills in C, C++, HTML, CSS, Tailwind, ReactJS, JavaScript, ReduxJS, Node.js, Express.js, and MongoDB. I’ve worked on projects to enhance my frontend development skills and am currently seeking internships or remote work opportunities, specializing in ReactJS. 
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10 mx-auto'>
        {
          services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))
        }
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")