import React from 'react'
import { getRating } from "./getRating";

export const AverageRating = ({ratings}) => {

    function getRate(item) {
      return item.rate;
    }

    function addRate(average, rate) {
      return average + rate;
    }
    
    const rateArray = ratings.map((getRate)) 
    const avgRating = Math.ceil(rateArray.reduce(addRate, 0) / ratings.length);
    const getAvgRating = getRating(avgRating);

    return (
      <div>
        {getAvgRating.map((item, index) => {
        return item === 1 ? <span key={index}>&#9733;</span> : <span key={index}>&#9734;</span>;
      })}
      </div>
    )
}
