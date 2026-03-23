import ServiceCard1 from '../Card/ServiceCard1';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Services1 = () => {
  const bgImage = '/assets/img/feature-item-bg.svg';

  return (
    <section className="position-relative">
      <div className="cs_height_120 cs_height_lg_80"></div>

      <div className="container">
        <div className="cs_section_heading cs_style_1 cs_mb_47 cs_center_column text-center position-relative z-1">
          
          <div className="cs_section_subtitle cs_fs_18 cs_heading_color cs_mb_22">
            <Image src="/assets/img/icons/star-1.svg" alt="img" width={15} height={15} />
            <span>ShikshaFlow Features</span>
            <Image src="/assets/img/icons/star-1.svg" alt="img" width={15} height={15} />
          </div>

          <h2 className="cs_section_title cs_fs_48 cs_semibold mb-0 wow fadeInUp">
            Smart School ERP Powered by <br/> WhatsApp Automation
          </h2>
        </div>

        <div className="cs_features_items_wrapper position-relative z-1">

          {/* HERO FEATURE BLOCK */}
          <div
            className="cs_feature_item cs_radius_20 cs_bg_filed"
            style={{ backgroundImage: `url(${bgImage})` }}
          >
            <h3 className="cs_fs_36 cs_semibold cs_white_color cs_mb_40">
              Manage School Operations Instantly <br />
              via WhatsApp — No App Needed
            </h3>

            <Link
              href="/contact"
              aria-label="Get started button"
              className="cs_btn cs_style_1 cs_fs_14 cs_bold cs_white_color text-uppercase"
            >
              <span>Get Demo</span>
              <span className="cs_btn_icon">
                <i className="bi bi-arrow-right"></i>
              </span>
            </Link>
          </div>

          {/* SERVICE 1 */}
          <ServiceCard1
            addclass="cs_bg_00"
            serviceicon="/assets/img/icons/code-icon.svg"
            title="WhatsApp Based School ERP"
            featureList={[
              "Instant chatbot replies for parents",
              "No mobile app installation required",
              "Real-time enquiry responses",
              "24/7 automated communication"
            ]}
            // btnname="Explore"
            btnurl="/service/service-details"
          ></ServiceCard1>

          {/* SERVICE 2 */}
          <ServiceCard1
            addclass="cs_bg_1"
            serviceicon="/assets/img/icons/cloud-computing.svg"
            title="Student Information & Tracking"
            featureList={[
              "Access student marks instantly",
              "Daily homework updates via WhatsApp",
              "Attendance tracking in real-time",
              "Academic performance insights"
            ]}
            // btnname="Explore"
            btnurl="/service/service-details"
          ></ServiceCard1>

          {/* SERVICE 3 */}
          <ServiceCard1
            addclass="cs_bg_2"
            serviceicon="/assets/img/icons/quality-assurance.svg"
            title="Smart Communication System"
            featureList={[
              "Automated enquiry handling",
              "Parent-school communication simplified",
              "Broadcast important announcements",
              "Follow-ups through WhatsApp"
            ]}
            // btnname="Explore"
            btnurl="/service/service-details"
          ></ServiceCard1>

          {/* SERVICE 4 */}
          <ServiceCard1
            addclass="cs_bg_3"
            serviceicon="/assets/img/icons/security.svg"
            title="School Calendar & Notifications"
            featureList={[
              "Government & school holidays updates",
              "Event reminders via WhatsApp",
              "Exam schedules & alerts",
              "Never miss important updates"
            ]}
            // btnname="Explore"
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

      <div className="cs_height_120 cs_height_lg_80"></div>
    </section>
  );
};

export default Services1;