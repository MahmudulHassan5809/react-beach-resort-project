import React,{ useEffect,Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { getSingleRoom } from '../../actions/resortActions';

import defaultBcg from '../../images/room-1.jpeg';
import Banner from '../layout/Banner';
import StyledHero from '../layout/StyledHero';

import _ from 'underscore';

const SingleRoom = ({getSingleRoom,match, resort : {singleRoom,loading} }) => {
	useEffect(() => {
		getSingleRoom(match.params.slug);
		// eslint-disable-next-line
    },[])
    if(!singleRoom || _.isEmpty(singleRoom)){
    	return <div className="error">
    		<h3>No Such Room Could Be Found...</h3>
            <Link to="/rooms" className="btn-primary">Back To Rooms</Link>
    	</div>
    }

    const {
        name,
        description,
        capacity,
        size,
        price,
        extras,
        breakfast,
        pets,
        images
    } = singleRoom;

    return (
       <Fragment>
           <StyledHero img={images[0] || defaultBcg}>
               <Banner title={`${name} room`}>
                   <Link to="/rooms" className="btn-primary">Back To Rooms</Link>
               </Banner>
           </StyledHero>
           <section className="single-room">
               <div className="single-room-images">
                    {images.map((item, index) => (
                      <img key={index} src={item} alt={name} />
                    ))}
              </div>
              <div className="single-room-info">
                    <article className="desc">
                    <h3>details</h3>
                    <p>{description}</p>
                    </article>
                    <article className="info">
                    <h3>info</h3>
                    <h6>price : ${price}</h6>
                    <h6>size : {size} SQFT</h6>
                    <h6>
                    max capacity :
                    {capacity > 1 ? `${capacity} people` : `${capacity} person`}
                    </h6>
                    <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
                    <h6>{breakfast && "free breakfast included"}</h6>
                    </article>
              </div>
        </section>
        <section className="room-extras">
            <h6>extras </h6>
            <ul className="extras">
            {extras.map((item, index) => (
              <li key={index}>- {item}</li>
            ))}
            </ul>
        </section>
       </Fragment>
    );
};


SingleRoom.propTypes = {
	getSingleRoom : PropTypes.func.isRequired,
	resort : PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    resort: state.resort
});

export default connect(mapStateToProps,{getSingleRoom})(SingleRoom);
