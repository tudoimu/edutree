import React, { useEffect, useState, useRef } from 'react';

const Process = () => {
  const [activeStep, setActiveStep] = useState(0);
  const stepsRef = useRef([]);

  useEffect(() => {
    const observerOptions = {
      rootMargin: "-40% 0px -40% 0px",
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const idx = stepsRef.current.indexOf(entry.target);
          if (idx !== -1) setActiveStep(idx);
        }
      });
    }, observerOptions);

    stepsRef.current.forEach(step => step && observer.observe(step));

    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      num: 1,
      title: "Chọn môn & chuyên đề",
      desc: "Edutree hỗ trợ đầy đủ các môn thi HSA theo format ĐGNL VNU. Giao diện trực quan giúp bạn dễ dàng chọn lọc nội dung thiết yếu siêu tốc.",
      img: "https://i.ibb.co/0VDjZtp5/3.png"
    },
    {
      num: 2,
      title: "Tùy chỉnh độ khó",
      desc: "Cân đối tỷ lệ câu hỏi dễ, trung bình, khó theo chuẩn 40-40-20. Tùy ý cá nhân hóa từng câu hỏi theo ý muốn, đổi câu tương đương chỉ với 1 click.",
      img: "https://i.ibb.co/m7F6kgJ/2.png"
    },
    {
      num: 3,
      title: "Xuất file hoặc thi online",
      desc: "Tải PDF/Word hoặc gửi link cho học sinh làm bài trực tiếp — không cần app. File được thiết kế chuẩn mực sẵn sàng cho việc in ấn ngay lập tức.",
      img: "https://i.ibb.co/ym68qJjv/1.png"
    },
    {
      num: 4,
      title: "Nhận báo cáo nhanh chóng",
      desc: "AI tự động chấm điểm và phân tích lỗ hổng kiến thức từng học sinh. Vẽ biểu đồ năng lực chi tiết giúp bạn đưa ra bộ giáo trình bổ trợ phù hợp.",
      img: "https://i.ibb.co/TDD5Gx0Y/4.png"
    }
  ];

  return (
    <>
      <div className="section-header reveal active">
        <p className="badge">Quy trình</p>
        <h2>Có đề chuẩn HSA trong 4 bước — dưới 2 phút</h2>
      </div>
      <section className="process-section">
        <div className="process-container">
          <div className="process-left">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className={`process-step step-item ${activeStep === index ? 'active' : ''}`}
                ref={el => stepsRef.current[index] = el}
              >
                <div className="step-number">{step.num}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="process-right">
            <div className="process-mockup">
              {steps.map((step, index) => (
                <img 
                  key={index} 
                  src={step.img} 
                  className={activeStep === index ? 'active' : ''} 
                  alt={`Step ${step.num}`}
                  style={{ 
                    position: index === 0 ? 'relative' : 'absolute',
                    top: index === 0 ? '0' : '10px',
                    left: index === 0 ? '0' : '10px'
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Process;
