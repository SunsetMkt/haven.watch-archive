(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function i(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=i(s);fetch(s.href,a)}})();const l=document.getElementById("modal"),B=document.getElementById("modal-content");function I(e,t){l.style.display="flex",l.className="modal",t&&l.classList.add(t),B.innerHTML=`
        <p>${e}</p>
        <button id="close-modal" class="close-btn">
          OK
        </button>`,q()}function N(){I("This website is not optimized for mobile devices. Please view it on a computer for the best experience.")}function R(){I("Unusual activity detected on your account. Access has been restricted. Contact the Security Team immediately to resolve and restore privileges.","access-denied")}function O(){I("Incorrect username or password.")}function q(){const e=document.getElementById("close-modal");e&&e.addEventListener("click",()=>{l.style.display="none"}),window.addEventListener("click",t=>{t.target===l&&(l.style.display="none")})}function x(e){return e instanceof Date&&!isNaN(e.getTime())}function k(e){switch(e){case"Low":return"hazard-rating low";case"Moderate":return"hazard-rating moderate";case"High":return"hazard-rating high";default:return""}}function L(e){const t=document.getElementById("subject-list");t.innerHTML="",e.forEach(i=>{const n=document.createElement("li");n.classList.add("subject-item"),n.setAttribute("data-id",i.id);const s=k(i.hazardRating);n.innerHTML=`
              <div class="subject-title">#${i.id}</div>
              <div class="subject-details">
                <div class="subject-name">
                  <span class="field-label">Name:</span>
                  <span class="field-value"> ${i.name}</span>
                </div>
                <div class="subject-category">
                  <span class="field-label">Hazard Rating: </span>
                  <span class="field-value ${s}">${i.hazardRating}</span>
                </div>
              </div>
            `;const a=document.createElement("span");a.classList.add("viewing"),a.innerHTML='viewing <i class="material-icons">arrow_forward_ios</i>',n.addEventListener("click",function(){var p;U();const c=document.getElementById("main-content");i.description==="Access Denied"?X(n):(Q(i,c),n.classList.add("active"),(p=n.querySelector(".subject-title"))==null||p.append(a),document.querySelectorAll(".no-access").forEach(z=>{z.addEventListener("click",function(H){H.preventDefault(),R()})}))}),t.appendChild(n)})}function $(e){return[...E,...P(e-E.length)].sort((i,n)=>Number(i.id)-Number(n.id))}function U(){const e=document.getElementById("subject-list"),t=e.querySelector(".subject-item.active");t&&t.classList.remove("active");const i=e.querySelector(".viewing");i&&i.remove();const n=e.querySelector(".access-denied");n&&n.classList.remove("access-denied");const s=e.querySelector(".material-icons");s&&s.remove()}const E=[{id:"7514302971",name:"NDND",category:"Organic Life Forms",profileImageSrc:"/ndnd.jpg",species:"Extraterrestrial - Class C",hazardRating:"Low",gender:"Female",height:"157cm",acquisitionDate:"29 August 2024",description:`<p>The subject was located near their spacecraft in an unresponsive state on 29 August 2024. 
    Upon regaining consciousness, they exhibited signs of amnesia and confusion. 
    They claim to be the synthetic intelligence responsible for humanoid operations aboard the spacecraft 
    and state that they originate from Kepler 452b. 
    However, advanced diagnostic procedures, including computational capability assessments, 
    have found no evidence of artificial components or enhanced processing abilities typically associated 
    with AI systems.</p>
    <p>When questioned about Kepler-452b, the subject's responses have been inconsistent, and at times they were unable to provide answers, possibly due to memory loss or cognitive issues. Genetic analysis reveals a **92.5%** similarity to Earth humans, though not a complete match. The subject appears to have a minor ability to alter small physical traits, but no other special or dangerous capabilities have been identified.</p>
    <p>The subject has shown no signs of aggression and poses no threat. Their demeanor toward human personnel fluctuates, ranging from friendly and curious to indifferent or distant. The subject is currently undergoing a classified experimental treatment, designated <a href="#" class="no-access">Project-VIRSYN</a>, which began on 16 September 2024 to address their condition. </p>`},{id:"343548630",name:"BC",category:"Organic Life Forms",profileImageSrc:"/BCBCBC.jpg",species:"Extraterrestrial - Class A",hazardRating:"Low",gender:"Male",height:"175cm",acquisitionDate:"15 Dec 2022",description:`
  <p>The subject, an anomalous entity, was recovered near the wreckage of an unidentified spacecraft on Earth. According to its own account, it originates from a planet undergoing a millennia-long winter due to an asteroid impact, where its civilization allegedly used genetic experiments to fuse Brassica rapa (cabbage) genes with cloned humans to create cold-resistant beings.
</p>
  <p>The subject exhibits cold-emitting abilities, causing ambient temperatures to feel cooler when speaking, and has hair resembling cabbage leaves. Due to its temperature-altering abilities, the subject was reportedly deemed unsuitable for reintegration into its society and placed aboard an experimental spacecraft that encountered a wormhole, resulting in its arrival on Earth.
</p>
  <p>Despite its unusual traits, the subject has shown no signs of aggression and has been consistently friendly toward human personnel. It is generally quiet but has displayed humor through wordplay, often earning laughter with "dad jokes" that also induce a slight chill in the room.
</p>
  <p>HAVEN is currently conducting research on the subject’s genetic modifications, focusing on the integration of plant genes and its cold-emitting abilities.
 </p>`},{id:"405955657",name:"MOKOU",category:"Unknown",profileImageSrc:"/questionmark.jpg",species:"Unknown",hazardRating:"Low",gender:"Unknown",height:"169cm",acquisitionDate:"N/A",description:`
  <p><span class="highlight">The entity is currently being pursued.</span> It possesses the ability to distort perceptions of the real world. Through spoken words or any form of written description, the entity can manipulate the perception of any creature from the material plane or any being with free will.</p>
  <p>Despite active efforts to locate and contain the entity, it has not yet caused significant harm. However, much about the entity remains unknown or uncertain, including its appearance, as it can manipulate the senses of those who observe it. This ability to influence perception greatly complicates efforts to track and capture the entity.</p>`}],P=e=>{const t=[],i=E.map(n=>n.id);for(let n=1;n<=e;n++){let s=A();for(;i.includes(s);)s=A();t.push({id:s,category:`&#9632;
&#9632;
&#9632;
&#9632;
&#9632;
`,name:`&#9632;
&#9632;
&#9632;
&#9632;
&#9632;
`,hazardRating:V(),description:"Access Denied"}),i.push(s)}return t};function A(e=853681,t=7514303827){return(Math.floor(Math.random()*(t-e+1))+e).toString()}function V(){const e=["Moderate","High"],t=Math.floor(Math.random()*e.length);return e[t]}function _(e,t){return e==="scnz@haven.watch"&&t==="healthydiet54540"?(sessionStorage.setItem("isLoggedIn","true"),!0):(O(),!1)}function F(){return sessionStorage.getItem("isLoggedIn")==="true"}function K(){sessionStorage.removeItem("isLoggedIn"),window.location.reload()}const g=document.getElementById("login"),h=document.querySelector(".login-form"),r=document.getElementById("main"),f=document.createElement("div");f.classList.add("main-page-layout");const v=document.createElement("div");v.classList.add("sidebar");const S=document.createElement("div");S.classList.add("search-container");S.innerHTML=`
  <div class="search-bar-wrapper">
  <i class="material-icons search-icon">search</i>
    <input type="text" id="search-bar" placeholder="Search subjects..." class="search-bar" autocomplete="off" />
    <span id="clear-search" class="clear-search"><i class="material-icons">close</i></span> 
  </div>
  
`;const T=document.createElement("ul");T.id="subject-list";T.classList.add("subject-list");const M=document.createElement("div");M.classList.add("landing-content");M.innerHTML=`
<div class="logo-container">
    <img src="/logo-white-horizontal.svg" alt="Logo" class="logo logo-horizontal" />
  </div>
<div class="landing-intro">
  <h2>Entity Database</h2>
  <p>Access the profiles of hazardous entities under H.A.V.E.N. surveillance. Use the search bar or select from the list to view specific details.</p>
  <p>You are only authorized to view entities related to your current work assignments. Access to other entities is restricted based on your clearance level. Unauthorized access attempts will result in security measures being enforced.</p>
</div>
 <div class="access-warning">
    <h3>Security Alert</h3>
    <p>Unusual activity detected on your account. Access has been restricted. Contact the Security Team immediately to resolve and restore privileges.</p>
    </div>
  <div class="mission-statement">
    <p>H.A.V.E.N. is dedicated to monitoring, containing, and neutralizing hazardous entities that pose a threat to public safety. Each subject listed in this database is actively monitored, and their status is updated in real-time.</p>
  </div>
`;const y=document.createElement("div");y.id="main-content";y.classList.add("main-content");const m=document.createElement("button");m.id="logout-btn";m.classList.add("logout-btn");m.innerHTML='<i class="material-icons">logout</i> Logout';m.addEventListener("click",function(){K()});const d=document.createElement("div");d.classList.add("profile-container");const C=document.createElement("div");C.classList.add("profile-content-header");const o=document.createElement("div");o.classList.add("profile-info-container");const b=document.createElement("div");b.classList.add("profile-basic-info");const u=document.createElement("img");u.classList.add("profile-picture");u.src="";u.alt="Profile Picture";const W=document.createElement("div");W.innerHTML=`
  <h2>Access Denied</h2>
  <p>You do not have access to view details of this subject.</p>
`;function Y(e){g.style.display="flex",r.style.display="none",h&&h.addEventListener("submit",function(t){if(t.preventDefault(),e){const p=document.querySelector(".top-alert");p.classList.add("highlight"),setTimeout(()=>{p.classList.remove("highlight")},3500);return}const i=h.querySelector('input[type="username"]'),n=h.querySelector('input[type="password"]'),s=i?i.value:"",a=n?n.value:"";_(s,a)&&j(),i&&(i.value=""),n&&(n.value="")})}function j(){g.style.display="none",r.style.display="flex",g.classList.add("hidden"),setTimeout(()=>{g.style.display="none"},500),r.classList.add("hidden"),r.style.display="flex",setTimeout(()=>{r.classList.remove("hidden")},500),window.innerWidth<768&&N(),G(r)}function G(e){o.appendChild(b),o.appendChild(u),v.appendChild(S),v.appendChild(T),y.appendChild(M),f.appendChild(v),f.appendChild(y),e.appendChild(m),e.appendChild(f);const t=$(100);J(t)}function J(e){const t=document.getElementById("search-bar"),i=document.getElementById("clear-search");L(e),t.addEventListener("input",function(){const n=t.value.toLowerCase(),s=e.filter(a=>a.id.toLowerCase().includes(n)||a.name.toLowerCase().includes(n));t.value.length>0?i.style.display="block":i.style.display="none",L(s)}),i.addEventListener("click",function(){t.value="",i.style.display="none",t.focus(),L(e)})}function Q(e,t){const i=k(e.hazardRating);u.src=new URL(e.profileImageSrc,import.meta.url).href,C.innerHTML=`
    <h2>Subject NO. ${e.id}</h2>
    <div class="divider"></div>
    `,b.innerHTML=`
  <div class="field">
    <div class="field-label"><strong>Name:</strong></div> 
    <div class="field-value">${e.name}</div>
  </div>
  
  <div class="field">
    <div class="field-label"><strong>Category:</strong></div> 
    <div class="field-value">${e.category}</div>
  </div>
  
  <div class="field">
    <div class="field-label"><strong>Species:</strong></div> 
    <div class="field-value">${e.species}</div>
  </div>
  
  <div class="field">
    <div class="field-label"><strong>Gender:</strong></div> 
    <div class="field-value">${e.gender}</div>
  </div>
  
  <div class="field">
    <div class="field-label"><strong>Hazard Rating:</strong></div> 
    <div class="field-value ${i}">${e.hazardRating}</div>
  </div>
  
  <div class="field">
    <div class="field-label"><strong>Date acquisition:</strong></div> 
    <div class="field-value">${e.acquisitionDate}</div>
  </div>
`;const n=document.createElement("div");n.id="profile-description",n.classList.add("profile-description"),n.innerHTML=`
  <div class="description-container">
  <div class="field-label">Description:</div>
    <div class="description">
      ${e.description}
    </div>
    </div>
  `,o.innerHTML="",o.appendChild(b),o.appendChild(u),d.innerHTML="",d.appendChild(C),d.appendChild(o),d.appendChild(n),t.innerHTML="",t.appendChild(d)}function X(e){var i;e.classList.remove("active"),e.classList.add("access-denied");const t=document.createElement("i");t.classList.add("material-icons"),t.textContent="lock",(i=e.querySelector(".subject-title"))==null||i.append(t),R()}function Z(e){const t=document.getElementById("app");t.classList.remove("theme-red","theme-blue"),t.classList.add(e?"theme-red":"theme-blue");const i=document.getElementById("background-video");i&&(i.playbackRate=.85);const n=()=>{i.play(),document.removeEventListener("click",n)};i.muted=!0,i.play().catch(()=>{document.addEventListener("click",n)})}const D=null,w=x(D)&&D.getTime()>Date.now();document.addEventListener("DOMContentLoaded",()=>{Z(w),w&&console.log("Maintenance mode is active."),F()?j():Y(w)});
