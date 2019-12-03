import {
	GET_ROOMS,
	FEATURED_ROOMS,
	SET_LOADING,
	SET_SINGLE_ROOM,
	FILTER_ROOMS,
	SET_FILTERS
} from './types';


import items from '../data';


// get data
export const getData =  () => dispatch => {
	dispatch(setLoading());
	let rooms = items.map(item => {
		let id = item.sys.id;
		let images = item.fields.images.map(image =>
			image.fields.file.url);
		let room = { ...item.fields,images,id};
		return room;
	});

	let maxPrice = Math.max(...rooms.map(item => item.price));
	let maxSize = Math.max(...rooms.map(item => item.size));
	dispatch({
		type: GET_ROOMS,
		payload: {
			rooms,
			price: maxPrice,
			maxPrice,
			maxSize
		}
	});
	dispatch(setFeaturedRooms(rooms));
};

// set FeaturedRooms
export const setFeaturedRooms = (rooms) => dispatch => {
	dispatch(setLoading());
	let featuredRooms = rooms.filter(room => room.featured === true);
	dispatch({
		type: FEATURED_ROOMS,
		payload: featuredRooms
	});
};

// set single room
export const getSingleRoom = (slug) => dispatch => {
	dispatch(setLoading());
	dispatch(getData());
	dispatch({
		type: SET_SINGLE_ROOM,
		payload: slug
	});
};




// filter rooms
export const setFilters = (name,value) => dispatch => {

	dispatch({
		type: SET_FILTERS,
		payload: {
			name,
			value
		}
	});
	dispatch(filterRooms());


}


export const filterRooms = () => dispatch => {
	dispatch({
		type: FILTER_ROOMS
	})
}

// set loaidng to true
export const setLoading = () => {
	return {
		type: SET_LOADING
	}
};



