import React from 'react';
import PropTypes from 'prop-types';

import Title from '../layout/Title';

import { connect } from 'react-redux';
import { setFilters } from '../../actions/resortActions';

const RoomFilter = ({resort:{type,capacity,price,minPrice,maxPrice,minSize,maxSize,breakFast,pets},rooms,setFilters}) => {



	const getUnique = (items,value) => {
		return [...new Set(items.map(item => item[value]))];
	}

	let types = getUnique(rooms,'type');
	types = ['all',...types];

	types = types.map((item,index) => {
		return <option key={index} value={item}>{item}</option>
	})

	let people = getUnique(rooms,'capacity');
	people = people.map((item,index) => {
		return <option key={index} value={item}>{item}</option>
	})



    const onChange = (e) => {
		const target = e.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = e.target.name;

		setFilters(name,value)

	}

    return (
		<section className="filter-container">
			<Title title="search rooms" />
			<form className="filter-form">

				<div className="form-group">
					<label htmlFor="type">room type</label>
					<select
					name="type"
					id="type"
					className="form-control"
					value={type}
					onChange={onChange}
					>
						{types}
					</select>
				</div>


				<div className="form-group">
					<label htmlFor="capacity">Guests</label>
					<select
					name="capacity"
					id="capacity"
					className="form-control"
					value={capacity}
					onChange={onChange}
					>
						{people}
					</select>
				</div>

				<div className="form-group">
					<label htmlFor="price">room price ${price}</label>
					<input
					type="range"
					name="price"
					min={minPrice}
					max={maxPrice}
					id="price"
					value={price}
					onChange={onChange}
					className="form-control"
					/>
       		 	</div>

       		 	<div className="form-group">
					<label htmlFor="price">room size </label>
					<div className="size-inputs">
						<input
						type="number"
						name="minSize"
						value={minSize}
						onChange={onChange}
						className="size-input"
						/>
						<input
						type="number"
						name="maxSize"
						value={maxSize}
						onChange={onChange}
						className="size-input"
						/>
					</div>
		        </div>



			</form>
		</section>
    );
};

RoomFilter.propTypes = {
	resort : PropTypes.object.isRequired,
	setFilters : PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    resort: state.resort
});

export default connect(mapStateToProps,{setFilters})(RoomFilter);
