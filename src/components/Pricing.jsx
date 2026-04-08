import React, { useState } from 'react';

const Pricing = ({ onOpenModal }) => {
  const [billingCycle, setBillingCycle] = useState('yearly');

  const pricingData = {
    monthly: {
      plus: { price: '99.000đ', unit: '/tháng đầu sử dụng', desc: 'Từ tháng sau 129.000đ/tháng', descType: 'warning' },
      pro: { price: '599.000đ' }
    },
    yearly: {
      plus: { price: '99.000đ', unit: '/tháng', desc: 'Thanh toán theo năm', descType: 'success' },
      pro: { price: '499.000đ' }
    }
  };

  const current = pricingData[billingCycle];

  const handleSchoolContact = (e) => {
    e.preventDefault();
    onOpenModal();
  };

  return (
    <section className="pricing-section" id="pricing" style={{ scrollMarginTop: '100px' }}>
      <div className="section-header reveal active" style={{ paddingTop: '40px', paddingBottom: '20px' }}>
        <h2>Đầu tư cho chất lượng giảng dạy</h2>
      </div>
      
      <div className="pricing-toggle reveal active">
        <div className="toggle-bg" style={{ left: billingCycle === 'monthly' ? '5px' : '165px' }}></div>
        <div className={`toggle-btn ${billingCycle === 'monthly' ? 'active' : ''}`} onClick={() => setBillingCycle('monthly')}>Hàng tháng</div>
        <div className={`toggle-btn ${billingCycle === 'yearly' ? 'active' : ''}`} onClick={() => setBillingCycle('yearly')}>Hàng năm</div>
      </div>

      <div className="pricing-grid">
        {/* FREE */}
        <div className="price-card reveal active">
          <h3>FREE</h3>
          <div style={{ fontSize: '3rem', fontWeight: '800', margin: '20px 0', color: 'var(--text-main)' }}>0đ</div>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '25px', padding: '5px 15px', background: 'rgba(0,0,0,0.05)', display: 'inline-block', borderRadius: '20px', fontWeight: '700' }}> Miễn phí </p>
          <ul className="price-list">
            <li className="pro"><span className="check-icon">✓</span> 40 lá/ngày (5 câu)</li>
            <li className="pro"><span className="check-icon">✓</span> Nhận miễn phí 200 lá (50 câu = 1 phần đề HSA)</li>
            <li className="pro"><span className="check-icon">✓</span> Trải nghiệm cảm giác làm đề HSA chỉ trong 30s</li>
            <li className="pro"><span className="check-icon">✓</span> Tải đề về dạng PDF</li>
            <li className="pro"><span className="check-icon">✓</span> Tạo dạng bài tập nhỏ</li>
          </ul>
          <button className="btn-outline" style={{ display: 'block', width: '100%', marginTop: '30px', border: '2px solid #EEE', color: 'var(--text-muted)' }}>Bắt đầu miễn phí</button>
        </div>

        {/* PLUS */}
        <div className="price-card featured reveal active">
          <span className="badge" style={{ background: 'var(--primary)', color: 'white' }}>Phổ biến nhất</span>
          <h3>PLUS</h3>
          <div style={{ fontSize: '2.8rem', fontWeight: '800', color: 'var(--primary)', margin: '20px 0' }}>
            <span>{current.plus.price}</span>
            <span style={{ fontSize: billingCycle === 'monthly' ? '0.9rem' : '1.2rem', color: 'var(--text-muted)', fontWeight: '600' }}>{current.plus.unit}</span>
          </div>
          <p style={{ 
            fontSize: '0.85rem', 
            color: current.plus.descType === 'warning' ? '#d97706' : 'var(--text-muted)', 
            marginBottom: '25px', 
            padding: '5px 15px', 
            background: current.plus.descType === 'warning' ? 'rgba(245, 158, 11, 0.1)' : 'rgba(34,197,94,0.1)', 
            display: 'inline-block', 
            borderRadius: '20px', 
            fontWeight: '700', 
            transition: 'all 0.3s' 
          }}>
            {current.plus.desc}
          </p>
          <ul className="price-list">
            <li className="pro"><span className="check-icon">✓</span> Nhận ngay 1200 lá mỗi tháng</li>
            <li className="pro"><span className="check-icon">✓</span> 40 lá làm mới mỗi ngày</li>
            <li className="pro"><span className="check-icon">✓</span> Tải đề bằng PDF và Word</li>
            <li className="pro"><span className="check-icon">✓</span> Thống kê hành vi học tập học sinh</li>
            <li className="pro"><span className="check-icon">✓</span> Xuất báo cáo bảng điểm</li>
            <li className="pro"><span className="check-icon">✓</span> Thông báo tự động cho phụ huynh</li>
            <li className="pro"><span className="check-icon">✓</span> Tạo bài tập nhỏ</li>
          </ul>
          <button className="btn-trial" style={{ display: 'block', width: '100%', marginTop: '30px', fontSize: '1.1rem', padding: '15px' }}>Mua gói Plus ngay</button>
        </div>

        {/* PRO */}
        <div className="price-card reveal active">
          <h3>PRO</h3>
          <div style={{ fontSize: '2.8rem', fontWeight: '800', margin: '20px 0', color: 'var(--text-main)' }}>
            <span>{current.pro.price}</span>
            <span style={{ fontSize: '1.2rem', color: 'var(--text-muted)', fontWeight: '600' }}>/tháng</span>
          </div>
          <p style={{ 
            fontSize: '0.85rem', 
            color: 'var(--text-muted)', 
            marginBottom: '25px', 
            padding: '5px 15px', 
            background: 'rgba(0,0,0,0.05)', 
            display: 'inline-block', 
            borderRadius: '20px', 
            fontWeight: '700', 
            opacity: billingCycle === 'monthly' ? 0 : 1,
            transition: 'opacity 0.3s' 
          }}>
            Thanh toán theo năm
          </p>
          <ul className="price-list" style={{ marginBottom: '20px' }}>
            <li className="pro"><span className="check-icon">✓</span> Nhận ngay 5000 lá mỗi tháng</li>
            <li className="pro"><span className="check-icon">✓</span> 100 lá làm mới mỗi ngày</li>
            <li className="pro"><span className="check-icon">✓</span> Tải đề bằng PDF và Word</li>
            <li className="pro"><span className="check-icon">✓</span> Thống kê hành vi học tập học sinh</li>
            <li className="pro"><span className="check-icon">✓</span> Xuất báo cáo bảng điểm</li>
            <li className="pro"><span className="check-icon">✓</span> Thông báo tự động cho phụ huynh</li>
            <li className="pro"><span className="check-icon">✓</span> Tạo bài tập nhỏ</li>
            <li className="pro"><span className="check-icon">✓</span> Hệ thống Teamwork: Hỗ trợ nhiều thành viên sử dụng</li>
          </ul>
          <button className="btn-outline" style={{ display: 'block', width: '100%', marginTop: '30px' }}>Mua gói Pro ngay</button>
        </div>
      </div>

      <div className="pricing-note reveal active">
        <p style={{ fontWeight: '700', color: 'var(--text-main)', marginBottom: '10px', fontSize: '1.15rem' }}>Giải pháp thiết thực nhất để tối ưu thời gian giảng dạy</p>
        <p>Tiết kiệm hàng chục tiếng soạn đề mỗi tuần · Đầu tư vào chuyên môn cốt lõi thay vì các công việc lặp lại sửa lỗi</p>
        <p style={{ marginTop: '25px' }}>
          <a href="#" id="school-contact-btn" onClick={handleSchoolContact} style={{ color: 'var(--primary)', fontWeight: '700', textDecoration: 'none', padding: '10px 20px', background: 'rgba(34,197,94,0.1)', borderRadius: '30px', display: 'inline-block', transition: 'all 0.5s ease' }}>Bạn phụ trách khối lớp số lượng lớn? Liên hệ gói Trường học →</a>
        </p>
      </div>
    </section>
  );
};

export default Pricing;
