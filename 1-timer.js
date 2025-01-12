import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{f as y,i as p}from"./assets/vendor-BbbuE1sJ.js";let a=null;y("#datetime-picker",{enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){const t=e[0];t<=new Date?(p.error({title:"Error",message:"Please choose a date in the future",position:"topRight"}),a=null,document.querySelector(".start-timer-btn").disabled=!0):(a=t,document.querySelector(".start-timer-btn").disabled=!1)}});function b(e){const n=Math.floor(e/864e5),m=Math.floor(e%864e5/36e5),f=Math.floor(e%864e5%36e5/6e4),h=Math.floor(e%864e5%36e5%6e4/1e3);return{days:n,hours:m,minutes:f,seconds:h}}function s(e){return String(e).padStart(2,"0")}const r=document.querySelector(".start-timer-btn"),i=document.querySelector(".timer"),d=document.getElementById("datetime-picker");let u=null;r.addEventListener("click",()=>{a&&(r.disabled=!0,d.disabled=!0,i.classList.add("active"),u=setInterval(()=>{const t=a-new Date;if(t<=0){clearInterval(u),p.success({title:"Success",message:"Time is up!"}),i.classList.remove("active"),r.disabled=!0,d.disabled=!1;return}const{days:o,hours:c,minutes:l,seconds:n}=b(t);i.innerHTML=`
    <span class="wrapper"><span id="days">${s(o)}</span>:
      <span class="label">Days</span></span>
    <span class="wrapper"> <span id="hours">${s(c)}</span>:
      <span class="label">Hours</span></span>
    <span class="wrapper"><span id="minutes">${s(l)}</span>:
      <span class="label">Minutes</span></span>
    <span class="wrapper"><span id="seconds">${s(n)}</span>
      <span class="label">Seconds</span></span>
    `},1e3))});
//# sourceMappingURL=1-timer.js.map
