export const getRating = (rate) => {

    let ratingNumber = rate;
    let ratingArray = [];

    for (let i = 0; i < 5; i++) {
      if (ratingNumber > 0) {
        ratingArray.push(1);
      } else {
        ratingArray.push(0);
      }
      ratingNumber--;
    }
    return ratingArray;

};