import { Alert, Button, Container, Tab, Tabs } from "react-bootstrap";
import VivariumData from "../components/VivariumData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine, faCogs } from "@fortawesome/free-solid-svg-icons";

const Home = ()=>{
    return(
        <Container>
            <Tabs defaultActiveKey="data" className="mb-3">
                <Tab title={<><FontAwesomeIcon icon={faChartLine}/> Data</>} eventKey={"data"}>
                    <VivariumData id="blub" vivariumSocket={{}} />
                </Tab>
                <Tab title={<><FontAwesomeIcon icon={faCogs}/> Settings</>} eventKey={"settings"}>
                    <Alert>
                        We're still working on this!
                    </Alert>
                </Tab>
            </Tabs>
        </Container>
    );
}

export default Home;