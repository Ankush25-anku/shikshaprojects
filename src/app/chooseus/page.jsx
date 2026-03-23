import BreadCumb from "../../app/Components/Common/BreadCumb";
import Choose1 from "../Components/Choose/Choose1";

const page = () => {
  return (
    <div>
      <BreadCumb
        bgimg="/assets/img/page-heading-bg.svg"
        Title="Why choose us"
      ></BreadCumb>
      <Choose1></Choose1>
    </div>
  );
};

export default page;
