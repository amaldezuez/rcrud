import React from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import img from './image.png';
import { Row,Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Home() {
  return (
    <>
    <div className='main bg-light'  style={{backgroundColor:'e114da',}} >
      <div className=''>
        <Row className=' '>
          <Col sm={6} className='bg-succes ' >
          <img className=' img-fluid mt-5 ms-4' src={img} style={{height:'450px'}} ></img>
          </Col>
          <Col sm={6}  style={{textAlign:'justify' ,}} className='mt-5 text-center'>
       
         
          
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias possimus reiciendis nihil laboriosam dignissimos laborum earum facere aperiam provident quibusdam doloremque quis nemo dolore mollitia vel explicabo maxime, expedita eum!
           adipisicing elit. Dolorem exercitationem fugiat alias officia, sed quia harum, veniam quis voluptatibus culpa rerumn quos reiciendis repellat ducimus eos et, eius corporis vero
        oluptates aspernatur, eos eius fugit eaque doloribus sint temporibus, quis harum assumenda illo reprehenderit? Omnis ducimus aliquid impedit doloremque quidem?
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi nobis fugit odio, accusantium laudantium illum ex voluptatibus tenetur necessitatibus quod esse sed dolore ad ducimus saepe omnis mollitia rerum expedita.
            </p>
          
          
            <Link to={'/news'}> <div className='d-grid mt-5'>
         
        <button className='btn  btn-info border-3 text-light' style={{padding:'5px 46px'}}>Explore More</button>
         </div></Link>
          </Col>
  
        </Row>
     
      </div>
       


    </div>
    </>
  )
}

export default Home