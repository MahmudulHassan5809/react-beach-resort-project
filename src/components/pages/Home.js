import React,{ Fragment,useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { getData } from '../../actions/resortActions';

import Hero from '../layout/Hero';
import Banner from '../layout/Banner';
import Services from '../layout/Services';
import FeaturedRooms from './FeaturedRooms';
import Loading from '../layout/Loading';



const Home = ({resort: {featuredRooms,loading},getData}) => {
	useEffect(() => {
		getData();
		// eslint-disable-next-line
    },[])
    return (
    	<Fragment>
    		<Hero>
				<Banner title="Luxurious Rooms" subtitle="Deluxe Rooms Starting at $299">
					<Link to="/rooms" className="btn-primary">Our Rooms</Link>
				</Banner>
			</Hero>
			<Services />
			{loading && featuredRooms.length > 0 ? (
				<Loading />
			) : (
				<FeaturedRooms featuredRooms={featuredRooms}/>
			)}

    	</Fragment>

    );
};

Home.propTypes = {
	resort : PropTypes.object.isRequired,
	getData : PropTypes.func.isRequired
};
const mapStateToProps = state => ({
    resort: state.resort
});

export default connect(mapStateToProps,{getData})(Home);
