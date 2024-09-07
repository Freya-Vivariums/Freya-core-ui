import { useEffect, useRef, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmog, faSun, faThermometerHalf } from '@fortawesome/free-solid-svg-icons';
import './VivariumData.css';
import VivariumDataChart from './VivariumDataChart';

const VivariumData = ( props:{id:string, vivariumSocket:any } ) => {
  const[currentTemperature, setCurrentTemperature] = useState('XX.X');
  const[currentHumidity, setCurrentHumidity] = useState('XX.X');
  const[currentLighting, setCurrentLighting] = useState('XX.X');

  const[currentTemperatureStatusMsg, setCurrentTemperatureStatusMsg] = useState('loading...');
  const[currentLightingStatusMsg, setCurrentLightingStatusMsg] = useState('loading...');
  const[currentHumidityStatusMsg, setCurrentHumidityStatusMsg] = useState('loading...');

  // Refs from the Chart children: update live data to
  // the graphs
  const temperatureRef = useRef<{appendData:Function}>();
  const humidityRef = useRef<{appendData:Function}>();
  const lightingRef = useRef<{appendData:Function}>();
  //const temperatureRef = createRef<any>();
  //const humidityRef = createRef<any>();
  //const lightingRef = createRef<any>();

  // When this component is mounted, subscribe to the websocket's
  // live data stream
  useEffect(()=>{  
    /*props.vivariumSocket.on('live', (data:any)=>{
      try{
        // Live values from sensor
        setCurrentTemperature(data.temperature);
        setCurrentLighting(data.lighting);
        setCurrentHumidity(data.humidity);
        // Live status from controllers
        setCurrentTemperatureStatusMsg(data.temperatureStatus.message);
        setCurrentLightingStatusMsg(data.lightingStatus.message);
        setCurrentHumidityStatusMsg(data.humidityStatus.message);
        // Append data to graphs
        if(typeof(temperatureRef.current) !== "undefined" ) temperatureRef.current.appendData( data.temperature );
        if(typeof(humidityRef.current) !== "undefined" ) humidityRef.current.appendData( data.humidity );
        if(typeof(lightingRef.current) !== "undefined" ) lightingRef.current.appendData( data.lighting );
        
      } catch (e){}
    });

    props.vivariumSocket.on('deviceconnection', (status:string)=>{
      if( status === 'disconnected' ){
        setCurrentTemperature('XX.X');
        setCurrentLighting('XX.X');
        setCurrentHumidity('XX.X');
      }
    });*/
  },[]);

  return (
          <>
            <div style={{width: "100%"}}>
              <div className="liveDataCardContainer col-sm-12 col-12 col-lg-6">
                <Card className="liveData">
                  <Card.Header className="liveData">Temperature</Card.Header>
                  <Card.Body className="liveData">
                    <Row>
                    <Col xs={3}>
                      <Card.Title className="liveData"><FontAwesomeIcon icon={faThermometerHalf} /></Card.Title>
                      <Card.Text className="liveData">{currentTemperature}&deg;C</Card.Text>
                    </Col>
                    <Col xs={9}>
                      <VivariumDataChart ref={temperatureRef} id={props.id} type='temperature' />
                    </Col></Row>
                  </Card.Body>
                  <Card.Footer className="liveData">
                    {currentTemperatureStatusMsg}
                  </Card.Footer>
                </Card>
              </div>
              <div className="liveDataCardContainer col-sm-12 col-12 col-lg-6">
                <Card className="liveData">
                  <Card.Header className="liveData">Humidity</Card.Header>
                  <Card.Body className="liveData">
                    <Row>
                    <Col xs={3}>
                    <Card.Title className="liveData"><FontAwesomeIcon icon={faSmog} /></Card.Title>
                    <Card.Text className="liveData">{currentHumidity}%</Card.Text>
                    </Col>
                    <Col xs={9}>
                      <VivariumDataChart ref={humidityRef} id={props.id} type='humidity' />
                    </Col></Row>
                  </Card.Body>
                  <Card.Footer className="liveData">
                  {currentHumidityStatusMsg}
                  </Card.Footer>
                </Card>
              </div>
              <div className="liveDataCardContainer col-sm-12 col-12 col-lg-6">
                <Card className="liveData">
                  <Card.Header className="liveData">Lighting</Card.Header>
                  <Card.Body className="liveData">
                    <Row>
                    <Col xs={3}>
                    <Card.Title className="liveData"><FontAwesomeIcon icon={faSun} /></Card.Title>
                    <Card.Text className="liveData">{currentLighting}%</Card.Text>
                    </Col>
                    <Col xs={9}>
                    <VivariumDataChart ref={lightingRef} id={props.id} type='lighting' />
                    </Col></Row>
                  </Card.Body>
                  <Card.Footer className="liveData">
                  {currentLightingStatusMsg}
                  </Card.Footer>
                </Card>
              </div>
            </div>
          </>
        );
  }

export default VivariumData;