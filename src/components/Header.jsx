import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import {Row,Col} from 'react-bootstrap'

function Header() {
  return (
    <>
      <Navbar className='bg-light' style={{height:'80px'}}>
        <Container className='d-flex justify-content-between' >
            
            <div>
            <Navbar.Brand href="#home" className=''>
            <i className="fa-brands fa-square-youtube fa-2xl fa-fade me-3"  style={{color:'#FFD43B'}}/>
                {' '}
               <b style={{color:'#FFD43B'}}> NEWS </b>
            </Navbar.Brand>
            </div>
            {/* <div >
                <div className=' me-5 p-2  btn  ' style={{ boxShadow:'1px 2px red'}}>
                <i className="fa-solid  fa-heart fa-lg" style={{color: "#f40b0b",}} />
                </div>
                <div className='btn p-2' style={{boxShadow:'1px 2px white 2px'}}>
                <i className="fa-solid fa-lg fa-cart-shopping" style={{color: 'wheat'}} />
                </div>
            </div> */}

            
    
           
   
         
        </Container>
      </Navbar>
    </>
  )
}

export default Header