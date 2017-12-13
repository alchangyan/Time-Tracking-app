import React, { Component } from 'react';
import './css/Field.css';

class Field extends Component {

	calculateTime(minutes){
		let result = [];
		if (minutes > 60*24 ) {
			result[0]  = Math.floor(minutes/24) + ' Day(s)'
			minutes = minutes%24
		}
		if (minutes > 60 ) {
			result[1] = Math.floor(minutes/60) + ' Hour(s)'
			minutes = minutes%60
		}
		result[2] = minutes + ' Minute(s)'
		result = result.join(' ')
		return result;
	}

	handleEdit(event) {
		this.props.onEdit(this.props.dataId)
		let textarea = event.target.nextSibling
		
		setTimeout(function() {
			textarea.focus()
		},30)
	}
	handleSave(event) {
		this.props.onSave(this.props.dataId, event.target.previousSibling.value )
	}

	render(){
		const textEditStyles = {
			display: 'none'
		}
		const textareaEditStyles = {
			display: 'block'
		}
		const btnEditStyles = {
			display: 'inline-block'
		}
		return(
			<div className="Field">
				<div className="TrackingPart"><strong>{this.calculateTime(this.props.minutesTracked)}</strong></div>
				<div className="DatePart"><strong>{this.props.date}</strong></div>
				<div className="CategoryPart"><em>{this.props.categoryId}</em></div>
				<div className="TextPart" style={ this.props.editing ? textEditStyles : null } onClick={this.handleEdit.bind(this)}>{this.props.notes}</div>
				<textarea className="TextareaForEdit" defaultValue={this.props.notes} style={ this.props.editing ? textareaEditStyles : null } ></textarea>
				<div className="SaveBtn" style={ this.props.editing ? btnEditStyles : null } onClick={this.handleSave.bind(this)} >Save</div>
			</div>
			)
	}
}
export default Field