
import React from 'react';
import ContactForm from '../../components/ContactForm';
import Contacts from "../../components/Contacts";
import Header1 from "../../components/Header1";

const Contactpage: React.FC = () => {
  return (
    <>

      <div className='max-w-full mb-20'>
      <Header1/>
    </div>

       {/* Spacer div visible only on larger screens */}
       <div className="hidden lg:block" style={{ height: '400px' }}></div>

      <div className='flex justify-center mt-60 lg:mt-20'>
          <ContactForm/>
        </div>

    <div className='flex justify-center mb-20 '>
      <Contacts/>
    </div>

   </> 
  );
}
 export default Contactpage;