import BreadCumb from '../../app/Components/Common/BreadCumb';
import Story1 from '../Components/Story/Story1';
import Work1 from '../Components/Work/Work1';

const page = () => {
  return (
    <div>
              <BreadCumb
                bgimg="/assets/img/page-heading-bg.svg"
                Title="Success Stories"
            ></BreadCumb>    
          <Story1></Story1>  
    </div>
  );
};

export default page;