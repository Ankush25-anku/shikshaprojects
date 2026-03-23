import Image from "next/image";
import Link from "next/link";

const Pricing4 = () => {
    return (
<section className="position-relative overflow-hidden">
      <div className="cs_height_120 cs_height_lg_80"></div>
      <div className="container">
        <div className="cs_section_heading cs_style_1 cs_center_column cs_mb_60 text-center position-relative z-1">
          <div className="cs_section_subtitle cs_fs_18 cs_heading_color cs_mb_22">
            <Image src="/assets/img/icons/star-1.svg" alt="img" width={15} height={15} />   
            <span>Pricing Plans</span>
            <Image src="/assets/img/icons/star-1.svg" alt="img" width={15} height={15} />   
          </div>
          <h2 className="cs_section_title cs_fs_48 cs_semibold cs_mb_20 text-capitalize wow fadeInUp">
            Simple Pricing for Every School
          </h2>
          <p className="mb-0">
            Choose a plan that fits your school size and needs. No hidden charges, no app installation — 
            just powerful WhatsApp-based ERP for seamless school management.
          </p>
        </div>

        <div className="row cs_row_gap_30 cs_gap_y_30 align-items-end position-relative z-1">

          {/* STARTER */}
          <div className="col-lg-4">
            <div className="cs_pricing_table cs_style_1 cs_gray_bg_2 cs_radius_30">
              <div className="cs_pricing_table_heading cs_mb_3">
                <h2 className="cs_plan_title cs_fs_24 cs_semibold mb-0">Starter</h2>
                <span className="cs_plan_icon">
                  <Image src="/assets/img/icons/free.svg" alt="img" width={48} height={50} />   
                </span>
              </div>

              <div className="cs_pricing_info cs_mb_20">
                <div className="cs_price cs_fs_48 cs_semibold cs_heading_color cs_heading_font cs_mb_4">
                  ₹3999 <small>/ Month</small>
                </div>
                <p className="mb-0">
                  Ideal for small schools starting with WhatsApp-based automation.
                </p>
              </div>

              <div className="cs_separator cs_mb_22"></div>

              <div className="cs_feature_wrapper cs_mb_30">
                <ul className="cs_pricing_feature_list cs_mp_0">
                  <li><span className="cs_feature_title cs_heading_color">Up to 500 Students</span></li>
                  <li><span className="cs_feature_title cs_heading_color">WhatsApp Student Updates</span></li>
                  <li><span className="cs_feature_title cs_heading_color">Basic Enquiry Management</span></li>
                  <li><span className="cs_feature_title cs_heading_color">Homework & Attendance Alerts</span></li>
                  <li><span className="cs_feature_title">Email Support</span></li>
                </ul>
              </div>

              <Link href="/contact" className="cs_btn cs_style_1 cs_fs_14 cs_bold cs_heading_color text-uppercase">
                <span>Book Demo</span>
                <span className="cs_btn_icon"><i className="fa-solid fa-arrow-right"></i></span>
              </Link>
            </div>
          </div>

          {/* GROWTH */}
          <div className="col-lg-4">
            <div className="cs_pricing_table cs_style_1 cs_gray_bg_2 cs_radius_30 position-relative cs_active">
              <div className="cs_pricing_table_shape position-absolute">
                <Image src="/assets/img/pricing-shape-1.svg" alt="img" width={410} height={688} />   
              </div>

              <div className="cs_pricing_badge cs_accent_bg cs_medium cs_white_color text-center position-absolute">
                Most Popular
              </div>

              <div className="cs_pricing_table_heading cs_mb_3">
                <h2 className="cs_plan_title cs_fs_24 cs_semibold mb-0">Growth</h2>
                <span className="cs_plan_icon">
                  <Image src="/assets/img/icons/dimond.svg" alt="img" width={62} height={52} />   
                </span>
              </div>

              <div className="cs_pricing_info cs_mb_20">
                <div className="cs_price cs_fs_48 cs_semibold cs_heading_color cs_heading_font cs_mb_4">
                  ₹6999 <small>/ Month</small>
                </div>
                <p className="mb-0">
                  Best for growing schools needing automation and advanced tracking.
                </p>
              </div>

              <div className="cs_separator cs_mb_22"></div>

              <div className="cs_feature_wrapper cs_mb_30">
                <ul className="cs_pricing_feature_list cs_mp_0">
                  <li><span className="cs_feature_title cs_heading_color">Up to 1000 Students</span></li>
                  <li><span className="cs_feature_title cs_heading_color">Advanced WhatsApp Automation</span></li>
                  <li><span className="cs_feature_title cs_heading_color">Complete Enquiry Follow-Up System</span></li>
                  <li><span className="cs_feature_title cs_heading_color">Marks & Performance Tracking</span></li>
                  <li><span className="cs_feature_title cs_heading_color">School Calendar & Notifications</span></li>
                  <li><span className="cs_feature_title">Priority Support</span></li>
                </ul>
              </div>

              <Link href="/contact" className="cs_btn cs_style_1 cs_fs_14 cs_bold cs_heading_color text-uppercase">
                <span>Book Demo</span>
                <span className="cs_btn_icon"><i className="fa-solid fa-arrow-right"></i></span>
              </Link>
            </div>
          </div>

          {/* ENTERPRISE */}
          <div className="col-lg-4">
            <div className="cs_pricing_table cs_style_1 cs_gray_bg_2 cs_radius_30">
              <div className="cs_pricing_table_heading cs_mb_3">
                <h2 className="cs_plan_title cs_fs_24 cs_semibold mb-0">Enterprise</h2>
                <span className="cs_plan_icon">
                  <Image src="/assets/img/icons/crown.svg" alt="img" width={64} height={50} />   
                </span>
              </div>

              <div className="cs_pricing_info cs_mb_20">
                <div className="cs_price cs_fs_48 cs_semibold cs_heading_color cs_heading_font cs_mb_4">
                  ₹9999 <small>/ Month</small>
                </div>
                <p className="mb-0">
                  Complete ERP solution for large schools with advanced needs.
                </p>
              </div>

              <div className="cs_separator cs_mb_22"></div>

              <div className="cs_feature_wrapper cs_mb_30">
                <ul className="cs_pricing_feature_list cs_mp_0">
                  <li><span className="cs_feature_title cs_heading_color">Up to 1500 Students</span></li>
                  <li><span className="cs_feature_title cs_heading_color">Full School ERP Automation</span></li>
                  <li><span className="cs_feature_title cs_heading_color">Custom Integrations</span></li>
                  <li><span className="cs_feature_title cs_heading_color">Dedicated Account Manager</span></li>
                  <li><span className="cs_feature_title cs_heading_color">Advanced Analytics & Reports</span></li>
                  <li><span className="cs_feature_title">24/7 Premium Support</span></li>
                </ul>
              </div>

              <Link href="/contact" className="cs_btn cs_style_1 cs_fs_14 cs_bold cs_heading_color text-uppercase">
                <span>Book Demo</span>
                <span className="cs_btn_icon"><i className="fa-solid fa-arrow-right"></i></span>
              </Link>
            </div>
          </div>

        </div>

      </div>
      <div className="cs_height_120 cs_height_lg_80"></div>
    </section>
    );
};

export default Pricing4;