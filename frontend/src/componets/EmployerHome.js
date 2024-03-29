import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router';
import { MDBBtn }from "mdb-react-ui-kit"
export default function Adminav() {
    const nav=useNavigate()

  return (
    <>
      <Navbar bg="white" data-bs-theme="dark" color='dark'>
        <Container>
          <Navbar.Brand href="#home"></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>nav('/adminhome')} >Employer</Nav.Link>
            <Nav.Link onClick={()=>nav('/view')} >All employees</Nav.Link>
            <Nav.Link onClick={()=>nav('/addemployee')} >Recrute Employees</Nav.Link>
            <Nav.Link onClick={()=>nav('/user')} >Employyee by details</Nav.Link>
            <MDBBtn  rounded size='sm' onClick={()=>nav('/log')}>
              Logout
            </MDBBtn>
          </Nav>
        </Container>
      </Navbar>
      </>
      );
}
