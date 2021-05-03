import { GoogleLogout } from 'react-google-login';

const clientId = '547908609775-c7bpl6e7i563gkn2ss61aellot5em8bu.apps.googleusercontent.com';

function Logout({history}) {
    const onSuccess = () => {
        console.log('Logged out successfully');
        history.push("/")
        // alert('Logged out successfully');
    };

    return (
        <div className="footer">
            <GoogleLogout
                clientId={clientId}
                buttonText="Log Out"
                onLogoutSuccess={onSuccess}
            >
            </GoogleLogout>
        </div>
    );
}

export default Logout;