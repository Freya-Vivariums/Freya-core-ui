import { Button, Col, Container, Row, Tab, Tabs } from "react-bootstrap";
import ClimateSettingsItem from "./ClimateSettingsItem";
import { useEffect, useState } from "react";
import NotificationBox from "../Notification";
import { api_settings_getSettings, api_settings_updateSettings } from "../../api/settings";

const ClimateSettings = ()=>{
    const[ settings, setSettings ] = useState<any[]>([]);
    const[ daySettings, setDaySettings ] = useState<any|null>(null);
    const[ nightSettings, setNightSettings ] = useState<any|null>(null);
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
        setSettings(result);
        console.log(result);
        setDaySettings(result[0].dayCycle[0]);
        setNightSettings(result[0].dayCycle[1]);
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
                    <ClimateSettingsItem data={daySettings} onChange={(settings:any)=>{/*setDaySettings(settings)*/}} />
                </Col>
                <Col>
                    <ClimateSettingsItem data={nightSettings} onChange={(settings:any)=>{/*setNightSettings(settings)*/}} />
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