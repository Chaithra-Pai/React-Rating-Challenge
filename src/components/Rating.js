import { getRating } from "./getRating";

export const Rating = ({ name, content, rate }) => {
 
  const ratingArray = getRating(rate);

  return (
    <>
    <div className="ratings__item">  
        
      {ratingArray.map((item, index) => {
        return item === 1 ? <span key={index}>&#9733;</span> : <span key={index}>&#9734;</span>;
      })}
      {name&&<h3>{name}</h3>}
      {content&&<p>{content}</p>}
    </div>
    </>
  );
};
