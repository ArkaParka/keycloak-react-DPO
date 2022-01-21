import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Background from "../Background/Background";
import './Home.css';

class Home extends Component {
	render() {
		return (
			<div className="home-page">
				<Background />
				<Link to="/customers" className={"log-in-btn"}>Войти</Link>
				<div className="title">
					<h1>Получи дополнительное профессиональное образование</h1>
				</div>
			</div>
		)
	}
}

export default Home
