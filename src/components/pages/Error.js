import React from 'react';
import { Link } from 'react-router-dom';

import Hero from '../layout/Hero';
import Banner from '../layout/Banner';

const Error = () => {
    return (
    	<Hero>
			<Banner title="404" subtitle="Page Not Found">
				<Link to="/" className="btn-primary">Home</Link>
			</Banner>
    	</Hero>
    );
};



export default Error;
