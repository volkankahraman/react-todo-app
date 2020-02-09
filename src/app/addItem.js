const React = require('react');
require('./css/addItem.css');

let AddItem = React.createClass({
	render: function() {
		return (
			<form id="add-todo" onSubmit={this.handleSubmit} ref="form">
				<input type="text" required ref="newTodo" />
				<input type="submit" value="Save" />
			</form>
		);
	}, //Render
	handleSubmit: function(e) {
		e.preventDefault();
		this.props.onAdd(this.refs.newTodo.value);
		this.refs.form.reset();
	}
});

module.exports = AddItem;
