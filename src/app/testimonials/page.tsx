import BreadCumb from '../../app/Components/Common/BreadCumb';
import Testimonail2 from '../Components/Testimonial/Testimonail2';
import Testimonial1 from '../Components/Testimonial/Testimonial1';
import Work1 from '../Components/Work/Work1';

const page = () => {
  return (
    <div>
              <BreadCumb
                bgimg="/assets/img/page-heading-bg.svg"
                Title="Testimonials"
            ></BreadCumb>    
        <Testimonail2></Testimonail2>
    </div>
  );
};

export default page;