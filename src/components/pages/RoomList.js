import React,{Fragment} from 'react';
import PropTypes from 'prop-types';

import Room from './Room';

const RoomList = ({rooms}) => {
    return (

    	<Fragment>
    		{ rooms.length === 0 ? (
				<div className="empty-search">
					<h3>unfortunately no rooms matched your search parameters</h3>
				</div>
	    	) : (
				<section className="roomslist">
					<div className="roomslist-center">
						{

							rooms.map((room,i) => (
								<Room room={room} key={room.id} />
							))
						}
					</div>
				</section>
	    	)}
    	</Fragment>

    );
};


RoomList.propTypes = {
	rooms : PropTypes.arrayOf(PropTypes.object).isRequired
}

export default RoomList;
