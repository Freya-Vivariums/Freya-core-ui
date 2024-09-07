import { Alert, Button, Col, Container, Row, Tab, Tabs } from "react-bootstrap";
import VivariumData from "../components/VivariumData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine, faCogs } from "@fortawesome/free-solid-svg-icons";
import ClimateSettingsItem from "../components/ClimateSettingsItem";

const Home = ()=>{
    const data={
        name: 'Day',
        startHours: 11,
        startMinutes: 13,
        temperature:{
            minimum: 20,
            maximum: 30
        },
        humidity:{
            minimum: 45,
            maximum: 55,
            rainInterval: 30,
            rainDuration: 5
        },
        lighting:{
            minimum: 75,
            maximum: 100
        }
    }
    return(
        <Container>
            <Tabs defaultActiveKey="data" className="mb-3">
                <Tab title={<><FontAwesomeIcon icon={faChartLine}/> Data</>} eventKey={"data"}>
                    <VivariumData id="blub" vivariumSocket={{}} />
                </Tab>
                <Tab title={<><FontAwesomeIcon icon={faCogs}/> Settings</>} eventKey={"settings"}>
                    <Row>
                        <Col>
                            <ClimateSettingsItem data={data} setSettings={()=>{}} />   
                        </Col>
                        <Col>
                            <ClimateSettingsItem data={data} setSettings={()=>{}} />   
                        </Col>
                    </Row>
                </Tab>
            </Tabs>
        </Container>
    );
}

export default Home;