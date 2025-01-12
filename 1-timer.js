import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{f as y,i as m}from"./assets/vendor-BbSUbo7J.js";let s=null;y("#datetime-picker",{enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){const t=e[0];t<=new Date?(m.error({title:"Error",message:"Please choose a date in the future"}),s=null,document.querySelector(".start-timer-btn").disabled=!0):(s=t,document.querySelector(".start-timer-btn").disabled=!1)}});function b(e){const r=Math.floor(e/864e5),p=Math.floor(e%864e5/36e5),f=Math.floor(e%864e5%36e5/6e4),h=Math.floor(e%864e5%36e5%6e4/1e3);return{days:r,hours:p,minutes:f,seconds:h}}function n(e){return String(e).padStart(2,"0")}const a=document.querySelector(".start-timer-btn"),i=document.querySelector(".timer"),u=document.getElementById("datetime-picker");let l=null;a.addEventListener("click",()=>{s&&(a.disabled=!0,u.disabled=!0,i.classList.add("active"),l=setInterval(()=>{const t=s-new Date;if(t<=0){clearInterval(l),m.success({title:"Success",message:"Time is up!"}),i.classList.remove("active"),a.disabled=!0,u.disabled=!1;return}const{days:o,hours:c,minutes:d,seconds:r}=b(t);i.innerHTML=`
      <span id="days">${n(o)}</span>:
      <span id="hours">${n(c)}</span>:
      <span id="minutes">${n(d)}</span>:
      <span id="seconds">${n(r)}</span>
    `},1e3))});
//# sourceMappingURL=1-timer.js.map
