import { Button, Col, Container, Row, Tab, Tabs } from "react-bootstrap";
import ClimateSettingsItem from "./ClimateSettingsItem";
import { useEffect, useState } from "react";
import NotificationBox from "../Notification";
import { api_settings_getSettings, api_settings_updateSettings } from "../../api/settings";

const ClimateSettings = ()=>{
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


    // User feedback message
    const[ message, setMessage ] = useState<string>('');
    const[ isError, setIsError ] = useState<boolean>(false);

    // Disappearing messages
    useEffect(()=>{
        setTimeout(()=>{
            setMessage('');
            setIsError(false);
        },2500);
    },[message])

    useEffect(()=>{
        getSettings();
    },[]);

    // Get the settings
    async function getSettings(){
        const result =  await api_settings_getSettings();
        if( result.message ){
            setIsError(true);
            setMessage(result.message);
            return;
        }
        setIsError(false);
        setMessage("Successfully got the settings!");
    }

    // Update the settings
    async function updateSettings(){
        const result =  await api_settings_updateSettings({});
        if( result.message ){
            setIsError(true);
            setMessage(result.message);
            return;
        }
        setIsError(false);
        setMessage("Successfully updated the settings!");
    }
    

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
            <NotificationBox message={message} isError={isError} />
            <div style={{width:'100%', textAlign:'right'}} >
                <Button variant="secondary" className="mb-3" onClick={getSettings}>Reset</Button>&nbsp;
                <Button variant="primary" className="mb-3" onClick={updateSettings}>Save</Button>
            </div>
        </Container>
    );
}

export default ClimateSettings;