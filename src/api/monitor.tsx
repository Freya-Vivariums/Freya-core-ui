/*
 *  Monitor API
 */

/* Get temperature measurement data */
export async function api_monitor_getTemperature(){
    const response = await fetch( window.location.origin+'/api/monitor/temperature',{
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
        credentials: 'include'
    });
    try{
        const content = await response.json();
        return content;
    } catch(err:any){
        return {message:err.toString()};
    }
}


/* Get humidity measurement data */
export async function api_monitor_getHumidity(){
    const response = await fetch( window.location.origin+'/api/monitor/humidity',{
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
        credentials: 'include'
    });
    try{
        const content = await response.json();
        return content;
    } catch(err:any){
        return {message:err.toString()};
    }
}


/* Get lighting measurement data */
export async function api_monitor_getLighting(){
    const response = await fetch( window.location.origin+'/api/monitor/lighting',{
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
        credentials: 'include'
    });
    try{
        const content = await response.json();
        return content;
    } catch(err:any){
        return {message:err.toString()};
    }
}
