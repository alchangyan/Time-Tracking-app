import React, { Component } from 'react';
// import propTypes from 'prop-types';
import FilterBlock from './FilterBlock';
import FieldsBlock from './FieldsBlock';
import PaginationBlock from './PaginationBlock';
import { fetchEntries } from '../apiEntries';

import './css/App.css';

const CATEGORIES = [
  {
    id: 1,
    name: 'Feeding my cat',
  },
  {
    id: 2,
    name: 'Sleeping',
  },
  {
    id: 3,
    name: 'Learning React',
  }
]

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			entries: [],
			isLoading: true,
			isAdding: false,
			timeline: true,
			category: 0
		};

		this.handleAdd = this.handleAdd.bind(this);
		this.handleTimelineFilter = this.handleTimelineFilter.bind(this);
		this.handleCategoryFilter = this.handleCategoryFilter.bind(this);
		this.handleEdit = this.handleEdit.bind(this);
		this.handleSave = this.handleSave.bind(this);
	}

	componentDidMount() {
		fetchEntries().then(entries => {
			this.setState({
				entries,
				isLoading: false
			});
		});
	}

	handleTimelineFilter( timeline ){
		timeline === "1" ? timeline = true : timeline = false
		console.log(timeline)
		this.setState({
				timeline
			})
	}

	handleCategoryFilter( category ){
		this.setState({
				category
			})
	}

	handleAdd( toAdd = false ){
		if ( toAdd ) {
			let isAdding = true
			let currentEntryState = this.state.entries

			let date = new Date()
			let fullDate = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + (date.getDate() + 1) 
			let entry = {
				id: currentEntryState[currentEntryState.length - 1]['id'] + 1 ,
				date: fullDate ,
			    categoryId: 1,
			    notes: null,
			    minutesTracked: 0
			}

			let entries = currentEntryState
			entries.push(entry)
			this.setState({
				entries,
				isAdding
			},
				console.log(this.state.entries) 
			);
		}
	}
	handleEdit( key ){
		console.log(key)
		let entries = this.state.entries
		entries.map( (el) => el.id === key ? el.editing = true : el.editing = false )
		this.setState({
			entries
		})
	}

	handleSave( key , value ){
		console.log(key)
		console.log('value:'+value)
		let entries = this.state.entries
		entries.map( (el) => {
			if(el.id === key) {
				el.notes = value
				el.editing = false
			}
		})
		this.setState({
			entries
		})
	}

	render() {
		// const entries = this.state.entries
		return (
		  <div className="AppBlock">
		  	<FilterBlock 
		  		categories={CATEGORIES}
		  		adding={this.state.isAdding} 
		  		onAdd={ (status) => this.handleAdd(status) }
		  		onTimelineFilterChange={ (status) => this.handleTimelineFilter(status) }
		  		onCategoryFilterChange={ (category) => this.handleCategoryFilter(category) }
	  		/>
		  	<FieldsBlock
		  		categories={CATEGORIES}
		  		fields={this.state.entries}
		  		timeline={this.state.timeline}
		  		category={this.state.category*1}
		  		onEdit={ (key) => this.handleEdit(key)}
		  		onSave={ (key, value) => this.handleSave(key, value)}
	  		/>
		  	<PaginationBlock />
		  </div>
		);
	}
}

export default App;
