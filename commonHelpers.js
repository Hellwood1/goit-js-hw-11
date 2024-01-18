import{S as u,i as d}from"./assets/vendor-46aac873.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=n(t);fetch(t.href,r)}})();const m="https://pixabay.com/api/?",f="41881692-6f4b64110761e7ecb64cd986a",h=document.querySelector(".form"),c=document.querySelector(".gallery"),g=document.querySelector(".loader"),l={key:f,q:"query",image_type:"photo",orientation:"horizontal",safesearch:!0},p=new u(".gallery a",{captionsData:"alt",captionDelay:250,close:!0,enableKeyboard:!0,docClose:!0}),i=o=>{g.style.display=o?"block":"none"},y=o=>{o.preventDefault();const e=o.target.elements.search.value.trim();if(!e){console.error("Please enter a valid search query.");return}w(),i(!0),l.q=encodeURIComponent(e);const n=new URLSearchParams(l),s=`${m}${n}`;b(s),o.currentTarget.reset()},b=o=>{i(!0),fetch(o).then(e=>{if(!e.ok)throw new Error("Something went wrong. Please try again later.");return e.json()}).then(({hits:e})=>{e.length===0?v():(L(e),p.refresh())}).catch(e=>{console.error(e.message)}).finally(()=>{i(!1)})},v=()=>{d.error({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#EF4040",messageColor:"#FFFFFF",maxWidth:300,timeout:2e3,progressBar:!1,position:"topRight",transitionIn:"bounceInRight",transitionOut:"fadeOutLeft",messageSize:12})},L=o=>{c.innerHTML=o.map(e=>`
    <li class='gallery-item'>
        <a href="${e.largeImageURL}">
        <img src="${e.webformatURL}" alt="${e.tags}" width='' height=''/>
        </a>
        <div class='info-container'>
          <div>
            <h3 class='card-title'>Likes</h3>
            <p class='info-amount'>${e.likes}</p>
          </div>
          <div>
            <h3 class='card-title'>Views</h3>
            <p class='info-amount'>${e.views}</p>
          </div>
          <div>
            <h3 class='card-title'>Comments</h3>
            <p class='info-amount'>${e.comments}</p>
          </div>
          <div>
            <h3 class='card-title'>Downloads</h3>
            <p class='info-amount'>${e.downloads}</p>
          </div>
        </div>
      </li>`).join("")},w=()=>{c.innerHTML=""};h.addEventListener("submit",y);
//# sourceMappingURL=commonHelpers.js.map
