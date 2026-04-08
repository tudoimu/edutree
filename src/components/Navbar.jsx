import React, { useState, useEffect } from 'react';

const Navbar = ({ onOpenModal }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToBottom = (e) => {
    e.preventDefault();
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <div className="logo" onClick={scrollToTop} style={{ cursor: 'pointer' }}>
        <img src="https://i.ibb.co/VYBXwpch/Thi-t-k-ch-a-c-t-n-71.png" alt="EduTree Logo" style={{ height: '60px' }} />
      </div>
      <div className="nav-links">
        <a href="#home" onClick={scrollToTop}>Trang chủ</a>
        <a href="#features" onClick={(e) => scrollToSection(e, 'features-header')}>Tính năng</a>
        <a href="#pricing" onClick={(e) => scrollToSection(e, 'pricing')}>Bảng giá</a>
        <a href="#footer" onClick={scrollToBottom}>Liên hệ</a>
      </div>
      <button className="btn-trial" onClick={onOpenModal}>Dùng thử miễn phí</button>
    </nav>
  );
};

export default Navbar;
