import React,{ useState } from 'react';

import { FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa';

import Title from './Title';

const Services = () => {
	const [services] = useState([
		{
			icon: <FaCocktail />,
			title: "Free Cocktails",
			info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium at ipsum amet, saepe illum sunt voluptatem suscipit quis non provident maiores asperiores repellat consequuntur minus ab corrupti explicabo. Totam, ad.'
		},
		{
			icon: <FaHiking />,
			title: "Endless Hiking",
			info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium at ipsum amet, saepe illum sunt voluptatem suscipit quis non provident maiores asperiores repellat consequuntur minus ab corrupti explicabo. Totam, ad.'
		},
		{
			icon: <FaShuttleVan />,
			title: "Free Shuttle",
			info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium at ipsum amet, saepe illum sunt voluptatem suscipit quis non provident maiores asperiores repellat consequuntur minus ab corrupti explicabo. Totam, ad.'
		},
		{
			icon: <FaBeer />,
			title: "Strongest Beer",
			info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium at ipsum amet, saepe illum sunt voluptatem suscipit quis non provident maiores asperiores repellat consequuntur minus ab corrupti explicabo. Totam, ad.'
		}
	]);
    return (
		<section className="services">
			<Title title="Services" />
			<div className="services-center">
				{services.map((item,index) => {
					return <article key={index} className="service">
						<span>{item.icon}</span>
						<h6>{item.title}</h6>
						<p>
							{item.info}
						</p>
					</article>
				})}
			</div>
		</section>
    );
};



export default Services;
