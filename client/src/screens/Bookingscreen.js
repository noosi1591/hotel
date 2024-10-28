import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Error from "../components/Error";
import { Modal, Button, Carousel } from "react-bootstrap";

function Bookingscreen() {
  let { roomid } = useParams();
  const [room, setRoom] = useState(null); // ใช้ null สำหรับการตั้งค่าเริ่มต้น
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    const fetchRoom = async () => {
      try {
        console.log("Room ID:", roomid); // ตรวจสอบว่า roomid ที่ได้จาก useParams มีค่าอะไร
        setLoading(true);
        const response = await axios.post("/api/rooms/getroombyid", { roomid });
        setRoom(response.data); // ตั้งค่าให้ room เก็บข้อมูล
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchRoom();
  }, [roomid]);
  const handleShow = () => setShowModal(true); // ฟังก์ชันเปิด Modal
  const handleClose = () => setShowModal(false);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : error ? (
        <Error />
      ) : (
        <div>
          <div className="row justify-content-center mt-5 bs">
            <div className="col-md-5">
              <h1>{room.name}</h1>
              <img src={room.imageurls[0]} alt={room.name} className="bigimg" />
            </div>
            <div className="col-md-5" style={{ textAlign: "right" }}>
              <h1>Booking Details</h1>
              <hr />
              <b>
                <p>Name : </p>
                <p>From Date : </p>
                <p>To Date : </p>
                <p>Max Count :{room.maxcount} </p>
              </b>
              <div style={{ textAlign: "right" }}>
                <b>
                  <h1>Amount</h1>
                  <hr />
                  <p>Total days : </p>
                  <p>Rent per day : {room.rentperday} </p>
                  <p>Total Amount : </p>
                </b>
              </div>
           
              <div style={{ float: "right" }}>
              <button className="btn btn-primary" onClick={handleShow}>Pay now</button>
              </div>
              
            </div>
          </div>
     {/* Modal for payment confirmation */}
     <Modal show={showModal} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Payment Confirmation</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>Success</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={handleClose}>Confirm Payment</Button>
            </Modal.Footer>
          </Modal>
          
        </div>
      )}
    </div>
  );
}

export default Bookingscreen;
