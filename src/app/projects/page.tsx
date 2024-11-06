import React from 'react';
import ProjectSection from '../../components/ProjectSection';
import Contacts from "../../components/Contacts";
import Header3 from "../../components/Header3";
import PolygonCard from '../../components/PolygonCard';

export default function Projects() {
  return (
  
    <>
     <div className='flex w-full h-96'>
      <Header3/>
    </div>

    <div className='flex justify-center mt-40'>
          <PolygonCard/>
        </div>

      <div className='flex justify-center mt-40'>
          <ProjectSection/>
        </div>

        <div className='mt-20'>
        <Contacts/>
      </div>
    </>
  );
}
