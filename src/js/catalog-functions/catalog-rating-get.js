export function getStarsRating(vote_average) {
  let vote = [];
  if (vote_average >= 8.5) {
    vote = renderStarsList([
      {
        firstStar: 'active',
        secondStar: 'active',
        thirdStar: 'active',
        fourthStar: 'active',
        fifthStar: 'active',
      },
    ]);
  } else if (vote_average >= 6.5) {
    vote = renderStarsList([
      {
        firstStar: 'active',
        secondStar: 'active',
        thirdStar: 'active',
        fourthStar: 'active',
        fifthStar: 'noactive',
      },
    ]);
  } else if (vote_average >= 4.5) {
    vote = renderStarsList([
      {
        firstStar: 'active',
        secondStar: 'active',
        thirdStar: 'active',
        fourthStar: 'noactive',
        fifthStar: 'noactive',
      },
    ]);
  } else if (vote_average >= 2.5) {
    vote = renderStarsList([
      {
        firstStar: 'active',
        secondStar: 'active',
        thirdStar: 'noactive',
        fourthStar: 'noactive',
        fifthStar: 'noactive',
      },
    ]);
  } else if (vote_average < 2.5) {
    vote = renderStarsList([
      {
        firstStar: 'active',
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

// <ul class="catalog-list-rating__list">
//   <li class="catalog-list-rating__list-item">
//     <svg
//       width="13px"
//       height="13px"
//       class="catalog-list-rating__icon catalog-list-rating__icon--${firstStar}"
//     >
//       <use href="/src/images/symbol-defs.svg#icon-star"></use>
//     </svg>
//   </li>
//   <li class="catalog-list-rating__list-item">
//     <svg
//       width="13px"
//       height="13px"
//       class="catalog-list-rating__icon--${secondStar}"
//     >
//       <use href="/src/images/symbol-defs.svg#icon-star"></use>
//     </svg>
//   </li>
//   <li class="catalog-list-rating__list-item">
//     <svg
//       width="13px"
//       height="13px"
//       class="catalog-list-rating__icon--${thirdStar}"
//     >
//       <use href="/src/images/symbol-defs.svg#icon-star"></use>
//     </svg>
//   </li>
//   <li class="catalog-list-rating__list-item">
//     <svg
//       width="13px"
//       height="13px"
//       class="catalog-list-rating__icon--${fourthStar}"
//     >
//       <use href="/src/images/symbol-defs.svg#icon-star"></use>
//     </svg>
//   </li>
//   <li class="catalog-list-rating__list-item">
//     <svg
//       width="13px"
//       height="13px"
//       class="catalog-list-rating__icon--${fifthStar}"
//     >
//       <use href="/src/images/symbol-defs.svg#icon-star"></use>
//     </svg>
//   </li>
// </ul>;
