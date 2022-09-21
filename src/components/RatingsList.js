import { AverageRating } from "./AverageRating";
import { Rating } from "./Rating";

export default function RatingsList({ ratings }) {

  return (
    <div className="ratings">
      <AverageRating ratings={ratings}/>
      {ratings.map((individualItem, index) => {
        return (  
            <Rating
              name={individualItem.name}
              content={individualItem.content}
              rate={individualItem.rate}
              key={index}
            />
        );
      })}
    </div>
  );
}