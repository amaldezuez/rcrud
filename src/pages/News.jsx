import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Addd from './Addd';
import { useSelector,useDispatch } from 'react-redux';

import { deletenews } from './Redux/Slices/newslice';
import { Link } from 'react-router-dom';

function News() {

 const dispatch=useDispatch()

const news=useSelector((state)=>state.news.user)  
 console.log(news)


  const [edit,setedit]=useState(false)
 const[id,setid]=useState(null)


  return (
    <>
    
 
    <Addd/>
 
  <div className='  bg-light mt-5 contaniner-fluid w-100 border border-3 shadow p-5 d-flex  justify-content-around flex-wrap' >
 
    {
      
      news.length>0?
      <>
      
      {

        
        news.map(item=>(

          <Card style={{ width: '25rem' }} className='me- mb-3' >
             
              
                <Card.Img variant="top" className='img-fluid parent' src={item?.Thumb}  style={{width:'100%',height:'200px',objectFit:'cover'}}/>
                <Card.Body>
                  <Card.Title className='text-center text-dark'style={{fontSize:'30px',fontWeight:'bolder'}} >{item?.head}</Card.Title>
          
           
                  <Card.Text>
                    <strong className='text-dark'style={{fontSize:'18px'}}>{item?.place}:</strong><span style={{fontSize:'14px'}}>{item?.des}
           </span> 
                  </Card.Text><div className='d-flex justify-content-between p-3'>
                   <button className='btn btn-basic' onClick={()=>dispatch(deletenews(item?.id))}> <div className='border  ' style={{boxShadow:'1px 1px 8px red '}}>
                    <i className="fa-solid fa-trash fa-xl  " style={{color: "#fb2109",}} />
                    </div></button>
                  <Link to={`/edit/${item?.id}`}  ><button className='btn btn-basic'><div style={{boxShadow:'1px 1px 10px yellow '}}>
                    <i className="fa-solid fa-pen-to-square fa-xl"style={{color: "#FFD43B",}}  />
                    </div></button></Link>
                  </div>
                  </Card.Body>
              </Card>
                ))
              } 
              </> :<h3 className='text-danger'><i>No New's</i> </h3>
     
              

            }
    
  </div>
            

 

 </>
  )
}

export default News