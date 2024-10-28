import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Welcome() {
  const handleProceed = () => {
    window.location.href = '/home'; // เปลี่ยนเส้นทางไปยังหน้า Home
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '0' }}>
      <Carousel>
        <Carousel.Item>
          <img
            src ="https://santiburisamui.com/wp-content/uploads/cache/2022/09/batch_01-grand-deluxe-pool-villa-pool-scaled/1409862395.jpg"
            alt="Grand Deluxe Pool Villa"
            className="d-block w-100 " // ใช้คลาส Bootstrap สำหรับการปรับขนาด
          />
          <Carousel.Caption>
            <h3>Pool Villa</h3>
            <p>หากคุณกำลังมองหาสถานที่พักผ่อนสุดพิเศษที่มอบความสะดวกสบายและความเป็นส่วนตัว 
พูลวิลล่า คือคำตอบที่สมบูรณ์แบบ! สัมผัสประสบการณ์การพักผ่อนในบรรยากาศหรูหรา
 พร้อมสระว่ายน้ำส่วนตัวที่จะทำให้คุณผ่อนคลายได้อย่างเต็มที่ ไม่ว่าจะเป็นการพักผ่อนกับครอบครัวหรือเพื่อนฝูง
 พูลวิลล่าคือสถานที่ที่เหมาะที่สุด</p>
            
      <button className="btn btn-primary" onClick={handleProceed} style={{ marginTop: '20px' }}>
        เข้าสู่หน้า Home
      </button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

    </div>
  );
}

export default Welcome;
