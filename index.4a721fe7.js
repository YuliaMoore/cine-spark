!function(){function e(e){return e&&e.__esModule?e.default:e}function t(e,t,r,a){Object.defineProperty(e,t,{get:r,set:a,enumerable:!0,configurable:!0})}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},n={},o=r.parcelRequireef31;null==o&&((o=function(e){if(e in a)return a[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return a[e]=r,t.call(r.exports,r,r.exports),r.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){n[e]=t},r.parcelRequireef31=o),o.register("gVa74",(function(t,r){var a,n,i=o("bpxeT"),c=o("2TvXO"),s=o("dLu6O"),l=o("1149W"),u=o("aoF6d"),d=o("kkjC6"),f=o("leg0y"),h=o("2CLlm"),v=o("3uYFp"),p=o("kVTHz"),g=new(0,s.MoviesAPI),m={container:document.querySelector(".hero-description"),hero:document.querySelector(".hero")};function S(){"true"===localStorage.getItem("whitemode")?(a=e(f),n=e(v)):(a=e(d),n=e(h))}function b(){return(b=e(i)(e(c).mark((function t(){var r,a;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.getTrendMoviesDay();case 3:r=e.sent,a=Math.floor(Math.random()*r.results.length),y(r.results[a]),(0,u.getFilmOfDayId)(r.results[a].id),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),w();case 12:case"end":return e.stop()}}),t,null,[[0,9]])})))).apply(this,arguments)}function y(e){var t=e.backdrop_path,r=e.title,a=e.overview,n=e.vote_average,o="https://image.tmdb.org/t/p/original".concat(t);m.container.innerHTML='<h2 class="hero-title">'.concat(r,"</h2><div class='hero-vote'>").concat((0,l.getStarsVote)(n),'</div><p class="hero-text hero-text-API">').concat(a,'</p>\n      <button type="button" class="btn hero-btn">Watch trailer</button>'),document.querySelector(".hero-btn").addEventListener("click",u.onOpenHeroModal),H(o),document.querySelector(".switch__input").addEventListener("click",(function(){S(),H(o)}))}function w(){m.container.innerHTML='<h2 class="hero-title">Let’s Make Your Own Cinema</h2><p class="hero-text">Is a guide to creating a personalized movie theater experience. You\'ll need a projector, screen, and speakers.<span class="hero-text-more">Decorate your space, choose your films, and stock up on snacks for the full experience.</span></p><a href="../catalog.html"" class="btn hero-btn">Get Started</a>',H(e(p)),document.querySelector(".switch__input").addEventListener("click",(function(){S(),H(e(p))}))}function H(e){window.matchMedia("(min-width: 1280px)").matches?m.hero.style.backgroundImage="url('".concat(a,"'), url('").concat(e,"')"):window.matchMedia("(min-width: 768px)").matches?m.hero.style.backgroundImage="url('".concat(n,"'), url('").concat(e,"')"):m.hero.style.backgroundImage="linear-gradient(\n      87.8deg,\n      #0e0e0e 15.61%,\n      rgba(14, 14, 14, 0) 60.39%\n    ), url('".concat(e,"')"),window.addEventListener("resize",(function(t){var r=t.currentTarget.innerWidth;r>=1280?m.hero.style.backgroundImage="url('".concat(a,"'), url('").concat(e,"')"):r>=768?m.hero.style.backgroundImage="url('".concat(n,"'), url('").concat(e,"')"):r<768&&(m.hero.style.backgroundImage="linear-gradient(\n      87.8deg,\n      #0e0e0e 15.61%,\n      rgba(14, 14, 14, 0) 60.39%\n    ), url('".concat(e,"')"))}))}S(),function(){b.apply(this,arguments)}()})),o.register("1149W",(function(e,r){function a(e){return e>=9.5?n([{firstStar:"active",secondStar:"active",thirdStar:"active",fourthStar:"active",fifthStar:"active"}]):e>=8.5?n([{firstStar:"active",secondStar:"active",thirdStar:"active",fourthStar:"active",fifthStar:"activehalf"}]):e>=7.5?n([{firstStar:"active",secondStar:"active",thirdStar:"active",fourthStar:"active",fifthStar:"noactive"}]):e>=6.5?n([{firstStar:"active",secondStar:"active",thirdStar:"active",fourthStar:"activehalf",fifthStar:"noactive"}]):e>=5.5?n([{firstStar:"active",secondStar:"active",thirdStar:"active",fourthStar:"noactive",fifthStar:"noactive"}]):e>=4.5?n([{firstStar:"active",secondStar:"active",thirdStar:"activehalf",fourthStar:"noactive",fifthStar:"noactive"}]):e>=3.5?n([{firstStar:"active",secondStar:"active",thirdStar:"noactive",fourthStar:"noactive",fifthStar:"noactive"}]):e>=2.5?n([{firstStar:"active",secondStar:"activehalf",thirdStar:"noactive",fourthStar:"noactive",fifthStar:"noactive"}]):e<1.5?n([{firstStar:"activehalf",secondStar:"noactive",thirdStar:"noactive",fourthStar:"noactive",fifthStar:"noactive"}]):"Помилка: проблема у файлі catalog-rating-get.js"}function n(e){return e.map((function(e){var t=e.firstStar,r=e.secondStar,a=e.thirdStar,n=e.fourthStar,o=e.fifthStar;return'\n      <ul class="hero-vote-list">\n        <li class="hero-vote-item--'.concat(t,'"></li>\n        <li class="hero-vote-item--').concat(r,'"></li>\n        <li class="hero-vote-item--').concat(a,'"></li>\n        <li class="hero-vote-item--').concat(n,'"></li>\n        <li class="hero-vote-item--').concat(o,'"></li>\n      </ul>\n          ')})).join("")}t(e.exports,"getStarsVote",(function(){return a}))})),o.register("aoF6d",(function(r,a){t(r.exports,"onOpenHeroModal",(function(){return f})),t(r.exports,"getFilmOfDayId",(function(){return p}));var n=o("bpxeT"),i=o("2TvXO"),c=o("dLu6O"),s=o("9TgKK"),l={heroModal:document.querySelector(".hero-modal"),overlay:document.querySelector(".hero-overlay"),modalContainer:document.querySelector(".hero-modal-container"),closeBtn:document.querySelector(".hero-close-btn")};l.closeBtn.addEventListener("click",h),l.overlay.addEventListener("click",(function(e){e.target===e.currentTarget&&h()}));var u,d=new(0,c.MoviesAPI);function f(){""===l.modalContainer.innerHTML&&g(u),window.addEventListener("keydown",v),l.heroModal.classList.add("active"),l.overlay.classList.add("active")}function h(){window.removeEventListener("keydown",v),l.heroModal.classList.remove("active"),l.overlay.classList.remove("active"),l.modalContainer.innerHTML=""}function v(e){"Escape"===e.code&&h()}function p(e){u=e,g(e)}function g(e){return m.apply(this,arguments)}function m(){return(m=e(n)(e(i).mark((function t(r){return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.getFilmVideo(r);case 3:S(e.sent.results),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),b();case 10:case"end":return e.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function S(e){var t,r,a=e.find((function(e){return"Trailer"===e.type}));a?(t=a.key,r='<iframe class=\'player\'\n        width="100%"\n        height="100%"\n        src="https://www.youtube.com/embed/'.concat(t,'"\n        title="YouTube video player"\n        frameborder="0"\n        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"\n        allowfullscreen\n      ></iframe>'),l.modalContainer.innerHTML=r):b()}function b(){var t='<div class="hero-modal-box">\n      <p class="hero-modal-text">OOPS...</p>\n      <p class="hero-modal-text">We are very sorry!</p>\n      <p class="hero-modal-text">But we couldn’t find the trailer.</p>\n    </div>\n    <img class="hero-modal-img" src="'.concat(e(s),'" alt="Cinema" />\n  </div>');l.modalContainer.innerHTML=t}})),o.register("9TgKK",(function(e,t){e.exports=o("aNJCr").getBundleURL("a2sOH")+o("iE7OH").resolve("a4PEZ")})),o.register("kkjC6",(function(e,t){e.exports=o("aNJCr").getBundleURL("a2sOH")+o("iE7OH").resolve("12hga")})),o.register("leg0y",(function(e,t){e.exports=o("aNJCr").getBundleURL("a2sOH")+o("iE7OH").resolve("8Asy5")})),o.register("2CLlm",(function(e,t){e.exports=o("aNJCr").getBundleURL("a2sOH")+o("iE7OH").resolve("Zgbu9")})),o.register("3uYFp",(function(e,t){e.exports=o("aNJCr").getBundleURL("a2sOH")+o("iE7OH").resolve("d6Lnd")})),o.register("kVTHz",(function(e,t){e.exports=o("aNJCr").getBundleURL("a2sOH")+o("iE7OH").resolve("bNgTm")})),o("iE7OH").register(JSON.parse('{"a2sOH":"index.4a721fe7.js","a4PEZ":"error.3424b9df.png","12hga":"subtract_desktop_dark.73ee6931.png","8Asy5":"subtract-desktop-ligth.6e4f549b.png","Zgbu9":"subtract-tablet-dark.926abdc2.png","d6Lnd":"subtract-tablet-ligth.aefe61d5.png","bNgTm":"home_desktop.83972603.jpg","ebom3":"my-library.15798e30.js"}')),o("gVa74")}();
//# sourceMappingURL=index.4a721fe7.js.map
