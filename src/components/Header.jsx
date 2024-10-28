import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import {Row,Col} from 'react-bootstrap'

function Header() {
  return (
    <>
      <Navbar className='bg-dark' style={{height:'80px'}}>
        <Container className='d-flex justify-content-between' >
            
            <div>
            <Navbar.Brand href="#home" className=''>
            <i className="fa-brands fa-square-youtube fa-2xl fa-fade me-3"  style={{color:'red'}}/>
                {' '}
               <b style={{color:'white'}}> NEWS </b>
            </Navbar.Brand>
            </div>
           </Container>
      </Navbar>
    </>
  )
}

export default Header