import { Button, Col, Container, Row, Tab, Tabs } from "react-bootstrap";
import ClimateSettingsItem from "./ClimateSettingsItem";
import { useEffect, useState } from "react";

const ClimateSettings = ()=>{
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

    const[ daySettings, setDaySettings ] = useState<any>({
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
    })
    const[ nightSettings, setNightSettings ] = useState<any>({
        name: 'Night',
        startHours: 22,
        startMinutes: 16,
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
            minimum: 0,
            maximum: 10
        }
    });

    return(
        <Container>
            <Row>
                <Col>
                    <ClimateSettingsItem data={daySettings} onChange={(settings:any)=>{setDaySettings(settings)}} />
                </Col>
                <Col>
                    <ClimateSettingsItem data={nightSettings} onChange={(settings:any)=>{setNightSettings(settings)}} />
                </Col>
            </Row>
            <hr/>
            <div style={{width:'100%', textAlign:'right'}} >
                <Button variant="secondary" className="mb-3">Reset</Button>&nbsp;
                <Button variant="primary" className="mb-3">Save</Button>
            </div>
        </Container>
    );
}

export default ClimateSettings;