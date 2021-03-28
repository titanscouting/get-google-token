import React, { Component } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import json from '../package.json'
export default class SundaraNavbar extends Component {
  constructor() {
    super()
    this.state = { tokenId: "", version: json.version}
    console.log(`Get Google token tool - v${this.state.version}`)
  }
  responseGoogle = (response) => {
    this.setState({ tokenId: response.tokenId, loggedIn: true });
  }
  signedOut = () => {
    this.setState({signedOut: true, loggedIn: false})
  }
  render() {
    return (
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', flexDirection: 'column', height: '100vh'}}>
        <div>
          { this.state.loggedIn ?     <GoogleLogout
      clientId="291863698243-4bp5d86k6mo5dk5ief9ve9rq6d7l1fob.apps.googleusercontent.com"
      buttonText="Logout"
      onLogoutSuccess={this.signedOut}
    >
    </GoogleLogout>: <GoogleLogin
            clientId="291863698243-4bp5d86k6mo5dk5ief9ve9rq6d7l1fob.apps.googleusercontent.com"
            onSuccess={this.responseGoogle}
            buttonText="Login to retrieve token"
            isSignedIn={this.state.loggedIn}
          /> }
          <br /><br />
        </div>
        { this.state.loggedIn ? <CopyToClipboard text={this.state.tokenId}
          onCopy={() => alert("The token has been copied.")}>
          <button>Copy token to clipboard</button>
        </CopyToClipboard> : null }
        { this.state.signedOut ? 'You have been signed out.' : null }
      </div>
    );
  }
}