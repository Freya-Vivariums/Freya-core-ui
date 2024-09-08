import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudRain, faSmog, faSun, faThermometerHalf } from '@fortawesome/free-solid-svg-icons';
import {Slider, FormGroup, FormControlLabel, Switch } from '@mui/material';
import { LocalizationProvider, TimePicker } from '@mui/lab';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
//import { TimeOfDayObject } from '../../utilities/climate';


const ClimateSettingsItem = (props:{data:any, onChange?:Function }) => {

    // on initialization, preload all settings fields
    useEffect(()=>{
        // set the NAME
        setName(props.data.name);
        // TODO: initialize START TIME
        setStartTime([props.data.startHours, props.data.startMinutes]);
        setStartDate(setDateFromTime( props.data.startHours, props.data.startMinutes ));
        // initialize TEMPERATURE range
        setTemperatureRange( [props.data.temperature.minimum, props.data.temperature.maximum] );
        // initialize LIGHTS
        setLightingRange( [props.data.lighting.minimum, props.data.lighting.maximum] );
        // initialize HUMIDITY range
        setHumidityRange( [props.data.humidity.minimum, props.data.humidity.maximum] );
        // TODO initialize RAIN timings
        setRainInterval(props.data.humidity.rainInterval);
        setRainDuration(props.data.humidity.rainDuration);

    },[]);

    // on every change, update the full object
    useEffect(()=>{
        let minLightIntensity=0;
        let maxLightIntensity=0;

        // Create the new TimeOfDay Object
        const newTimeOfDaySettings:any = {
            uuid: props.data.uuid,                  // UUID
            name: name,                             // name of this time of day
            startHours: startTime[0],               // starttime hours
            startMinutes: startTime[1],             // starttime minutes
            endHours: 0,                     // TODO: calculate endtime hours
            endMinutes: 0,                   // TODO: calculate endtime minutes
            lighting: {
                minIntensity: minLightIntensity,    // minimum light intensity in %
                maxIntensity: maxLightIntensity     // maximum light intensity in %
            },
            temperature: {
                minTemperature: (temperatureRange as number[])[0],     // minimum temperature in deg. Celcius
                maxTemperature: (temperatureRange as number[])[1]      // maximum temperature in deg. Celcius
            },
            humidity: {
                minRHumidity: (humidityRange as number[])[0],   // minimum relative humidity in %
                maxRHumidity: (humidityRange as number[])[1],   // maximum relative humidity in %
                rainInterval: rainInterval,         // interval in minutes
                rainDuration: rainDuration          // duration in seconds
            }
        }
        
        if(typeof props.onChange === 'function') props.onChange(newTimeOfDaySettings);
    });

    /*  
     *  Settings components logic
     */

    // Name
    const[ name, setName ] = useState('');

    // Start Time
    const[ startTime, setStartTime ] = useState<number[]>([]);      // HH:mm
    const[ startDate, setStartDate ] = useState<Date>();

    const changeTimeHandler = ( value:any ) =>{
        var date = new Date();
        date.setTime(value);
        setStartDate(date);
        setStartTime([date.getHours(),date.getMinutes()]);
    }

    const setDateFromTime = ( hours:number, minutes:number ) => {
        var date = new Date();
        date.setHours( hours, minutes, 0);   // Set hours, minutes and seconds
        return date;
    }

    // Rain interval & duration
    const[ rainInterval, setRainInterval ] = useState<number>(0);
    const[ rainDuration, setRainDuration ] = useState<number>(0);

    const handleRainIntervalChange = ( event:React.FormEvent<HTMLInputElement>) => {
        setRainInterval(parseInt(event.currentTarget.value));
    }

    const handleRainDurationChange = ( event:React.FormEvent<HTMLInputElement>) => {
        setRainDuration(parseInt(event.currentTarget.value));
    }

    // range slider Temperature
    // range slider info: https://mui.com/api/slider-unstyled/
    const[ temperatureRange, setTemperatureRange ] = useState<number | number[]>([]);

    const handleTemperatureChange = ( event: Event, value: number | number[], activeThumb: number) => {
        setTemperatureRange( value )
    };

    // range slider Humidity
    const[ humidityRange, setHumidityRange ] = useState<number | number[]>([]);

    const handleHumidityChange = ( event: Event, value: number | number[], activeThumb: number) => {
        setHumidityRange( value )
    };


    // range slider Lighting
    const[ lightingRange, setLightingRange ] = useState<number | number[]>([]);

    const handleLightingChange = ( event: Event, value: number | number[], activeThumb: number) => {
        setLightingRange( value )
    };

    return(
        <>
            <h3>{name}</h3>
            <p className="subtext">{name} starts at <strong>{startTime[0]}:{startTime[1]}</strong> and ends at <strong>{props.data.endHours}:{props.data.endMinutes}</strong>.</p>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <TimePicker
                    ampm={false}
                    label=''
                    value={startDate}
                    onChange={ changeTimeHandler }
                    renderInput={(params:any) => <TextField {...params} />}
                />
            </LocalizationProvider>
            <br /><br />
            <h4><FontAwesomeIcon icon={faThermometerHalf} /> Temperature</h4>
            <p className="subtext">The temperature ranges between <strong>{(temperatureRange as number[])[0]}&deg;C</strong> and <strong>{(temperatureRange as number[])[1]}&deg;C</strong>.</p>
            <Slider
                getAriaLabel={() => 'Temperature range'}
                value={temperatureRange}
                onChange={handleTemperatureChange}
                valueLabelDisplay="auto"
                min={5}
                max={70}
                sx={{
                    maxWidth: 500,
                    color: 'var(--freya_light_green)',
                  }}
                />
            <hr />
            <h4><FontAwesomeIcon icon={faSun} /> Lights</h4>
            <p className="subtext">The lighting ranges between <strong>{(lightingRange as number[])[0]}%</strong> and <strong>{(lightingRange as number[])[1]}%</strong>.</p>
            <Slider
                getAriaLabel={() => 'Light intensity range'}
                value={lightingRange}
                onChange={handleLightingChange}
                valueLabelDisplay="auto"
                    sx={{
                    maxWidth: 500,
                    color: 'var(--freya_light_green)'
                  }}
            />
            <hr />
            <h4><FontAwesomeIcon icon={faSmog} /> Humidity</h4>
            <p className="subtext">The humidity ranges between <strong>{(humidityRange as number[])[0]}%</strong> and <strong>{(humidityRange as number[])[1]}%</strong>.</p>
            <Slider
                getAriaLabel={() => 'Humidity range'}
                value={humidityRange}
                onChange={handleHumidityChange}
                valueLabelDisplay="auto"
                    sx={{
                    maxWidth: 500,
                    color: 'var(--freya_light_green)'
                  }}
            />
            <hr />
            <h4><FontAwesomeIcon icon={faCloudRain} /> Rain</h4>
            {rainDuration>0?<p className="subtext">It will rain every <strong>{rainInterval} minutes</strong> for <strong>{rainDuration} seconds</strong>.</p>:
            <p className="subtext">Rain is <strong>disabled</strong>.</p>}
            <input type="number" name="rainInterval" min={0} onChange={handleRainIntervalChange} value={String(rainInterval)}></input> minutes<br/>
            <input type="number" name="rainDuration" min={0} onChange={handleRainDurationChange} value={String(rainDuration)}></input> seconds
        </>
    )
}

export default ClimateSettingsItem;