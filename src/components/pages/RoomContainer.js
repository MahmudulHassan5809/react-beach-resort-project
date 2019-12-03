import React,{useEffect,Fragment} from 'react';
import PropTypes from 'prop-types';



import RoomFilter from './RoomFilter';
import RoomList from './RoomList';
import Loading from '../layout/Loading';

import { connect } from 'react-redux';
import { getData } from '../../actions/resortActions';

const RoomContainer = ({resort:{rooms,sortedRooms,loading},getData}) => {
	useEffect(() => {
		getData();
		// eslint-disable-next-line
    },[])
    return (
    	<div>
    		{loading ? (
				<Loading />
    		) : (
				<Fragment>
					<RoomFilter rooms={rooms}/>
    				<RoomList rooms={sortedRooms}/>
				</Fragment>
    		)}

    	</div>
    );
};

RoomContainer.propTypes = {
	resort : PropTypes.object.isRequired,
	getData : PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    resort: state.resort
});

export default connect(mapStateToProps,{getData})(RoomContainer);
