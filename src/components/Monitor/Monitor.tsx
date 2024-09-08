import { faSmog, faSun, faThermometerHalf } from '@fortawesome/free-solid-svg-icons';
import VariableMonitor from './VariableMonitor';
import { useEffect, useState } from 'react';
import ScheduleMonitor from './ScheduleMonitor';
import { api_monitor_getHumidity, api_monitor_getLighting, api_monitor_getTemperature } from '../../api/monitor';
import './VivariumData.css';

const Monitor = () => {
  // Monitor graph data
  const[ temperature, setTemperature ] = useState<any[]>([]);
  const[ humidity, setHumidity ] = useState<any[]>([]);
  const[ lighting, setLighting ] = useState<any[]>([]);
  // Monitor status data
  const[ temperatureStatus, setTemperatureStatus ] = useState<string>('Loading...');
  const[ humidityStatus, setHumidityStatus ] = useState<string>('Loading...');
  const[ lightingStatus, setLightingStatus ] = useState<string>('Loading...');
  
  useEffect(()=>{
    getTemperatureData();
    getHumidityData();
    getLightingData();
  },[])

  // Get the Temperature data
  async function getTemperatureData(){
    const result = await api_monitor_getTemperature();
    if( result.message ){
      setTemperatureStatus("Could not get data");
      return;
    }
    setTemperature(result);
  }

  // Get the Humidity data
  async function getHumidityData(){
    const result = await api_monitor_getHumidity();
    if( result.message ){
      setHumidityStatus("Could not get data");
      return;
    }
    setHumidity(result);
  }

  // Get the Lighting data
  async function getLightingData(){
    const result = await api_monitor_getLighting();
    if( result.message ){
      setLightingStatus("Could not get data");
      return;
    }
    setLighting(result);
  }

  return (
          <>
            <ScheduleMonitor />
            <VariableMonitor unit='&deg;C' variable='Temperature' icon={faThermometerHalf} status={temperatureStatus} data={temperature}/>
            <VariableMonitor unit='%' variable='Humidity' icon={faSmog} status={humidityStatus} data={humidity}/>
            <VariableMonitor unit='%' variable='Lighting' icon={faSun} status={lightingStatus} data={lighting}/>
          </>
        );
  }

export default Monitor;