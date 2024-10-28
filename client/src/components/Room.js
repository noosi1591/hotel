import React, { useState } from "react";
import { Modal, Button, Carousel } from "react-bootstrap";
import { Link } from 'react-router-dom';

function Room({ room }) {
  // ตรวจสอบข้อมูลของ room และ imageUrls
  console.log(room); // ตรวจสอบค่า room
  console.log(room.imageUrls); // ตรวจสอบค่า imageUrls
  const [show, setShow] = useState(false);

  // ฟังก์ชันสำหรับเปิด modal
  const handleShow = () => setShow(true);

  // ฟังก์ชันสำหรับปิด modal
  const handleClose = () => setShow(false);

  return (
    <div className="row bs">
      <div className="col-md-4">
        <img src={room.imageurls[0]} className="smallimg" />
      </div>
      <div className="col-md-7 ">
        <h1>{room.name}</h1>
        <b>
          <p>Max Count : {room.maxcount}</p>
          <p>Phone Number : {room.phonenumber}</p>
          <p>Type : {room.maxcount}</p>
        </b>

        <div style={{ float: "right" }}>
          <button className="btn btn-primary" onClick={handleShow}>Veiw Details</button>
          
          <Link to={`/book/${room._id}`}>
          <button className="btn btn-primary">Booking now</button>
          </Link>

          
        </div>
        
      </div>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{room.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Carousel prevLabel="" nextLabel="">
            {room.imageurls.map((url) => {
              return (
                <Carousel.Item>
                  <img className="d-block w-100 bigimg" src={url} />
                </Carousel.Item>
              );
            })}
          </Carousel>
          <p>{room.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Room;
