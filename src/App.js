import React, {Component} from 'react';
import Table from './Table'
class App extends Component {
	state = {
		characters : [
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
		]
	}

	removeCharacter = index => {
		const {characters} = this.state
		this.setState({
			characters: characters.filter((characters,i) => {
				return i !== index
			}),
		})
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
				<Table characterData = {characters} removeCharacter = {this.removeCharacter} />
			</div>
		)
	}
}

export default App