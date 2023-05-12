export function getStarsRating(vote_average) {
  let vote = [];
  if (vote_average >= 9.5) {
    vote = renderStarsList([
      {
        firstStar: 'active',
        secondStar: 'active',
        thirdStar: 'active',
        fourthStar: 'active',
        fifthStar: 'active',
      },
    ]);
  } else if (vote_average >= 8.5) {
    vote = renderStarsList([
      {
        firstStar: 'active',
        secondStar: 'active',
        thirdStar: 'active',
        fourthStar: 'active',
        fifthStar: 'activehalf',
      },
    ]);
  } else if (vote_average >= 7.5) {
    vote = renderStarsList([
      {
        firstStar: 'active',
        secondStar: 'active',
        thirdStar: 'active',
        fourthStar: 'active',
        fifthStar: 'noactive',
      },
    ]);
  } else if (vote_average >= 6.5) {
    vote = renderStarsList([
      {
        firstStar: 'active',
        secondStar: 'active',
        thirdStar: 'active',
        fourthStar: 'activehalf',
        fifthStar: 'noactive',
      },
    ]);
  } else if (vote_average >= 5.5) {
    vote = renderStarsList([
      {
        firstStar: 'active',
        secondStar: 'active',
        thirdStar: 'active',
        fourthStar: 'noactive',
        fifthStar: 'noactive',
      },
    ]);
  } else if (vote_average >= 4.5) {
    vote = renderStarsList([
      {
        firstStar: 'active',
        secondStar: 'active',
        thirdStar: 'activehalf',
        fourthStar: 'noactive',
        fifthStar: 'noactive',
      },
    ]);
  } else if (vote_average >= 3.5) {
    vote = renderStarsList([
      {
        firstStar: 'active',
        secondStar: 'active',
        thirdStar: 'noactive',
        fourthStar: 'noactive',
        fifthStar: 'noactive',
      },
    ]);
  } else if (vote_average >= 2.5) {
    vote = renderStarsList([
      {
        firstStar: 'active',
        secondStar: 'activehalf',
        thirdStar: 'noactive',
        fourthStar: 'noactive',
        fifthStar: 'noactive',
      },
    ]);
  } else if (vote_average < 1.5) {
    vote = renderStarsList([
      {
        firstStar: 'activehalf',
        secondStar: 'noactive',
        thirdStar: 'noactive',
        fourthStar: 'noactive',
        fifthStar: 'noactive',
      },
    ]);
  } else {
    vote = 'Помилка: проблема у файлі catalog-rating-get.js';
  }
  // console.log(vote);
  return vote;
}

function renderStarsList(vote) {
  const starsMarkup = vote
    .map(({ firstStar, secondStar, thirdStar, fourthStar, fifthStar }) => {
      return `
      <ul class="catalog-list-rating__list">
        <li class="catalog-list-rating__list-item--${firstStar}"></li>
        <li class="catalog-list-rating__list-item--${secondStar}"></li>
        <li class="catalog-list-rating__list-item--${thirdStar}"></li>
        <li class="catalog-list-rating__list-item--${fourthStar}"></li>
        <li class="catalog-list-rating__list-item--${fifthStar}"></li>
      </ul>
          `;
    })
    .join('');
  // console.log(starsMarkup);
  return starsMarkup;
}
