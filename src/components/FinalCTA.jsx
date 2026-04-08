import React from 'react';

const FinalCTA = ({ onOpenModal }) => {
  const scrollToPricing = (e) => {
    e.preventDefault();
    const el = document.getElementById('pricing');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="cta-final reveal active">
      <div className="cta-box">
        <h2>Sẵn sàng thay đổi? <br />Tạo đề HSA đầu tiên của bạn — <span style={{ color: 'var(--primary)' }}>miễn phí</span></h2>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginTop: '20px' }}>Không cần thẻ tín dụng. Không cần cài đặt.</p>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', fontWeight: '600', marginTop: '5px' }}>30 giây để thấy Edutree hoạt động như thế nào.</p>
        <div className="cta-buttons">
          <button className="btn-trial" style={{ padding: '16px 40px', fontSize: '1.05rem' }} onClick={scrollToPricing}>Tạo đề miễn phí</button>
          <button onClick={onOpenModal} className="btn-outline" style={{ padding: '16px 40px', fontSize: '1.05rem', borderWidth: '2px' }}>Liên hệ tư vấn</button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
