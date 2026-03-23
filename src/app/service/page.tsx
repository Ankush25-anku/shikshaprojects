import BreadCumb from '../../app/Components/Common/BreadCumb';
import Services3 from '../../app/Components/Services/Services3';
import Feature5 from '../../app/Components/Feature/Feature5';
import Analysis1 from '../../app/Components/Analysis/Analysis1';

const page = () => {
  return (
    <div>
            <BreadCumb
                bgimg="/assets/img/page-heading-bg.svg"
                Title="Our Services"
            ></BreadCumb>  
             <Services3></Services3>
             <Feature5></Feature5> 
             <Analysis1></Analysis1>           
    </div>
  );
};

export default page;