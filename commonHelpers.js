import"./assets/styles-618a3959.js";import{f as h,i as p}from"./assets/vendor-651d7991.js";let c=Date.now(),d="";const n=document.querySelector(".btn"),u=document.querySelector(".input"),g=document.querySelector("span[data-days]"),y=document.querySelector("span[data-hours]"),F=document.querySelector("span[data-minutes]"),S=document.querySelector("span[data-seconds]"),b={class:"iziToast-alert",title:"Error",message:"Please choose a date in the future",position:"topRight",backgroundColor:"#EF4040",messageColor:"#FFFFFF",messageSize:"16px",messageLineHeight:"1.5",titleColor:"#FFFFFF",titleSize:"16px",titleLineHeight:"1.5",iconUrl:"./img/icon-x-octagon.svg"},C={locale:{firstDayOfWeek:1},enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){d=e[0],d.getTime()<c?(p.error(b),n.disabled=!0):n.disabled=!1}},T=h(u,C);u.addEventListener("focus",()=>{T.config.defaultDate=new Date});n.addEventListener("click",v);function v(e){const l=setInterval(m,1e3);function m(){c=Date.now();const o=d.getTime()-c,{days:s,hours:r,minutes:a,seconds:i}=D(o);g.textContent=`${s}`,y.textContent=`${r}`,F.textContent=`${a}`,S.textContent=`${i}`,o<=1e3&&clearInterval(l)}n.disabled=!0,u.disabled=!0}function t(e){return String(e).padStart(2,"0")}function D(e){const s=t(Math.floor(e/864e5)),r=t(Math.floor(e%864e5/36e5)),a=t(Math.floor(e%864e5%36e5/6e4)),i=t(Math.floor(e%864e5%36e5%6e4/1e3));return{days:s,hours:r,minutes:a,seconds:i}}
//# sourceMappingURL=commonHelpers.js.map
