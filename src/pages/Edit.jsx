import React, { useState } from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useParams } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { update } from './Redux/Slices/newslice';


function Edit() {
  const {id}=useParams()
  const dispatch=useDispatch()
  const nav=useNavigate()
  const news=useSelector((state)=>state.news);
  console.log(news)


  const existinguser=news.user.find((item) => item.id == id);

  const [uhead,setuhead]=useState(existinguser?existinguser.head:'')
  const [uthumb,setuthumb]=useState(existinguser?existinguser.Thumb:'')
  const [uplace,setuplace]=useState(existinguser?existinguser.place:'')
  const [udes,setudes]=useState(existinguser?existinguser.des:'')
  const handleupdate=()=>{

    dispatch(update(
      {
        id:id,
        head:uhead,
        Thumb:uthumb,
        place:uplace,
        des:udes
      }
    ))
nav('/news')

  }

  return (
   <>
   <div className='w-75 mt-5 ms-5 d-flex justify-content-center  flex-column  h-50'>
   <FloatingLabel
        controlId="floatingInputid"
        label="News Headline"
        className="mb-3"
      >
        <Form.Control type="text"value={uhead} onChange={(e)=>setuhead(e.target.value)} placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel className="mb-3" controlId="floatingheading" label="News Thumbnail">
        <Form.Control type="text" value={uthumb} onChange={(e)=>setuthumb(e.target.value)} placeholder="Password" />
      </FloatingLabel>
      <FloatingLabel className="mb-3" controlId="floatingheading" label="Place">
        <Form.Control  type="text"value={uplace} onChange={(e)=>setuplace(e.target.value)} placeholder="" />
      </FloatingLabel>
      <FloatingLabel  controlId="floatingheading" label=" News Description">
        <Form.Control type="text" value={udes}onChange={(e)=>setudes(e.target.value)} className='' placeholder="Password" />
      </FloatingLabel>
      <div className='ms-auto'>
        <button className='btn btn-success mt-3 ' onClick={handleupdate} style={{padding:'8px 30px'}}>Update</button>
      </div>
      </div>
     
   </>
  )
}

export default Edit