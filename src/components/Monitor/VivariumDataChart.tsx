import { CartesianGrid, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import './VivariumData.css';
import moment from 'moment';

// https://recharts.org/en-US/examples/CustomizedDotLineChart
// documentation
// Time series charts: https://github.com/recharts/recharts/issues/956
// Note: when preforming a 'mean()' action in InfluxDB query, the results get a 'mean_' prefix

const VivariumDataChart = (props:{ data:any[]}) => {

  return (
      <>
        <ResponsiveContainer width='100%' height = {160} >
          <LineChart data={props.data} >
            <CartesianGrid
              stroke="#ccc"
              strokeDasharray="3 3"
            />

            {/* The minimum indicator line */}
            <Line
              type="monotone"
              dataKey="min"
              strokeWidth={0.3}
              stroke="var(--freya_black)"
              dot={false}
              isAnimationActive={false}
            />
            {/* The maximum indicator line */}
            <Line
              type="monotone"
              dataKey="max"
              strokeWidth={0.3}
              stroke="var(--freya_black)"
              dot={false}
              isAnimationActive={false}
            />
            {/* The actual data line */}
            <Line
              type="monotone"
              dataKey="value"
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
              //dataKey='value'
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
  };

export default VivariumDataChart;