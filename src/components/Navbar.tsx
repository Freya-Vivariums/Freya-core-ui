import { Container, Navbar } from "react-bootstrap";
const NavigationBar = ()=>{

    return(
        <Navbar sticky="top" bg={'dark'} data-bs-theme={'dark'}>
            <Container>
                <Navbar.Brand href='/'>
                    <img src={'/Freya-logo.png'} alt="Freya logo" height={'32px'}/>&nbsp;
                </Navbar.Brand>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;