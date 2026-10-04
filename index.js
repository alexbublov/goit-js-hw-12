import{a as v,S as w,i as o}from"./assets/vendor-q4RyzBLX.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))f(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&f(n)}).observe(document,{childList:!0,subtree:!0});function i(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function f(r){if(r.ep)return;r.ep=!0;const s=i(r);fetch(r.href,s)}})();const $="57804854-ae4f724cdee310b4b8c1f8b5a",p=async(e,t=1)=>{const i=await v.get(`https://pixabay.com/api/?key=${$}&q=${e}&image_type=photo&orientation=horizontal&safesearch=true&page=${t}&per_page=15`);return{hits:i.data.hits,totalHits:i.data.totalHits}},u=document.querySelector(".gallery"),y=document.querySelector(".loader"),h=e=>`
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
    `,d=new w(".gallery a"),q=e=>{const t=e.map(h).join("");u.innerHTML=t,d.refresh()},S=e=>{const t=e.map(h).join("");u.insertAdjacentHTML("beforeend",t),d.refresh()},E=()=>{u.innerHTML="",d.refresh()},L=()=>{y.classList.remove("hidden")},b=()=>{y.classList.add("hidden")};o.settings({timeout:3e3,position:"topRight"});let l,a,c;const g=document.querySelector(".form"),m=document.querySelector(".load-more");g.addEventListener("submit",async e=>{if(e.preventDefault(),l=g.elements["search-text"].value.trim(),!!l){E(),L(),a=1;try{const t=await p(l,a);c=Math.ceil(t.totalHits/15),t.hits.length===0?o.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}):(q(t.hits),a<c&&m.classList.remove("hidden"))}catch(t){o.error({title:"Error",message:t.message})}finally{b()}}});m.addEventListener("click",async()=>{L();try{if(a++,a>c)o.error({title:"Error",message:"Sorry, there are no more images matching your search query!"}),m.classList.add("hidden");else{const t=await p(l,a);S(t.hits)}}catch(t){o.error({title:"Error",message:t.message})}finally{b()}const e=document.querySelector(".gallery-item");e&&scrollBy({top:e.getBoundingClientRect().height*2,behavior:"smooth"})});
//# sourceMappingURL=index.js.map
