import Link from 'next/link';
import ServiceCard1 from '../Card/ServiceCard1';
import Image from 'next/image';

const Services3 = () => {
  const bgImage = '/assets/img/feature-item-bg.svg';
  return (
    <section className="position-relative">
      <div className="cs_height_120 cs_height_lg_80"></div>
      <div className="container">

        <div className="cs_features_items_wrapper position-relative z-1">

          <div className="cs_feature_item cs_radius_20 cs_bg_filed" style={{ backgroundImage: `url(${bgImage})`}}>
            <h3 className="cs_fs_36 cs_semibold cs_white_color cs_mb_40">
              Simplify School Management <br/> with Smart WhatsApp ERP
            </h3>
            <Link href="/contact" aria-label="Get started button" className="cs_btn cs_style_1 cs_fs_14 cs_bold cs_white_color text-uppercase">
              <span>Get Demo</span>
              <span className="cs_btn_icon"><i className="bi bi-arrow-right"></i></span>
            </Link>
          </div>

          <ServiceCard1
            addclass="cs_bg_00"
            serviceicon="/assets/img/icons/code-icon.svg"
            title="WhatsApp Based ERP System"
            featureList={[
              "Instant chatbot responses for parents",
              "No app installation required",
              "24/7 automated communication",
              "Real-time enquiry handling"
            ]}
            btnname="Read More"
            btnurl="/service/service-details"
          ></ServiceCard1>

          <ServiceCard1
            addclass="cs_bg_1"
            serviceicon="/assets/img/icons/cloud-computing.svg"
            title="Student Data & Academic Tracking"
            featureList={[
              "Access marks and performance instantly",
              "Daily homework updates via WhatsApp",
              "Attendance tracking in real-time",
              "Complete academic insights"
            ]}
            btnname="Read More"
            btnurl="/service/service-details"
          ></ServiceCard1>

          <ServiceCard1
            addclass="cs_bg_2"
            serviceicon="/assets/img/icons/quality-assurance.svg"
            title="Smart Communication System"
            featureList={[
              "Automated enquiry follow-ups",
              "Parent-school communication simplified",
              "Broadcast important announcements",
              "Seamless WhatsApp notifications"
            ]}
            btnname="Read More"
            btnurl="/service/service-details"
          ></ServiceCard1>

          <ServiceCard1
            addclass="cs_bg_3"
            serviceicon="/assets/img/icons/security.svg"
            title="Calendar & Notification Management"
            featureList={[
              "School and government holiday updates",
              "Exam schedules and reminders",
              "Event notifications via WhatsApp",
              "Never miss important updates"
            ]}
            btnname="Read More"
            btnurl="/service/service-details"
          ></ServiceCard1>

        </div>
      </div>

      <div className="cs_feature_shape_1 position-absolute">
        <Image src="/assets/img/3d-shape.png" alt="img" width={97} height={104} />
      </div>

      <div className="cs_feature_shape_2 position-absolute">
        <Image src="/assets/img/spring-shape.png" alt="img" width={88} height={88} />
      </div>
    </section>
  );
};

export default Services3;