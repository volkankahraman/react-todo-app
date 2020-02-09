let React = require('react');
let ReactDOM = require('react-dom');
require('./css/index.css');
import { Router, Route, browserHistory, Link } from 'react-router';
const TodoItem = require('./todoItem');
const AddItem = require('./addItem');
const About = require('./about');

const App = React.createClass({
	render: function() {
		return (
			<Router history={browserHistory}>
				<Route path={'/'} component={TodoComponent} />
				<Route path={'/about'} component={About} />
			</Router>
		);
	}
});
//Create component
let TodoComponent = React.createClass({
	getInitialState: function() {
		return {
			todos: [ 'wash up', 'take some milk', 'take a nap' ]
		};
	},
	render: function() {
		var todos = this.state.todos;
		todos = todos.map(
			function(item, index) {
				return <TodoItem item={item} key={index} onDelete={this.onDelete} />;
			}.bind(this)
		);
		return (
			<div id="todo-list">
				<p>Todos</p>
				<Link to="/about">About</Link>
				<p>{this.state.age}</p>
				<ul>{todos}</ul>
				<AddItem onAdd={this.onAdd} />
			</div>
		);
	}, //render
	onDelete: function(item) {
		var updatedTodos = this.state.todos.filter(function(val, index) {
			return item !== val;
		});
		this.setState({
			todos: updatedTodos
		});
	}, //onDelete
	onAdd: function(item) {
		let updatedTodos = this.state.todos;
		updatedTodos.push(item);
		this.setState({
			todos: updatedTodos
		});
	}
});

//put component into html page
ReactDOM.render(<App />, document.getElementById('todo-wrapper'));
