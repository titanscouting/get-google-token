(this["webpackJsonpgoogle-api-testing-frontend"]=this["webpackJsonpgoogle-api-testing-frontend"]||[]).push([[0],{17:function(e,t,n){"use strict";n.r(t);var o=n(0),l=n.n(o),a=n(3),r=n.n(a),s=n(4),c=n(5),i=n(7),u=n(8),g=n(1),d=n(6),p=function(e){Object(u.a)(n,e);var t=Object(i.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).responseGoogle=function(t){e.setState({tokenId:t.tokenId,loggedIn:!0}),console.log(e.state.tokenId)},e.state={tokenId:""},e}return Object(c.a)(n,[{key:"render",value:function(){return l.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",height:"100vh"}},l.a.createElement("div",null,this.state.loggedIn?l.a.createElement(g.GoogleLogout,{clientId:"291863698243-4bp5d86k6mo5dk5ief9ve9rq6d7l1fob.apps.googleusercontent.com",buttonText:"Logout",onLogoutSuccess:this.responseGoogle}):l.a.createElement(g.GoogleLogin,{clientId:"291863698243-4bp5d86k6mo5dk5ief9ve9rq6d7l1fob.apps.googleusercontent.com",onSuccess:this.responseGoogle,buttonText:"Login to retrieve token",isSignedIn:this.state.loggedIn}),l.a.createElement("br",null),l.a.createElement("br",null)),this.state.loggedIn?l.a.createElement(d.CopyToClipboard,{text:this.state.tokenId,onCopy:function(){return alert("The token has been copied.")}},l.a.createElement("button",null,"Copy token to clipboard")):null)}}]),n}(o.Component);r.a.render(l.a.createElement("div",null,l.a.createElement("p",null,"v0.1.0"),l.a.createElement(p,null)),document.getElementById("root"))},9:function(e,t,n){e.exports=n(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.33fe96f2.chunk.js.map