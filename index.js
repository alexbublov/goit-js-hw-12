import{a as w,S,i as a}from"./assets/vendor-q4RyzBLX.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))g(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&g(n)}).observe(document,{childList:!0,subtree:!0});function d(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function g(t){if(t.ep)return;t.ep=!0;const o=d(t);fetch(t.href,o)}})();const $="57804854-ae4f724cdee310b4b8c1f8b5a",p=async(e,r=1)=>(await w.get(`https://pixabay.com/api/?key=${$}&q=${e}&image_type=photo&orientation=horizontal&safesearch=true&page=${r}&per_page=15`)).data,m=document.querySelector(".gallery"),y=document.querySelector(".loader"),h=document.querySelector(".load-more"),L=e=>`
        <li class="gallery-item">
        <a href="${e.largeImageURL}">
            <img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}" title="${e.tags}" />
            <ul class="image-info">
                <li class="image-info-item"><p class="image-info-label">Likes</p>
                <p class="image-info-value">${e.likes}</p></li>
                <li class="image-info-item"><p class="image-info-label">Views</p>
                <p class="image-info-value">${e.views}</p></li>
                <li class="image-info-item"><p class="image-info-label">Comments</p>
                <p class="image-info-value">${e.comments}</p></li>
                <li class="image-info-item"><p class="image-info-label">Downloads</p>
                <p class="image-info-value">${e.downloads}</p></li>
            </ul>
        </a>
        </li>
    `,u=new S(".gallery a"),M=e=>{const r=e.map(L).join("");m.innerHTML=r,u.refresh()},E=e=>{const r=e.map(L).join("");m.insertAdjacentHTML("beforeend",r),u.refresh()},B=()=>{m.innerHTML="",u.refresh()},b=()=>{y.classList.remove("hidden")},v=()=>{y.classList.add("hidden")},q=()=>{h.classList.remove("hidden")},c=()=>{h.classList.add("hidden")};a.settings({timeout:3e3,position:"topRight"});let l,s,i;const f=document.querySelector(".form"),P=document.querySelector(".load-more");f.addEventListener("submit",async e=>{if(e.preventDefault(),c(),l=f.elements["search-text"].value.trim(),!!l){B(),b(),s=1;try{const r=await p(l,s);i=Math.ceil(r.totalHits/15),i===0?a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}):(M(r.hits),s<i?q():a.error({title:"Error",message:"Sorry, there are no more images matching your search query!"}))}catch(r){a.error({title:"Error",message:r.message})}finally{v()}}});P.addEventListener("click",async()=>{b(),s++,c();try{const r=await p(l,s);E(r.hits),console.log(s,i),s===i?a.error({title:"Error",message:"Sorry, there are no more images matching your search query!"}):q()}catch(r){c(),a.error({title:"Error",message:r.message})}finally{v()}const e=document.querySelector(".gallery-item");e&&scrollBy({top:e.getBoundingClientRect().height*2,behavior:"smooth"})});
//# sourceMappingURL=index.js.map
