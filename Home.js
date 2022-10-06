import React from 'react';
import './Home.css';
import Banner from './Banner';
import Card from './Card';


function Home(){
return (
    <div className="home">
        
        <Banner />
        <div className="home_section">

        <Card 
            src="https://a0.muscache.com/im/pictures/2f13349d-879d-43c6-83e3-8e5679291d53.jpg?im_w=480"
            title="Entire homes"
            description="Comfortable private places, with room for friends or family"
        />
        <Card 
src="https://a0.muscache.com/im/pictures/36f53e61-db8d-403c-9122-5b761c0e4264.jpg?im_w=480"
title="Online Experiences"
description="Unique activities we can do together, led by a worls of hosts."
        />
        <Card 
src="https://a0.muscache.com/im/pictures/7d82ca14-56e5-4465-8218-dcfa7d69b6ac.jpg?im_w=480"
title="Unique stays"
description="Spaces that are more than just a place to sleep."
        />

        </div>
        <div className="home_section">
            <Card src="https://a0.muscache.com/im/pictures/c47355d2-cf55-484d-98a2-6baa04537b79.jpg?im_w=720"
                title="3 Bedroom Flat in Bournemouth"
                description="Superhost with a stunning view of the beachside in sunny Bournemouth"
                price="₹3000/night"
            />
            <Card src="https://a0.muscache.com/im/pictures/a64afab5-d4a4-4881-bdd8-a195e204b925.jpg?im_w=720"
                title="Penthouse in Rudrapur"
                description="Enjoy the amazing sights of Rudrapur with this stunnung penthouse"
                price="₹5600/night"
            />
            <Card src="https://a0.muscache.com/im/pictures/a3782860-89d5-4c65-bd51-aa90cea7c8e6.jpg?im_w=720"
                title="1 Bedroom apartment"
                description="Superhost with great amenities and a fabulous shopping complex nearby"
                price="₹1300/night"
            />
        </div>
    </div>

)
}

export default Home;