import React, {Component} from 'react';
import Table from './Table'
import Form from './Form'
class App extends Component {
	state = {
		characters : []
	};

	removeCharacter = index => {
		const {characters} = this.state
		this.setState({
			characters: characters.filter((character,i) => {
				return i !== index
			}),
		});
	}

	handleSubmit = character => {
		this.setState({
			characters : [...this.state.characters, character]
		});
	}

	render() {

		/*const characters = [
			{
				name: 'Charlie',
				job: 'Janitor'
			},
			{
				name : 'Mac',
				job:'Bouncer'
			},
			{
				name : 'Dee',
				job : 'Aspiring actress'
			},
			{
				name :'Dennis',
				job: 'Bartender'
			}
		]*/
		const {characters} = this.state
		return(
			<div className = 'container'>
				<h4>Add a character with name and job to the table.</h4>
				<Table 
					characterData = {characters} 
					removeCharacter = {this.removeCharacter} />
				<h3>Add New</h3>
				<Form handleSubmit = {this.handleSubmit} />
			</div>
		);
	}
}

export default App