import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [isNeonFired, setIsNeonFired] = useState(false);

  const fullHtml = 'Tạo đề HSA hoàn chỉnh trong <span class="neon-pulse">5 phút</span> — đúng format, hình ảnh rõ nét, đáp án chuẩn';

  useEffect(() => {
    let index = 0;
    let isTag = false;
    let currentText = '';

    const type = () => {
      if (index < fullHtml.length) {
        let char = fullHtml.charAt(index);
        if (char === '<') isTag = true;
        currentText += char;
        if (isTag) {
          if (char === '>') isTag = false;
          index++;
          type();
          return;
        }
        setDisplayText(currentText);
        index++;
        setTimeout(type, 40);
      } else {
        setDisplayText(fullHtml);
        setIsNeonFired(true);
      }
    };

    const timer = setTimeout(type, 600);
    return () => clearTimeout(timer);
  }, []);

  const scrollToBottom = (e) => {
    e.preventDefault();
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  const scrollToPricing = (e) => {
    e.preventDefault();
    const el = document.getElementById('pricing');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="home">
      <div className="hero-content reveal active">
        <span className="badge">AI Education Assistant</span>
        <h1 
          style={{ minHeight: '120px' }}
          dangerouslySetInnerHTML={{ 
            __html: displayText + (displayText.length < fullHtml.length ? '<span class="typing-cursor">&nbsp;</span>' : '') 
          }}
          className={isNeonFired ? 'neon-fire' : ''}
        ></h1>
        <div className="cta-group">
          <button className="btn-trial" style={{ padding: '18px 40px' }} onClick={scrollToBottom}>
            Bắt đầu tạo đề ngay
          </button>
          <button className="btn-outline" onClick={scrollToPricing}>
            Xem bảng giá
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
