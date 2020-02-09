const React = require('react');
import { Link } from 'react-router';
require('./css/addItem.css');

let About = React.createClass({
	render: function() {
		return (
			<div>
				<Link to="/">Home</Link>
				<h2>About</h2>
			</div>
		);
	} //Render
});

module.exports = About;
