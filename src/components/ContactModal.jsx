import React from 'react';

const ContactModal = ({ isOpen, onClose }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Tuyệt vời! Yêu cầu tư vấn của bạn đã được gửi đi. Edutree sẽ liên hệ lại sớm nhất!');
    onClose();
  };

  return (
    <div className={`modal-overlay ${isOpen ? 'active' : ''}`} onClick={(e) => e.target.classList.contains('modal-overlay') && onClose()}>
      <div className="modal-box">
        <button className="modal-close" onClick={onClose}>&times;</button>
        <h3 style={{ fontSize: '1.8rem', marginBottom: '10px', color: 'var(--text-main)' }}>Liên hệ tư vấn</h3>
        <p style={{ color: 'var(--text-muted)', marginBottom: '25px', fontSize: '0.95rem', lineHeight: '1.6' }}>
          Vui lòng để lại thông tin, đội ngũ hỗ trợ Edutree sẽ liên hệ tư vấn hệ thống phân bổ tối ưu nhất cho bạn.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="form-group" style={{ marginBottom: '15px' }}>
            <label>Họ và tên *</label>
            <input type="text" required placeholder="Nhập họ tên của bạn" />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '15px' }}>
            <div className="form-group" style={{ marginBottom: 0 }}>
              <label>Email *</label>
              <input type="email" required placeholder="Địa chỉ Email" />
            </div>
            <div className="form-group" style={{ marginBottom: 0 }}>
              <label>Số điện thoại *</label>
              <input type="tel" required placeholder="Số điện thoại / Zalo" />
            </div>
          </div>
          <div className="form-group" style={{ marginBottom: '15px' }}>
            <label>Năm sinh *</label>
            <input type="number" required placeholder="VD: 1990" min="1950" max="2010" />
          </div>
          <div className="form-group" style={{ marginBottom: '15px' }}>
            <label>Quan tâm đến gói *</label>
            <select required defaultValue="" style={{ appearance: 'none', cursor: 'pointer' }}>
              <option value="" disabled>Chọn gói bạn quan tâm</option>
              <option value="Free">Gói Free</option>
              <option value="Plus">Gói Plus</option>
              <option value="Pro">Gói Pro</option>
              <option value="School">Gói School</option>
            </select>
          </div>
          <div className="form-group" style={{ marginBottom: '20px' }}>
            <label>Mảng giáo dục *</label>
            <textarea required rows="3" placeholder="Viết một đoạn ngắn giới thiệu về chuyên môn hoặc môn học/khối lớp bạn đang giảng dạy..."></textarea>
          </div>
          <button type="submit" className="btn-trial" style={{ width: '100%', border: 'none', cursor: 'pointer', padding: '15px', fontSize: '1.05rem', marginTop: '5px' }}>Gửi thông tin tư vấn</button>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;
