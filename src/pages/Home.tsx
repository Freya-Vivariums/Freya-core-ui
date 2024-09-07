import { Alert, Button, Container, Tab, Tabs } from "react-bootstrap";
import VivariumData from "../components/VivariumData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine, faCogs } from "@fortawesome/free-solid-svg-icons";
import ClimateSettingsItem from "../components/ClimateSettingsItem";

const Home = ()=>{
    const data={
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
                    <Alert>
                        We're still working on this!
                    </Alert>
                    <ClimateSettingsItem data={data} setSettings={()=>{}} />
                </Tab>
            </Tabs>
        </Container>
    );
}

export default Home;