import React from 'react';
import Navbar from './components/navbar.js';
import './App.css';
import { CornTimeLogo, ThomasProfile } from './assets'

function App() {
	return (
		<div className="content">
			<Navbar/>
			<div className="hero">
				<div class="row no-gutters">
					<div class="col-sm-5 col-md-7 offset-md-1" style={{top: "30vh"}}>
						<b style={{letterSpacing: "1px", color: "gray"}}>HELLO</b><br/>
						<span style={{fontWeight: "800", fontSize: "50px", letterSpacing: "-1px"}}>I'm Thomas</span><br/>
						<span style={{fontWeight: "500", fontSize: "25px", letterSpacing: "-1px", marginTop: "15px"}}>a computer science<br/>
						student<br/></span>
						<a href="mailto:thomas.boda@epitech.eu" type="button" className="btn btn-outline-dark" style={{marginTop: "40px", paddingTop: "15px", paddingBottom: "13px", paddingRight: "50px", paddingLeft: "50px"}}>HIRE ME</a>
					</div>
					<div class="col-6 col-md-4">
						<img src={ThomasProfile} style={{maxHeight: "100vh"}} alt="Thomas"></img>
					</div>
				</div>
			</div>
			<div className="brand d-inline-flex justify-content-center flex-row shadow-lg p-3 mb-5" style={{borderRadius: "10px"}}>
				<a href="https://corntime.io" className="p-2"><img src={CornTimeLogo} alt="Logo CornTime"/></a>
				<a href="https://fleepi.com" className="p-2" style={{textDecoration: 'none'}}><h1 style={{fontWeight: 600, color: "#2B9DFF", fontFamily: 'Montserrat Alternates'}}>FLEEPI</h1></a>
			</div>
		</div>
	);
}

export default App;