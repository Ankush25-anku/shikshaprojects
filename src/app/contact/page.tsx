import BreadCumb from '../../app/Components/Common/BreadCumb';
import Contact from '../../app/Components/Contact/Contact';

const page = () => {
  return (
    <div>
            <BreadCumb
                bgimg="/assets/img/page-heading-bg.svg"
                Title="Contact Us"
            ></BreadCumb>  
            <Contact></Contact>       
    </div>
  );
};

export default page;