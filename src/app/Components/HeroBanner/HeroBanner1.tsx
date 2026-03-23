import Image from "next/image";
import Link from "next/link";

const HeroBanner1 = () => {
  const bgImage = '/assets/img/hero-bg-2.jpg';

  return (
    <div>
      <section
        className="cs_hero cs_style_2 cs_bg_filed position-relative"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="container">
          <div className="cs_hero_text text-center position-relative">

            <p className="cs_hero_subtitle cs_heading_color cs_heading_font cs_mb_18 text-center">
              <span className="cs_theme_color_4">
                <Image src="/assets/img/icons/star-1.svg" alt="img" width={15} height={15} />
              </span>
              <span>Welcome To ShikshaFlow</span>
              <span className="cs_theme_color_4">
                <Image src="/assets/img/icons/star-1.svg" alt="img" width={15} height={15} />
              </span>
            </p>

            <h1 className="cs_hero_title cs_fs_64 cs_mb_20 wow fadeInDown">
              Smart School ERP Powered <br /> by WhatsApp Automation
            </h1>

            <p className="cs_hero_desc cs_mb_26">
              Simplify school management with real-time communication, automated updates, 
              and seamless access to student data — all directly through WhatsApp, 
              without the need for any mobile app.
            </p>

            <div className="cs_btns_group">
              <Link href="/contact" className="cs_btn cs_style_1 cs_bg_1 cs_fs_14 cs_bold cs_white_color text-uppercase">
                <span>Get Started</span>
                <span className="cs_btn_icon"><i className="bi bi-arrow-right"></i></span>
              </Link>

              <Link href="/about" className="cs_btn cs_style_1 cs_outline cs_ cs_fs_14 cs_bold cs_heading_color text-uppercase">
                <span>Learn More</span>
                <span className="cs_btn_icon"><i className="bi bi-arrow-right"></i></span>
              </Link>
            </div>

            <div className="cs_hero_shape_1 position-absolute">
              <Image src="/assets/img/hero-shape-1.svg" alt="img" width={120} height={90} />
            </div>

          </div>

          <div className="cs_hero_shape_2 position-absolute">
            <Image src="/assets/img/hero-shape-2.svg" alt="img" width={73} height={77} />
          </div>

        </div>
      </section>

      <div className="cs_banner cs_style_1 position-relative">
        <div className="container">

          <div
            className="cs_banner_thumbnail_wrapper"
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "20px",
              justifyContent: "center",
              alignItems: "center"
            }}
          >

            {/* 🎥 VIDEO */}
            <div className="cs_banner_thumbnail" style={{ flex: "1 1 600px" }}>
              <video
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "20px"
                }}
              >
                <source src="/assets/videos/hero-video.mp4" type="video/mp4" />
              </video>
            </div>

            {/* 📱 WHATSAPP UI */}
            <div className="cs_banner_thumbnail" style={{ flex: "1 1 350px" }}>
              <div
                style={{
                  width: "100%",
                  maxWidth: "428px",
                  aspectRatio: "428 / 702",
                  borderRadius: "30px",
                  overflow: "hidden",
                  background: "#e5ddd5",
                  display: "flex",
                  flexDirection: "column",
                  fontFamily: "sans-serif",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
                  margin: "0 auto"
                }}
              >

                {/* Header */}
                <div style={{
                  background: "#075E54",
                  color: "white",
                  padding: "12px",
                  fontWeight: "bold",
                  fontSize: "14px"
                }}>
                  ShikshaFlow Assistant
                </div>

                {/* Chat */}
                <div style={{
                  flex: 1,
                  padding: "10px",
                  overflowY: "auto",
                  fontSize: "13px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "6px"
                }}>

                  <div style={{
                    background: "#dcf8c6",
                    padding: "8px",
                    borderRadius: "10px",
                    alignSelf: "flex-end",
                    maxWidth: "75%"
                  }}>
                    Show my child's marks
                  </div>

                  <div style={{
                    background: "white",
                    padding: "8px",
                    borderRadius: "10px",
                    alignSelf: "flex-start",
                    maxWidth: "75%"
                  }}>
                    📊 Rahul's Marks:<br />
                    Maths: 92<br />
                    Science: 88
                  </div>

                  <div style={{
                    background: "#dcf8c6",
                    padding: "8px",
                    borderRadius: "10px",
                    alignSelf: "flex-end",
                    maxWidth: "75%"
                  }}>
                    Show attendance
                  </div>

                  <div style={{
                    background: "white",
                    padding: "8px",
                    borderRadius: "10px",
                    alignSelf: "flex-start",
                    maxWidth: "75%"
                  }}>
                    📅 Attendance:<br />
                    Present: 22 days<br />
                    Absent: 2 days
                  </div>

                  <div style={{
                    background: "white",
                    padding: "8px",
                    borderRadius: "10px",
                    alignSelf: "flex-start",
                    maxWidth: "75%"
                  }}>
                    📢 Holiday Tomorrow: Ugadi 🎉
                  </div>

                  <div style={{
                    background: "#dcf8c6",
                    padding: "8px",
                    borderRadius: "10px",
                    alignSelf: "flex-end",
                    maxWidth: "75%"
                  }}>
                    Homework?
                  </div>

                  <div style={{
                    background: "white",
                    padding: "8px",
                    borderRadius: "10px",
                    alignSelf: "flex-start",
                    maxWidth: "75%"
                  }}>
                    📝 Maths: Page 45<br />
                    English: Essay Writing
                  </div>

                  <div style={{
                    background: "#dcf8c6",
                    padding: "8px",
                    borderRadius: "10px",
                    alignSelf: "flex-end",
                    maxWidth: "75%"
                  }}>
                    Fees status?
                  </div>

                  <div style={{
                    background: "white",
                    padding: "8px",
                    borderRadius: "10px",
                    alignSelf: "flex-start",
                    maxWidth: "75%"
                  }}>
                    💰 Fees Paid ✔️<br />
                    Next Due: April 10
                  </div>

                </div>

                {/* Input */}
                <div style={{
                  padding: "8px",
                  borderTop: "1px solid #ccc",
                  background: "#f0f0f0"
                }}>
                  <input
                    type="text"
                    placeholder="Message ShikshaFlow..."
                    style={{
                      width: "100%",
                      padding: "8px",
                      borderRadius: "20px",
                      border: "none",
                      outline: "none",
                      fontSize: "12px"
                    }}
                  />
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
};

export default HeroBanner1;