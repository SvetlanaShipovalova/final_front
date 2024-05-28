import { Routes, Route, Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
// Import the pages
import Home from "./Components/Home"
import About from "./Components/About"

// Import css
import "./App.scss"

const App = () => {

	return (
		<>
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="books" element={<About />} />
			</Routes>

			<div className="header">
				<a name="title"></a>
				<div className="container">
					<h1 className="logo">Книжник</h1>
					<nav>
						<ul>
							<li><Link to="/">Об авторе </Link></li>
							<li><Link to="books">Книги</Link></li>
						</ul>
					</nav>
				</div>
			</div>

		</>
	);
};

export default App;