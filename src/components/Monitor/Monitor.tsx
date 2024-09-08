import { faSmog, faSun, faThermometerHalf } from '@fortawesome/free-solid-svg-icons';
import './VivariumData.css';
import VariableMonitor from './VariableMonitor';
import { useEffect, useState } from 'react';

const Monitor = () => {
  // Monitor graph data
  const[ temperature, setTemperature ] = useState<any[]>([]);
  const[ humidity, setHumidity ] = useState<any[]>([]);
  const[ lighting, setLighting ] = useState<any[]>([]);
  // Monitor status data
  const[ temperatureStatus, setTemperatureStatus ] = useState<string>('');
  const[ humidityStatus, setHumidityStatus ] = useState<string>('');
  const[ lightingStatus, setLightingStatus ] = useState<string>('');
  
  useEffect(()=>{
    getTemperatureData();
    getHumidityData();
    getLightingData();
  },[])

  // Get the Temperature data
  async function getTemperatureData(){
    setTemperature([
      {min:25, max:30, value:25.1},
      {min:25, max:30, value:25.9},
      {min:25, max:30, value:26.4},
      {min:25, max:30, value:25.1},
      {min:25, max:30, value:24.9}]);
  }

  // Get the Humidity data
  async function getHumidityData(){
    setHumidity([
      {min:25, max:30, value:25.1},
      {min:25, max:30, value:25.9},
      {min:25, max:30, value:26.4},
      {min:25, max:30, value:25.1},
      {min:25, max:30, value:24.9}]);
  }

  // Get the Lighting data
  async function getLightingData(){
    /*setLighting([
      {min:25, max:30, value:25.1},
      {min:25, max:30, value:25.9},
      {min:25, max:30, value:26.4},
      {min:25, max:30, value:25.1},
      {min:25, max:30, value:24.9}]);*/
  }

  return (
          <>
            <VariableMonitor unit='&deg;C' variable='Temperature' icon={faThermometerHalf} status={'All good yo!'} data={temperature}/>
            <VariableMonitor unit='%' variable='Humidity' icon={faSmog} status={'All good yo!'} data={humidity}/>
            <VariableMonitor unit='%' variable='Lighting' icon={faSun} status={'All good yo!'} data={lighting}/>
          </>
        );
  }

export default Monitor;