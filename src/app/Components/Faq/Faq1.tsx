"use client"
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const Faq1 = () => {
  const faqContent = [
    {
      title: 'Q. What is ShikshaFlow and how does it help schools?',
      content:
        'ShikshaFlow is a modern school ERP platform powered by WhatsApp automation. It helps schools manage enquiries, student records, attendance, homework, marks, and communication — all from one place. Schools can instantly respond to parents through an AI chatbot, reducing manual work and improving efficiency.',
    },
    {
      title: 'Q. How is ShikshaFlow different from other school ERP systems?',
      content:
        'Unlike traditional ERP systems that require mobile apps and complex dashboards, ShikshaFlow works directly on WhatsApp. Parents and students receive updates instantly without downloading any app. Our powerful enquiry management and follow-up system is a unique feature that helps schools convert leads into admissions effectively.',
    },
    {
      title: 'Q. What features does ShikshaFlow provide?',
      content:
        'ShikshaFlow provides complete school management features including enquiry tracking, student marks, homework updates, attendance alerts, school calendar, government holidays, performance reports, and automated WhatsApp notifications — all designed to simplify school operations.',
    },
    {
      title: 'Q. How does the enquiry and follow-up system work?',
      content:
        'When a parent makes an enquiry, ShikshaFlow captures the lead instantly and responds via WhatsApp chatbot. The system automatically follows up with parents, tracks communication, and helps schools manage admissions efficiently without missing any opportunity.',
    },
    {
      title: 'Q. Do parents or students need to install any app?',
      content:
        'No, there is no need to install any application. ShikshaFlow works entirely through WhatsApp, making it easy and accessible for everyone. This ensures higher engagement compared to traditional ERP systems that depend on app downloads.',
    },
    {
      title: 'Q. Is ShikshaFlow secure and scalable?',
      content:
        'Yes, ShikshaFlow is built with secure and reliable technology to protect school and student data. It is scalable for schools of all sizes and ensures smooth performance even with large numbers of students and enquiries.',
    },
  ];

  const accordionContentRef = useRef(null);
  const [openItemIndex, setOpenItemIndex] = useState(-1);
  const [firstItemOpen, setFirstItemOpen] = useState(true);

  const handleItemClick = index => {
    if (index === openItemIndex) {
      setOpenItemIndex(-1);
    } else {
      setOpenItemIndex(index);
    }
  };

  useEffect(() => {
    if (firstItemOpen) {
      setOpenItemIndex(0);
      setFirstItemOpen(false);
    }
  }, [firstItemOpen]);

  return (
    <section className="cs_faq cs_style_1 position-relative">
      <div className="cs_height_120 cs_height_lg_80"></div>

      <div className="container">
        <div className="row cs_gap_y_30 position-relative z-1">

          {/* Left Content */}
          <div className="col-lg-5">
            <div className="cs_section_heading cs_style_1 cs_faq_heading cs_mb_20">
              <div className="cs_section_subtitle cs_fs_18 cs_heading_color cs_mb_22">
                <Image src="/assets/img/icons/star-1.svg" alt="img" width={15} height={15} />
                <span>FAQs</span>
                <Image src="/assets/img/icons/star-1.svg" alt="img" width={15} height={15} />
              </div>

              <h2 className="cs_section_title cs_fs_48 cs_semibold wow fadeInLeft">
                Frequently Asked Questions
              </h2>

              <p className="cs_card_desc cs_mb_32">
                Everything you need to know about Shiksha Flow — a powerful WhatsApp-based
                school ERP that simplifies communication, automates enquiries, and manages
                student data seamlessly.
              </p>

              <Link
                href="/contact"
                aria-label="FAQ page link"
                className="cs_btn cs_style_1 cs_bg_1 cs_fs_14 cs_bold cs_white_color text-uppercase"
              >
                <span>Book Demo</span>
                <span className="cs_btn_icon">
                  <i className="bi bi-arrow-right"></i>
                </span>
              </Link>
            </div>
          </div>

          {/* Right FAQ */}
          <div className="col-lg-7">
            <div className="cs_faq_wrapper_1">
              {faqContent.map((item, index) => (
                <div
                  key={index}
                  className={`cs_accordian cs_style_2 cs_gray_bg_2 cs_radius_10 position-relative ${
                    index === openItemIndex ? "active" : ""
                  }`}
                >
                  <div onClick={() => handleItemClick(index)} className="cs_accordian_head">
                    <h3 className="cs_accordian_title cs_fs_20 cs_semibold mb-0">
                      {item.title}
                    </h3>
                    <span className="cs_accordian_toggler cs_center cs_radius_100 position-absolute">
                      <i className="bi bi-chevron-down"></i>
                    </span>
                  </div>

                  <div ref={accordionContentRef} className="cs_accordian_body">
                    <p>{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Shapes */}
        <div className="cs_faq_shape_3 position-absolute">
          <Image src="/assets/img/vector-12.svg" alt="img" width={109} height={112} />
        </div>
        <div className="cs_faq_shape_4 position-absolute">
          <Image src="/assets/img/vector-13.svg" alt="img" width={51} height={53} />
        </div>
        <div className="cs_faq_shape_5 position-absolute">
          <Image src="/assets/img/vector-14.svg" alt="img" width={108} height={123} />
        </div>
        <div className="cs_faq_shape_6 position-absolute">
          <Image src="/assets/img/vector-15.svg" alt="img" width={73} height={81} />
        </div>

      </div>

      <div className="cs_height_120 cs_height_lg_80"></div>
    </section>
  );
};

export default Faq1;