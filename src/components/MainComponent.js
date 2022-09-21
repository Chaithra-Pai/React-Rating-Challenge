import { AverageRating } from "./AverageRating";
import { Rating } from "./Rating";
import RatingsList from "./RatingsList";


export default function MainWrapper() {
  const ratings = [
    { 
        "name" : "Chaithra Pai",
        "content" : "Awesome Thing!",
        "rate" : 3
    },
    { 
        "name" : "Keille Mccormick",
        "content" : "The best thing till now!",
        "rate" : 5
    }   ,
    { 
      "name" : "James Williams",
      "content" : "Worth buying!",
      "rate" : 4
    },
    { 
      "name" : "Keille Mccormick",
      "content" : "Good!",
      "rate" : 2
    }  
  ];

  return (
    <div>
      <div className="heading">Rating:</div>
      <Rating name="Keisha Holmes" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at urna non lacus molestie ultrices. Vestibulum vitae velit risus. Mauris." rate={3} />
      <div className="heading">AverageRating:</div>
      <AverageRating ratings={ratings} />
      <div className="heading">RatingsList:</div>
      <RatingsList ratings={ratings}/>
    </div>
  );
  
}
