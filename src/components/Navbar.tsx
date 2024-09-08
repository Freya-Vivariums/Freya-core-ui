import { faSignOut } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
const NavigationBar = ()=>{

    return(
        <Navbar sticky="top" bg={'dark'} variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href='/'>
                    <img src={'/Freya-logo.png'} alt="Freya logo" height={'32px'}/>&nbsp;
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Nav.Link onClick={()=>{}} style={{ cursor: 'pointer', color:'var(--freya_light_grey)' }} className="ms-auto">
                        <FontAwesomeIcon icon={faSignOut} /> Exit
                    </Nav.Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;