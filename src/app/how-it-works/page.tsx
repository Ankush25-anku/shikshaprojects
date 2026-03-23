import BreadCumb from '../../app/Components/Common/BreadCumb';
import Work1 from '../Components/Work/Work1';

const page = () => {
  return (
    <div>
              <BreadCumb
                bgimg="/assets/img/page-heading-bg.svg"
                Title="How It Works"
            ></BreadCumb>    
          <Work1></Work1>       
    </div>
  );
};

export default page;