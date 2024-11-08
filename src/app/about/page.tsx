
import React from 'react';
import AboutSection from '../../components/AboutSection';
import Header from "../../components/Header";
import Contacts from "../../components/Contacts";

const AboutPage: React.FC = () => {
  return (
<>
    <div className='max-w-full'>
      <Header/>
    </div>
  
      <div className=' flex-center justify-center mt-96 -mx-4 '>
          <AboutSection/>
        </div>

        <div className='mt-20 mb-10 lg:mb-0'>
          <Contacts/>
        </div>
    </>
  );
}
export default AboutPage;