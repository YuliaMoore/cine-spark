var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},t={},l=n.parcelRequireef31;null==l&&((l=function(n){if(n in i)return i[n].exports;if(n in t){var l=t[n];delete t[n];var e={id:n,exports:{}};return i[n]=e,l.call(e.exports,e,e.exports),e.exports}var s=new Error("Cannot find module '"+n+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(n,i){t[n]=i},n.parcelRequireef31=l),l("arrmy");var e=l("jtGqB"),s=l("horRP");function o({title:n,release_date:i,backdrop_path:t,poster_path:l,genre_ids:e,vote_average:o,popularity:a,vote_count:c,overview:r}){return`\n\n    <a href="#">\n    <div class="upcoming-img">\n\n     <picture class='upcoming-images'>\n        <source srcset="https://image.tmdb.org/t/p/original/${t}" media="(min-width: 1200px)" class='upcoming-images-desktop' />\n      <source srcset="https://image.tmdb.org/t/p/original/${t}" media="(min-width: 768px)" class='upcoming-images-tablet' />\n      <source srcset="https://image.tmdb.org/t/p/original/${l}" media="(min-width: 480px)" />\n      <img src="https://image.tmdb.org/t/p/original/${l}" alt="Movie Poster" class="upcoming-image"/>\n      \n    </picture>\n\n    </div>\n  </a>\n\n  <div class="upcoming-info-cover">\n    \n      <h2 class="upcoming-info-title">${n}</h2>\n\n    <div class="upcoming-info">\n\n      <div class="info-box-r">\n        <ul class="upcoming-info-list">\n          <li class="list-info">\n            <ul class="info-list">\n              <li class="upcoming-list__title">Release date</li>\n              <li class="upcoming-list__value-data">${i}</li>\n            </ul>\n          <li>\n\n          <li class="list-info">\n            <ul class="info-list">\n              <li class="upcoming-list__title">Vote / Votes</li>\n              <li class="upcoming-list__value">\n                <span class="upcoming-value-text averange">${o}</span>\n                  /\n                <span class="upcoming-value-text count">${c}</span>\n              </li>\n            </ul>\n          </li>\n        </div>\n\n        <div class="info-box-l">\n          <li class="list-info">\n            <ul class="info-list">\n              <li class="upcoming-list__title">Popularity</li>\n              <li class="upcoming-list__value">${a}</li>\n            </ul>\n          </li>\n\n          <li class="list-info">\n            <ul class="info-list">\n              <li class="upcoming-list__title">Genre</li>\n              <li class="upcoming-list__value">${(0,s.getGenres)(e)}</li>\n            <ul>\n          <li>\n        </ul>\n      </div>\n    </div>\n\n    <div class="movie-info">\n      <h2 class="info-title">About</h2>\n      <p class="movie-description">${r}</p>\n    </div>\n\n    <button type="button" class="upcoming-btn">Remind me</button>\n  </div>\n\n`}var a=l("2YGUk");var c=l("cuRSp"),r=l("7aCER"),u=(s=l("horRP"),l("1fLxG"));const d=new(0,e.MoviesAPI),g=document.querySelector(".weekly-list");(0,a.onScroll)(),(0,a.onToTopBtn)(),async function(){try{const i=(await d.getTrendMoviesWeeks()).results;let t=[];const l=n=>Math.floor(Math.random()*Math.floor(n));for(;3!=t.length;){let n=l(i.length);t.push(i[n]),t=t.filter(((n,i,t)=>t.indexOf(n)==i))}const e=t.reduce(((n,i)=>n+function({title:n,release_date:i,poster_path:t,genre_ids:l,vote_average:e}){return`\n    <li class='catalog-list__item'>\n        <a href='#' class='catalog-list__list-link'>\n            <div class='catalog-list__list-wrapper'>\n                <div class='catalog-list__info'>\n                    <h2 class='catalog-list__title'>${n}</h2>\n                    <div class='catalog-list__additional-info'>\n                        <p class='catalog-list__movie-type'>${(0,s.getGenres)(l)} | ${i.slice(0,4)}</p>\n                        <div class='catalog-list-rating'>${(0,u.getStarsRating)(e)}\n                        </div>\n                    </div>\n                </div>\n                <img\n                    src='https://image.tmdb.org/t/p/w500${t}'\n                    alt='${n}'\n                    width='280'\n                    height='406'\n                    class='catalog-list__image'\n                />\n            </div>\n        </a>\n    </li> \n`}(i)),"");n=e,g.innerHTML=n;document.querySelectorAll(".catalog-list__list-link").forEach(((n,i)=>{n.addEventListener("click",(n=>{n.preventDefault(),(0,c.openModalMovie)(t[i].id)}))}))}catch(n){console.log(n)}var n}();const p=document.querySelector(".upcoming-cover");!async function(){try{const i=(await d.getUpcomingFilms()).results;if(!i)return alert("Вибачте! Нових фільмів не знайдено/Sorry! No new movies found");let t=[];const l=n=>Math.floor(Math.random()*Math.floor(n));for(;1!=t.length;){let n=l(i.length);t.push(i[n]),t=t.filter(((n,i,t)=>t.indexOf(n)==i))}const e=t.reduce(((n,i)=>n+o(i)),"");n=e,p.innerHTML=n;const s=t[0],a=document.querySelector(".upcoming-btn");a.addEventListener("click",(function(){(0,r.addToLibrary)(s),a.textContent="Added",a.disabled=!0,a.classList.add("disabled")}))}catch(n){console.log(n)}var n}(),l("bTcpz"),l("8FnLx"),l("03v4M"),l("kyRuT");
//# sourceMappingURL=index.1d922a0e.js.map
