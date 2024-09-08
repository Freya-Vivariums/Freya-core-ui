import { Container, Tab, Tabs } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine, faCogs, faSliders } from "@fortawesome/free-solid-svg-icons";
import ClimateSettings from "../components/ClimateSettings/ClimateSettings";
import Monitor from "../components/Monitor/Monitor";

const Home = ()=>{
    return(
        <Container>
            <Tabs className={"freya-tabs mb-3"} defaultActiveKey="monitor">
                <Tab title={<><FontAwesomeIcon icon={faChartLine}/> Monitor</>} eventKey={"monitor"}>
                    <Monitor />
                </Tab>
                <Tab title={<><FontAwesomeIcon icon={faSliders}/> Settings</>} eventKey={"settings"}>
                    <ClimateSettings />
                </Tab>
                <Tab title={<><FontAwesomeIcon icon={faCogs}/> Configuration</>} eventKey={"configuration"} disabled>
                    <ClimateSettings />
                </Tab>
            </Tabs>
        </Container>
    );
}

export default Home;