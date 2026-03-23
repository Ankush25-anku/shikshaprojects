import BreadCumb from '../../app/Components/Common/BreadCumb';
import Blog5 from '../../app/Components/Blog/Blog5';
import Blog2 from '../Components/Blog/Blog2';

const page = () => {
  return (
    <div>
              <BreadCumb
                bgimg="/assets/img/page-heading-bg.svg"
                Title="Blog"
            ></BreadCumb>    
           <Blog2></Blog2>        
    </div>
  );
};

export default page;