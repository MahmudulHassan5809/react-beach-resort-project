import React from 'react';
import PropTypes from 'prop-types';


import Room from './Room';
import Title from '../layout/Title'

const FeaturedRooms = ({featuredRooms}) => {



    return (
		<section className="featured-rooms">
			<Title title="Featured Rooms" />
			<div className="featured-rooms-center">
				{

					featuredRooms.map((room,i) => (
						<Room room={room} key={room.id} />
					))
				}
			</div>


		</section>
    );
};

FeaturedRooms.propTypes = {
	featuredRooms : PropTypes.array.isRequired,
};

export default FeaturedRooms;


