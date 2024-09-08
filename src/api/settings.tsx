/*
 *  Settings API
 */

/* Get the settings */
export async function api_settings_getSettings(){
    const response = await fetch( window.location.origin+'/api/settings',{
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

/* Update the settings */
export async function api_settings_updateSettings( settings:any ){
    const response = await fetch( window.location.origin+'/api/settings',{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        credentials: 'include',
        body:JSON.stringify(settings)
    });
    try{
        let content = await response.json();
        content.ok = response.ok;
        return content;
    } catch(err:any){
        return {message:err.toString()};
    }
}