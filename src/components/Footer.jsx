import React from 'react';

const Footer = ({ onOpenModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSchoolLink = (e) => {
    e.preventDefault();
    const btn = document.getElementById('school-contact-btn');
    if (btn) {
      btn.scrollIntoView({ behavior: 'smooth', block: 'center' });
      setTimeout(() => {
        btn.style.boxShadow = '0 0 25px 5px rgba(34, 197, 94, 0.8)';
        btn.style.transform = 'scale(1.05)';
        setTimeout(() => {
          btn.style.boxShadow = 'none';
          btn.style.transform = 'scale(1)';
        }, 1000);
      }, 800);
    }
  };

  return (
    <>
      <footer className="footer-modern">
        <div className="footer-col">
          <div className="logo" style={{ marginBottom: '25px', cursor: 'pointer' }} onClick={scrollToTop}>
            <img src="https://i.ibb.co/VYBXwpch/Thi-t-k-ch-a-c-t-n-71.png" alt="EduTree Logo" style={{ height: '35px' }} />
          </div>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', maxWidth: '300px' }}>Trợ lý AI cho giáo viên Việt Nam. Tự động hóa việc soạn đề, chấm điểm và phân tích học tập.</p>
          <div className="social-icons">
            <SocialIcon url="https://www.facebook.com/edutree.vn/" img="https://i.ibb.co/ymJ2yrHb/icons8-facebook-480.png" alt="Facebook" />
            <SocialIcon url="#" img="https://i.ibb.co/sJPcC7k1/2227.jpg" alt="Instagram" />
            <SocialIcon url="#" img="https://i.ibb.co/CKTYGKwn/threads-seeklogo.png" alt="Threads" />
            <SocialIcon url="#" img="https://i.ibb.co/H612JkF/tik-tok-logo-transparent-031f.png" alt="TikTok" />
            <SocialIcon url="https://zalo.me/g/awyel4hvqawcibsiuwup" img="https://i.ibb.co/rKt6Vj13/zalo-seeklogo.png" alt="Zalo" />
          </div>
        </div>
        <div className="footer-col">
          <h4>Sản phẩm</h4>
          <ul className="footer-links">
            <li><a href="#features" onClick={(e) => scrollToSection(e, 'features-header')}>Tính năng</a></li>
            <li><a href="#pricing" onClick={(e) => scrollToSection(e, 'pricing')}>Bảng giá</a></li>
            <li><a href="https://docs.google.com/document/d/1MTPnq1iBQdzSF3zt0esm5oNEGyaJTDikpq1pCiLa5wA/edit?usp=sharing" target="_blank" rel="noreferrer">Hướng dẫn</a></li>
            <li><a href="#">Changelog</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Dành cho</h4>
          <ul className="footer-links">
            <li><a href="#pricing" onClick={(e) => scrollToSection(e, 'pricing')}>Giáo viên tự do</a></li>
            <li><a href="#pricing" onClick={(e) => scrollToSection(e, 'pricing')}>Trung tâm luyện thi</a></li>
            <li><a href="#" onClick={handleSchoolLink}>Trường học</a></li>
            <li><a href="#">API cho EdTech</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Công ty</h4>
          <ul className="footer-links">
            <li><a href="#">Về chúng tôi</a></li>
            <li><a href="#footer" onClick={(e) => e.preventDefault()}>Liên hệ</a></li>
            <li><a href="#">Đầu tư</a></li>
            <li><a href="#">Tuyển dụng</a></li>
          </ul>
        </div>
      </footer>
      <div style={{ textAlign: 'center', padding: '25px 0', borderTop: '1px solid rgba(0,0,0,0.05)', color: 'var(--text-muted)', fontSize: '0.9rem', background: 'var(--bg-white)' }}> 
        © 2026 EduTree Vietnam. Nâng tầm giáo dục Việt Nam. 
      </div>
    </>
  );
};

const SocialIcon = ({ url, img, alt }) => (
  <a href={url} target="_blank" rel="noreferrer" className="social-icon">
    <img src={img} alt={alt} />
  </a>
);

export default Footer;
