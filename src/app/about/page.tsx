import BreadCumb from '../../app/Components/Common/BreadCumb';
import Feature4 from '../../app/Components/Feature/Feature4';
import Review1 from '../../app/Components/Review/Review1';
import Analysis1 from '../../app/Components/Analysis/Analysis1';
import Counter1 from '../../app/Components/Counter/Counter1';
import Story1 from '../../app/Components/Story/Story1';

const page = () => {
  return (
    <div>
   
            <BreadCumb
                bgimg="/assets/img/page-heading-bg.svg"
                Title="About Us"
            ></BreadCumb> 
            <Feature4></Feature4> 
            {/* <Review1></Review1> */}
            <Analysis1></Analysis1>    
            <Counter1></Counter1>
            <Story1></Story1>

            {/* <Testimonial4></Testimonial4>
            <Team1></Team1>             */}
    </div>
  );
};

export default page;