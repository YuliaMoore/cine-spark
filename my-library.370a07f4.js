function t(t,e,a,i){Object.defineProperty(t,e,{get:a,set:i,enumerable:!0,configurable:!0})}function e(t){return t&&t.__esModule?t.default:t}var a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},r={},s=a.parcelRequireef31;null==s&&((s=function(t){if(t in i)return i[t].exports;if(t in r){var e=r[t];delete r[t];var a={id:t,exports:{}};return i[t]=a,e.call(a.exports,a,a.exports),a.exports}var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(t,e){r[t]=e},a.parcelRequireef31=s),s.register("arrmy",(function(t,e){const a=document.querySelector(".switch__input");let i=localStorage.getItem("whitemode");const n=document.body;a.addEventListener("click",(function(){a.checked?(localStorage.setItem("whitemode","true"),n.classList.add("white-mode")):(localStorage.setItem("whitemode","false"),n.classList.remove("white-mode"))})),document.addEventListener("DOMContentLoaded",(function(){"true"===i?(a.checked=!0,n.classList.add("white-mode")):(a.checked=!1,n.classList.remove("white-mode"))}))})),s.register("bTcpz",(function(t,e){var a;"function"!=typeof(a=window.Element.prototype).matches&&(a.matches=a.msMatchesSelector||a.mozMatchesSelector||a.webkitMatchesSelector||function(t){for(let e=this,a=(e.document||e.ownerDocument).querySelectorAll(t),i=0;a[i]&&a[i]!==e;)++i;return Boolean(o[n])}),"function"!=typeof a.closest&&(a.closest=function(t){for(let e=this;e&&1===e.nodeType;){if(e.matches(t))return e;e=e.parentNode}return null}),document.addEventListener("DOMContentLoaded",(function(){let t=document.querySelectorAll(".js-open-modal"),e=document.querySelector(".js-overlay-modal"),a=document.querySelectorAll(".js-modal-close");t.forEach((function(t){t.addEventListener("click",(function(t){t.preventDefault();let a=this.getAttribute("data-modal");document.querySelector('.modal[data-modal="'+a+'"]').classList.add("active"),e.classList.add("active")}))})),a.forEach((function(t){t.addEventListener("click",(function(t){this.closest(".modal").classList.remove("active"),e.classList.remove("active")}))})),document.body.addEventListener("keyup",(function(t){if(27==t.keyCode){let t=document.querySelector(".modal.active");t&&t.classList.remove("active");let e=document.querySelector(".overlay.active");e&&e.classList.remove("active")}}),!1),e.addEventListener("click",(function(){document.querySelector(".modal.active").classList.remove("active"),this.classList.remove("active")}))}))})),s.register("8FnLx",(function(t,e){(()=>{const t={openMenuBtn:document.querySelector(".menu-open-btn"),menu:document.querySelector(".mob-menu"),body:document.querySelector("body")};function e(){t.menu.classList.toggle("is-hidden"),t.body.classList.toggle("no-scroll"),t.body.classList.toggle("has-backdrop")}t.openMenuBtn.addEventListener("click",e),t.body.addEventListener("click",(function(e){e.target.closest(".mob-menu")||e.target.closest(".menu-open-btn")||(t.menu.classList.add("is-hidden"),t.body.classList.remove("no-scroll"),t.body.classList.remove("has-backdrop"))})),document.addEventListener("keydown",(function(t){"Escape"===t.code&&e()}))})()})),s.register("2sH7u",(function(e,a){t(e.exports,"onRenderLibraryCards",(function(){return r}));var i=s("2YGUk"),n=s("cuRSp"),o=s("7TXbz");async function r(){const t=document.querySelector(".library-list");let e=JSON.parse(localStorage.getItem("libraryFilm"))||[];if(!(e.length>0))return t.innerHTML='<div class="container library-container-mistake">\n      <p class="library-empty__mistake">OOPS... <br> We are very sorry! <br> You don\'t have any movies at your library.</p>\n      <button class="btn btn-library" onclick="window.location.href=\'catalog.html\'"><a class="btn-library__link">Search movie</a></button>\n    </div>';{const a=await(0,o.getCatalogCards)(e);t.innerHTML=a;document.querySelectorAll(".catalog-list__list-link").forEach((t=>{t.addEventListener("click",(e=>{e.preventDefault(),(0,n.openModalMovie)(t.dataset.id)}))}))}}(0,i.onScroll)(),(0,i.onToTopBtn)(),r()})),s.register("2YGUk",(function(e,a){t(e.exports,"onScroll",(function(){return n})),t(e.exports,"onToTopBtn",(function(){return o}));const i=document.querySelector(".go-to-top");function n(){const t=window.pageYOffset;t>400&&i.classList.add("go-to-top--visible"),t<400&&i.classList.remove("go-to-top--visible")}function o(){window.pageYOffset>0&&window.scrollTo({top:0,left:0,behavior:"smooth"})}i.addEventListener("click",o),window.addEventListener("scroll",n)})),s.register("cuRSp",(function(a,i){t(a.exports,"openModalMovie",(function(){return f}));var n=s("1rJhf"),o=s("jtGqB"),r=s("7aCER"),l=s("cCmwW"),c=s("2sH7u"),d=s("19PIa");const m=document.querySelector(".modal-card"),u=document.createElement("div");async function f(t){const a=new(0,o.MoviesAPI);try{const i=await a.getMovieDetails(t);m.classList.add("modal-movie--show"),u.classList.add("backdrop--show"),document.body.classList.add("modal-open"),m.innerHTML=`\n     <svg class="close-btn js-modal-close" type="button">\n    <use href="${e(n)}#close-outline"></use>\n     </svg>\n      <div class="modal__card">\n      <div class="modal-card__wrapper">\n        <img class="modal-poster" src="https://image.tmdb.org/t/p/w500${i.data.poster_path}" alt="${i.data.title}" width="248" height="315">\n        <div class="modal-container__info">\n          <h2 class="modal-title">${i.data.original_title}</h2>\n          <div class="modal-container__details">\n  <ul class="modal-details__list list">\n    <li class="modal-details__item">Vote / Votes</li>\n    <li class="modal-details__item">Popularity</li>\n    <li class="modal-details__item">Genre</li>\n  </ul>\n  <ul class="modal-details__value-list list">\n    <li class="modal-details__value">\n      <span class="vote">${i.data.vote_average}</span>\n      <span class="slash">/</span>\n      <span class="vote">${i.data.vote_count}</span>\n    </li>\n    <li class="modal-details__value">${i.data.popularity}</li>\n    <li class="modal-details__value">${i.data.genres[0].name}</li>\n  </ul>\n</div>\n\n            <p class="modal-details__about">ABOUT</p>\n            <p class="modal-details__story">${i.data.overview}</p>\n          \n          <button class="btn-add-remove">Add to my library</button>\n          <button class="watch-btn-modal">Watch trailer</button>\n        </div>\n      </div>\n      </div>\n    `,function e(){const a=document.querySelector(".btn-add-remove"),n=i.data;(JSON.parse(localStorage.getItem("libraryFilm"))||[]).flat().some((t=>t.id===n.id))?(a.textContent="Remove from library",a.classList.add("remove"),a.addEventListener("click",(function(){(0,l.removeFromLibrary)(n.id),window.location.pathname.includes("my-library")&&(0,c.onRenderLibraryCards)(),e()}))):(a.textContent="Add to library",a.classList.remove("remove"),a.addEventListener("click",(function(){(0,r.addToLibrary)(n),window.location.pathname.includes("my-library")&&(0,c.onRenderLibraryCards)(),e()}))),document.querySelector(".watch-btn-modal").addEventListener("click",(function(){(0,d.getFilmOfDayId)(t),(0,d.onOpenHeroModal)()}))}();m.querySelector(".js-modal-close").addEventListener("click",v),u.addEventListener("click",v),document.addEventListener("keydown",(t=>{27===t.keyCode&&v()}))}catch(t){console.log(t)}}function v(){m.classList.remove("modal-movie--show"),m.innerHTML="",u.classList.remove("backdrop--show"),document.body.classList.remove("modal-open")}u.classList.add("modal-backdrop"),document.body.appendChild(u)})),s.register("1rJhf",(function(t,e){t.exports=new URL(s("kyEFX").resolve("9v6fF"),import.meta.url).toString()})),s.register("7aCER",(function(e,a){function i(t){let e=JSON.parse(localStorage.getItem("libraryFilm"))||[];e.flat().some((e=>e.id===t.id))||(e.push(t),localStorage.setItem("libraryFilm",JSON.stringify(e)))}t(e.exports,"addToLibrary",(function(){return i}))})),s.register("cCmwW",(function(e,a){function i(t){let e=JSON.parse(localStorage.getItem("libraryFilm"))||[];e=e.flat().filter((e=>e.id!==t)),localStorage.setItem("libraryFilm",JSON.stringify(e))}t(e.exports,"removeFromLibrary",(function(){return i}))})),s.register("7TXbz",(function(a,i){t(a.exports,"getCatalogCards",(function(){return l}));var n=s("horRP"),o=s("1fLxG"),r=s("fpijP");function l(t){return t.map((({title:t,genre_ids:a,genres:i,release_date:s,vote_average:l,poster_path:c,id:d})=>{c=c?`https://image.tmdb.org/t/p/w500${c}`:e(r);return`\n    <li class='catalog-list__item'>\n        <a href='#' class='catalog-list__list-link' data-id="${d}" data-modal="movie-card">\n            <div class='catalog-list__list-wrapper'>\n                <div class='catalog-list__info'>\n                    <h2 class='catalog-list__title'>${t}</h2>\n                    <div class='catalog-list__additional-info'>\n                        <p class='catalog-list__movie-type'>${Array.isArray(i)?i.slice(0,2).map((t=>t.name)).join(", "):(0,n.getGenres)(a)} | ${s.slice(0,4)}</p>\n                        <div class='catalog-list-rating'>${(0,o.getStarsRating)(l)}\n                        </div>\n                    </div>\n                </div>\n                <img\n                    src='${c}'\n                    alt='${t}'\n                    width='280'\n                    height='406'\n                    class='catalog-list__image'\n                />\n            </div>\n        </a>\n    </li> `})).join("")}})),s.register("horRP",(function(a,i){t(a.exports,"getGenres",(function(){return o}));var n=s("2j7ES");function o(t){return e(n).genres.filter((e=>t.includes(e.id))).slice(0,2).map((t=>t.name)).join(", ")}})),s.register("2j7ES",(function(t,e){t.exports=JSON.parse('{"genres":[{"id":28,"name":"Action"},{"id":12,"name":"Adventure"},{"id":16,"name":"Animation"},{"id":35,"name":"Comedy"},{"id":80,"name":"Crime"},{"id":99,"name":"Documentary"},{"id":18,"name":"Drama"},{"id":10751,"name":"Family"},{"id":14,"name":"Fantasy"},{"id":36,"name":"History"},{"id":27,"name":"Horror"},{"id":10402,"name":"Music"},{"id":9648,"name":"Mystery"},{"id":10749,"name":"Romance"},{"id":878,"name":"Science Fiction"},{"id":10770,"name":"TV Movie"},{"id":53,"name":"Thriller"},{"id":10752,"name":"War"},{"id":37,"name":"Western"}]}')})),s.register("1fLxG",(function(e,a){function i(t){let e=[];return e=t>=9.5?n([{firstStar:"active",secondStar:"active",thirdStar:"active",fourthStar:"active",fifthStar:"active"}]):t>=8.5?n([{firstStar:"active",secondStar:"active",thirdStar:"active",fourthStar:"active",fifthStar:"activehalf"}]):t>=7.5?n([{firstStar:"active",secondStar:"active",thirdStar:"active",fourthStar:"active",fifthStar:"noactive"}]):t>=6.5?n([{firstStar:"active",secondStar:"active",thirdStar:"active",fourthStar:"activehalf",fifthStar:"noactive"}]):t>=5.5?n([{firstStar:"active",secondStar:"active",thirdStar:"active",fourthStar:"noactive",fifthStar:"noactive"}]):t>=4.5?n([{firstStar:"active",secondStar:"active",thirdStar:"activehalf",fourthStar:"noactive",fifthStar:"noactive"}]):t>=3.5?n([{firstStar:"active",secondStar:"active",thirdStar:"noactive",fourthStar:"noactive",fifthStar:"noactive"}]):t>=2.5?n([{firstStar:"active",secondStar:"activehalf",thirdStar:"noactive",fourthStar:"noactive",fifthStar:"noactive"}]):t<1.5?n([{firstStar:"activehalf",secondStar:"noactive",thirdStar:"noactive",fourthStar:"noactive",fifthStar:"noactive"}]):"Помилка: проблема у файлі catalog-rating-get.js",e}function n(t){return t.map((({firstStar:t,secondStar:e,thirdStar:a,fourthStar:i,fifthStar:n})=>`\n      <ul class="catalog-list-rating__list">\n        <li class="catalog-list-rating__list-item--${t}"></li>\n        <li class="catalog-list-rating__list-item--${e}"></li>\n        <li class="catalog-list-rating__list-item--${a}"></li>\n        <li class="catalog-list-rating__list-item--${i}"></li>\n        <li class="catalog-list-rating__list-item--${n}"></li>\n      </ul>\n          `)).join("")}t(e.exports,"getStarsRating",(function(){return i}))})),s.register("fpijP",(function(t,e){t.exports=new URL(s("kyEFX").resolve("bLTxm"),import.meta.url).toString()})),s.register("03v4M",(function(t,e){})),s.register("kyRuT",(function(t,e){!function(){const t=document.querySelector(".films"),e=document.createElement("div");e.classList.add("loader"),e.textContent="Loading...",t.prepend(e),setTimeout((()=>e.remove()),400)}()})),s("kyEFX").register(JSON.parse('{"9uqmG":"my-library.370a07f4.js","9v6fF":"symbol-defs.2be55a3b.svg","bLTxm":"nophoto.d3be914e.jpg"}'));
//# sourceMappingURL=my-library.370a07f4.js.map
