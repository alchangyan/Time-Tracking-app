import React, { Component } from 'react';
import './css/FilterBlock.css';

class FilterBlock extends Component {
	constructor(props){
		super(props)
		this.state = {
			addProcess: this.props.addProcess
		}
	}
	handleAddBlock() {	
		// console.log(props.onAdd.bind(this))
		if (!this.props.adding) {
			this.props.onAdd(true)
		}
		
	}

	handleChangeTimeline(event) {
		this.props.onTimelineFilterChange(event.target.value)
	}

	handleChangeCategory(event) {
		this.props.onCategoryFilterChange(event.target.value)
	}

	render() {
		return (
			<div className="FilterBlock" >
				{/*<div className="FilterAddButton" onClick={() => this.handleAddBlock()}>
					<span>Add New Entry</span>
				</div>*/}
				<select className="CategoryFilter" onChange={this.handleChangeCategory.bind(this) }>
					<option value="0">Show All Categories</option>
					{
						this.props.categories.map( (el) => {
							return <option key={el.id} value={el.id}>{el.name}</option>
						})
					}
				</select>
				<select className="TimelineFilter" onChange={this.handleChangeTimeline.bind(this) }>
					<option value="1">Newer First</option>
					<option value="0">Older First</option>
				</select>
			</div>
			)
	}
} 

export default FilterBlock;