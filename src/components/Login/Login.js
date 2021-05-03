import { GoogleLogin } from 'react-google-login';

const clientId = '547908609775-c7bpl6e7i563gkn2ss61aellot5em8bu.apps.googleusercontent.com';

function Login({history}) {
    const onSuccess = (res) => {
        console.log('Login Successful, user:', res.profileObj);
        console.log(history);
        history.push('/game')
    };

    const onFailure = (res) => {
        console.log('Login Failed, res:', res);
    };

    return (
        <div className="login-page">
            <h1>Welcome to Type Racer</h1>
            <GoogleLogin
                clientId={clientId}
                buttonText="Login with Google"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                style={{marginTop: '100px'}}
                isSignedIn={true}
                uxMode="redirect"
                // redirectUri="/game"
            >
            </GoogleLogin>
        </div>
    );
}

export default Login;