import { faKey } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {useState, SyntheticEvent } from 'react';
import { Button } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';

const Login = (props:{user:any, onLogin: (isLoggedIn:boolean)=>void }) => {
    const[ email, setEmail ] = useState("");
    const[ password, setPassword ] = useState("");
    const[ msg, setMsg] = useState('');
    let message;

    // on submit ('log in'), post the username and password to the login api,
    const submit = async (e:SyntheticEvent) =>{
        e.preventDefault();   // prevents page refresh
        /*const content = await FreyaAPI_user_login( email, password );   // login user with API call

        if(content.message !== 'success'){
            setMsg(content.message);
        }
        else {
            props.onLogin(true);
        }*/
    }

    // Display error message if login fails
    if( msg !== '' ){
        message = (
            <div className="alert alert-danger" role="alert">
                {msg}. Trouble logging in? <a href="mailto:support@freyavivariums.com">Contact support</a>.
            </div>
        );
    }
    
    // if a user is logged in, redirect to home
    if( props.user !== null ){
      return <Navigate to="/" />;
    }

    return(
        <main className="form-signin">
            <form onSubmit={submit}>
            <h1 className="h3 mb-3 fw-normal"><FontAwesomeIcon icon={faKey}/> Log in</h1>

                <div className="input-group mb-3">
                    <input type="email" className="form-control" aria-describedby="basic-addon1" placeholder="E-mail" required onChange={e => setEmail(e.target.value)}/>
                </div>
                <div className="input-group mb-3">
                    <input type="password" className="form-control" placeholder="Password" required onChange={e => setPassword(e.target.value)}/>
                </div>
                {message}
                <Button variant='primary' className="w-100" type="submit">Log in</Button>
            </form>
        </main>
    )
}

export default Login;