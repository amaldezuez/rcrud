import React from 'react'
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Row,Col, Badge } from 'react-bootstrap' ;
import { addnews } from './Redux/Slices/newslice';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

function Addd() {
    // const [data,setdata]=useState(
    //     {
    //       headline:"",
    //       thumbnail:"",
    //       place:"",
    //       description:""
    //     }
   
    //   )

    const [head,sethead]=useState("")
    const [Thumb,setThumb]=useState("")
    const [place,setplace]=useState("")
    const [des,setdes]=useState("")

      const nav=useNavigate()
      
      const news=useSelector((state)=>state.news)
      console.log(news)
      const dispatch=useDispatch();

      const handlesubmit=()=>{
        dispatch(addnews({id:Date.now(),head,Thumb,place,des}))
        handleClose()

    
      }
      const [show, setShow] = useState(false);

      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);
   
  return (
    <>
    <div>
    <Row>
      <Col sm={12} className='mt-5 ms-5'>
      <button className='btn btn-info btn-xl' onClick={handleShow} style={{padding:'8px 30px'}}>Add News<Badge className='bg-info shadow ms-3'><span>+</span></Badge></button>
      </Col>
    </Row>

    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <FloatingLabel
        controlId="floatingInputid"
        label="News Headline"
        className="mb-3"
      >
        <Form.Control type="text" onChange={(e)=>sethead(e.target.value)} placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel className="mb-3" controlId="floatingheading" label="News Thumbnail">
        <Form.Control type="text" onChange={(e)=>setThumb(e.target.value)} placeholder="Password" />
      </FloatingLabel>
      <FloatingLabel className="mb-3" controlId="floatingheading" label="Place">
        <Form.Control  type="text" onChange={(e)=>setplace(e.target.value)} placeholder="" />
      </FloatingLabel>
      <FloatingLabel  controlId="floatingheading" label=" News Description">
        <Form.Control type="text" onChange={(e)=>setdes(e.target.value)} placeholder="Password" />
      </FloatingLabel>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handlesubmit}>Add</Button>
        </Modal.Footer>
      </Modal>
  </div>
    </>
  )
}

export default Addd