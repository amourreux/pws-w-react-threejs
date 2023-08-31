import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import { socials } from '../constants';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialCard = ({ index, link, name, icon }) => (
  <motion.div
    variants={fadeIn('', 'spring', index * 0.5, 0.75)}
    className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full cursor-pointer'
    onClick={() => window.open(link, '_blank')}
  >
    <div className='mt-1 '>
      <div className='flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p className='text-white font-medium text-[16px]'>
            <span className='blue-text-gradient'>@</span> {name}
          </p>
        </div>
        <FontAwesomeIcon size='2x' icon={icon} />
      </div>
    </div>
  </motion.div>
);

const SocialsSection = () => (
  <div className={`mt-12 bg-black-100 rounded-[20px]`}>
    <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          Other than software who are you may ask?
        </p>
        <h2 className={styles.sectionHeadText}>Social Profiles.</h2>
      </motion.div>
    </div>
    <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
      {socials.map((social, index) => (
        <SocialCard key={social.name} index={index} {...social} />
      ))}
    </div>
  </div>
);

export default SectionWrapper(SocialsSection, '');
