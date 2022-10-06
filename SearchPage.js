import { Button } from '@material-ui/core';
import React from 'react';
import './SearchPage.css';
import SearchResult from './SearchResult.js';


function SearchPage() {
    return (
        <div className="searchPage">
           <div className="searchPage_info">
           <p>62 stays | 26 august to 30 | 2 guests | </p>
           <h1>Stays nearby</h1>
           <Button varient="outline">Type of place</Button>
           <Button varient="outline">Cancellation felexibility</Button>
           <Button varient="outline">Price</Button>
           <Button varient="outline">Rooms and beds</Button>
           <Button varient="outline">More filters</Button>



           </div>
           <SearchResult 
           img="https://specials-images.forbesimg.com/imageserve/5e05ae84e961e1000739fd8f/960x0.jpg?fit=scale"
           location="Private room in center of London"
               title="Stay at this spacious Edwardian House"
               description="3 guests · 2 bed · 1 bathroom"
               star={4.73}
               price="₹1000 / night"
               total="₹1200 total"
           />
           <SearchResult 
           img="https://a0.muscache.com/im/pictures/0196a031-00ed-42cf-a5b8-424e96ff9050.jpg?im_w=1200"
           location="Farm stay in Delhi"
               title="The barn - A Farm Cottage"
               description="2 guests · 1 bedroom · 1 bed · 1.5 bathrooms"
               star={4.93}
               price="₹3322 / night"
               total="₹3999 total"
           />

<SearchResult 
           img="https://a0.muscache.com/im/pictures/fbe721b9-7935-4af5-8bb7-cbbc407e0080.jpg?im_w=720"
           location="Farm stay in versist"
               title="Himalayan Woodpecker - A Truly Himalayan Stay"
               description="3 guests · 1 bedroom · 1 bed · 1 bathroom"
               star={3.73}
               price="₹721 / night"
               total="₹999 total"
           />

<SearchResult 
           img="https://a0.muscache.com/im/pictures/7c6b41a5-9a03-421f-a775-5d8e23446d8c.jpg?im_w=1200"
           location="Private room in center of London"
               title="The Barn - A farm cottage by the horses"
               description="2 guests · 1 bed · 1 bathroom"
               star={4.83}
               price="₹6500 / night"
               total="₹7850 total"
           />

<SearchResult 
           img="https://a0.muscache.com/im/pictures/miso/Hosting-48617245/original/a972672a-c950-4069-b607-88c6e7a934aa.jpeg?im_w=1200"
           location="Dome house in Jari"
               title="A Cozy Dome & Attic in Parvati Valley | Itsy Bitsy"
               description="4 guests · 1 bedroom · 2 beds · 1.5 bathrooms"
               star={2.93}
               price="₹6800 / night"
               total="₹7500 total"
           />
           
           

        </div>
    )
}

export default SearchPage;
