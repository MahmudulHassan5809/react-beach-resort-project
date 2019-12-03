import React,{ Fragment } from 'react';
import { Link } from 'react-router-dom';

import Hero from '../layout/Hero';
import Banner from '../layout/Banner';
import RoomContainer from './RoomContainer';

const Rooms = () => {
    return (
    	<Fragment>
    		<Hero hero="roomsHero">
	        	<Banner title="Our Rooms">
					<Link to="/" className="btn-primary">Home</Link>
				</Banner>
	        </Hero>
	        <RoomContainer />
    	</Fragment>

    );
};



export default Rooms;
