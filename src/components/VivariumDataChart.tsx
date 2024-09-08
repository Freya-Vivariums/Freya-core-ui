import { forwardRef, useEffect, useImperativeHandle, useState } from 'react';
import { CartesianGrid, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import './VivariumData.css';
import moment from 'moment';

// https://recharts.org/en-US/examples/CustomizedDotLineChart
// documentation
// Time series charts: https://github.com/recharts/recharts/issues/956
// Note: when preforming a 'mean()' action in InfluxDB query, the results get a 'mean_' prefix

const VivariumDataChart = forwardRef( (props:{ id:string, type:string}, ref )  => {
  const [data, setData] = useState<any[]>([]);

  // Function for parent to append live data
  // to the graph
  useImperativeHandle(ref, () => ({
    appendData: ( value:number ) => appendData( value, 0, 100, new Date() )
  }));
  
  function appendData( value:number, min:number, max:number, time:Date ){
    if( data.length > 0 ){
      const futureDate = new Date( data[data.length -1].time.getTime() + 15*60000);   // +15 minutes!
    
      // If this data sample is 15minutes ore more in the future than the
      // last sample of the array, create a new datapoint and append to data.
      if( futureDate.getTime() < time.getTime() ){
        const datapoint = {
          time: time,
          mean_min: min,
          mean_max: max,
          mean_value: value,
        }
        setData([ ...data, datapoint] );
      }
    }
    else {
      const datapoint = {
        time: time,
        mean_min: min,
        mean_max: max,
        mean_value: value,
      }
      setData([ ...data, datapoint] );
    }
  }

  // Function that fetches the graph data from the API, and updates
  // the 'data' State.
  async function updateGraphData(){
    //const content = await FreyaAPI_vivarium_getGraphData( props.id, props.type);
    //setData(content);
  }

  // On component load, fetch the vivarium list
  useEffect(()=>{
    updateGraphData();
  },[]);

  return (
      <>
        <ResponsiveContainer width='100%' height = {160} >
          <LineChart data={data} >
            <CartesianGrid
              stroke="#ccc"
              strokeDasharray="3 3"
            />

            {/* The minimum indicator line */}
            <Line
              type="monotone"
              dataKey="mean_min"
              strokeWidth={0.3}
              stroke="var(--freya_black)"
              dot={false}
              isAnimationActive={false}
            />
            {/* The maximum indicator line */}
            <Line
              type="monotone"
              dataKey="mean_max"
              strokeWidth={0.3}
              stroke="var(--freya_black)"
              dot={false}
              isAnimationActive={false}
            />
            {/* The actual data line */}
            <Line
              type="monotone"
              dataKey="mean_value"
              strokeWidth={3}
              stroke="var(--freya_light_green)"
              dot={false}
              isAnimationActive={false}
            />

            <XAxis
              dataKey = 'time'
              domain = {['auto', 'auto']}
              name = 'Time'
              tickFormatter = {(unixTime) => moment(unixTime).format('HH:mm')}
              //type = 'number'
              hide={true}
            />

            <YAxis
              dataKey='mean_value'
              //domain = {['auto', 'auto']}
              domain = {[ 'dataMin - 10', 'dataMax +10' ]}
              name='Value'
              type='number'
              hide={true}
              orientation = 'left'
              style = {{
                fontSize: '0.7rem',
                fontFamily: 'Dosis'
              }}
            />

          </LineChart>
        </ResponsiveContainer>
      </>
    );
  });

export default VivariumDataChart;