
import React from 'react';
import ContactForm from '../../components/ContactForm';
import Contacts from "../../components/Contacts";
import Header1 from "../../components/Header1";

const Contactpage: React.FC = () => {
  return (
    <>

      <div className='max-w-full'>
      <Header1/>
    </div>
      <div className='flex justify-center mt-10 '>
          <ContactForm/>
        </div>

    <div>
      <Contacts/>
    </div>

   </> 
  );
}
 export default Contactpage;