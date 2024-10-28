import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Room from '../components/Room';
import Error from '../components/Error';



function Homescreen() {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(false); // ใช้ boolean
  const [error, setError] = useState(null); // เริ่มต้นเป็น null
  
  useEffect(() => {
    const fetchRooms = async () => {
      try {
        setLoading(true);
        const response = await axios.get('/api/rooms/getallrooms');
        setRooms(response.data); // ใช้ response.data ตรงๆ
        setLoading(false);
      } catch (err) {
        setError(err); // เก็บข้อผิดพลาด
        console.log(err);
        setLoading(false);
      }
    };

    fetchRooms();
  }, []); 

  return (
<div className='container'>
  <div className="row justify-content-center mt-5">
    {loading ? (
      <h1>Loading...</h1>
    ) : error ? (
        <Error/>
    ) : (
      rooms.map((room) => {
        return (
          <div className="col-md-9" key={room.id}> {/* ควรเพิ่ม key เพื่อการจัดการที่ดี */}
            <Room room={room} />
          </div>
        );
      })
    )}
  </div>
</div>
  );
}

export default Homescreen;
