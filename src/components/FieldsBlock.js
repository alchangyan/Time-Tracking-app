import React, { Component } from 'react';
import propTypes from 'prop-types'
import Field from './Field';

import './css/FieldsBlock.css';


class FieldsBlock extends Component {

	getFilteredFields() {
		const fields = this.props.fields
		// const myData = [].concat(this.state.data)
		// if (this.props.category !== 0) {
		// 	fields.filter((el) => {
		// 		el.categoryId === this.props.category ? true : false;
		// 	})
		// }

		const direction = this.props.timeline

		return fields.sort((a, b) => {

						let x = new Date(a.date)
						x = x.getTime()
						let y = new Date(b.date)
						y = y.getTime()

						if ( x < y  ) return direction
						else if ( x = y && a.minutesTracked < b.minutesTracked ) return direction
						else return -(direction-1)

					}).filter((el) => {

						return el.categoryId === this.props.category || this.props.category === 0 ;

					})
	}

	handleEdit(key){
		this.props.onEdit(key)
	}
	handleSave(key, value){
		this.props.onSave(key, value)
	}

	render() {

		const fields = this.getFilteredFields() 
		const categories = this.props.categories 

		return (
			<div className="FieldsBlock" >
				{ fields.length > 0 &&
			          fields.map(({ id, date ,categoryId, notes, minutesTracked, editing = false }) => (
			            <Field
			              key={id}
			              dataId={id}
								    date={date}
								    categoryId={categories[categoryId-1].name}
								    notes={notes}
								    minutesTracked={minutesTracked}
								    editing={!editing ? false : true}
								    onEdit={ (key) => this.handleEdit(key)}
								    onSave={ (key, value) => this.handleSave(key, value)}
			            />
			          )) }

		        { fields.length === 0 && <p>No entries yet.</p> }	
			</div>
			)
	}
} 

export default FieldsBlock;