let t;
let date;
let time;
let am_pm;
var tt=null;
var ti=null;
const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
};
function india() {
    let t = new Date();
    date = t.toLocaleDateString(undefined, options);
    time =
        (t.getHours() % 12) + ":" + t.getMinutes() + ":" + t.getSeconds();
    am_pm = t.getHours() >= 12 ? "PM" : "AM";
    document.getElementById("time").innerHTML =
        time + " " + am_pm + "<br> on " + date;
}
var holder=document.getElementById("flagholder");
holder.innerHTML=`
<div class="flag india">
<img src="/nm8Qq5m.png" width="50" alt="" class="indian__wheel" />
</div>
`;
var st = setTimeout(india, 0);
var si = setInterval(india, 1000);

function foreign(offset) {
    let d = new Date();
    // const offset = 9; // UTC of Japan is +09.00
    let utc = d.getTime() + d.getTimezoneOffset() * 60000;
    let time_remnant = new Date(utc + 3600000 * offset);
    let time = (time_remnant.getHours() % 12) + ":" + time_remnant.getMinutes() + ":" + time_remnant.getSeconds();
    let am_pm = time_remnant.getHours() >= 12 ? "PM" : "AM";
    let date = time_remnant.toLocaleDateString(undefined, options);
    console.log(time);
    document.getElementById("time").innerHTML =
        time + " " + am_pm +"<br> on " + date;
}
japanese.addEventListener("click", jap=() => {
    // console.log(si)
    clearTimeout(st);
    clearInterval(si);
    clearTimeout(tt);
    clearInterval(ti);
    tt=setTimeout(foreign(9), 0);
    ti=setInterval( function() { foreign(9); }, 1000 );
    // let ti=setInterval(japan(), 1000);

    holder.innerHTML=`
    <div class="flag japan">
    </div>
    `;
})
french.addEventListener("click", fre=() => {
    clearTimeout(st);
    clearInterval(si);
    clearTimeout(tt);
    clearInterval(ti);
    tt=setTimeout(foreign(2), 0);
    ti=setInterval( function() { foreign(2); }, 1000 );

    // french.classList.remove("smallflag");

    holder.innerHTML=`
    <div class="flag france">
    </div>
    `;
})
indian.addEventListener("click", ind=() => {
    clearTimeout(st);
    clearInterval(si);
    clearTimeout(tt);
    clearInterval(ti);
    st = setTimeout(india, 0);
    si = setInterval(india, 1000);

    holder.innerHTML=`
    <div class="flag india">
    <img src="/nm8Qq5m.png" width="50" alt="" class="indian__wheel" />
    </div>
    `;
})
australian.addEventListener("click", aus=() => {
    clearTimeout(st);
    clearInterval(si);
    clearTimeout(tt);
    clearInterval(ti);
    tt=setTimeout(foreign(11), 0);
    ti=setInterval( function() { foreign(11); }, 1000 );

    holder.innerHTML=`
    <div class="flag australia" id="australian">
    <div class="australia__left__top">
      <div class="australia__plus">
        <div class="plus"></div>
      </div>
      <div class="australia__x">
        <div class="x__strip-1"></div>
        <div class="x__strip-2"></div>
      </div>
    </div>
    <img
      src="/2X2snYP.png"
      width="130"
    />
  </div>
    `;
})
russian.addEventListener("click", rus=() => {
    clearTimeout(st);
    clearInterval(si);
    clearTimeout(tt);
    clearInterval(ti);
    tt=setTimeout(foreign(3), 0);
    ti=setInterval( function() { foreign(3); }, 1000 );

    holder.innerHTML=`
    <div class="flag russia">
    </div>
    `;
})
argentenian.addEventListener("click", arg=() => {
    clearTimeout(st);
    clearInterval(si);
    clearTimeout(tt);
    clearInterval(ti);
    tt=setTimeout(foreign(-3), 0);
    ti=setInterval( function() { foreign(-3); }, 1000 );

    holder.innerHTML=`
    <div class="flag argentina" id="argentenian" title="Argentina">
    <img src="/JfNCX8z.png" width="50" class="argentina__logo" alt="argentina" />
  </div>
    `;
})
bengali.addEventListener("click", bang=() => {
    clearTimeout(st);
    clearInterval(si);
    clearTimeout(tt);
    clearInterval(ti);
    tt=setTimeout(foreign(6), 0);
    ti=setInterval( function() { foreign(6); }, 1000 );

    holder.innerHTML=`
    <div class="flag bangladesh" id="bengali" title="Bangladesh">
    <div class="bangladesh__circle" style="width: 90px; height: 90px;"></div>
  </div>
    `;
})
brazilian.addEventListener("click", bra=() => {
    clearTimeout(st);
    clearInterval(si);
    clearTimeout(tt);
    clearInterval(ti);
    tt=setTimeout(foreign(-3), 0);
    ti=setInterval( function() { foreign(-3); }, 1000 );

    holder.innerHTML=`
    <div class="flag brazil" id="brazilian" title="Brazil">
    <div class="brazil__diamond"></div>
    <img src="/IAzj891.png" alt="Brazil" class="brazil__logo" style="width: 80px;" />
  </div>
    `;
})
canadian.addEventListener("click", can=() => {
    clearTimeout(st);
    clearInterval(si);
    clearTimeout(tt);
    clearInterval(ti);
    tt=setTimeout(foreign(-4), 0);
    ti=setInterval( function() { foreign(-4); }, 1000 );

    holder.innerHTML=`
    <div class="flag canada" id="canadian" title="Canada" >
    <img src="ACKqo2r.png" alt="Canada" class="canada__logo" style="width: 50px;" />
  </div>
    `;
})
german.addEventListener("click", ger=() => {
    clearTimeout(st);
    clearInterval(si);
    clearTimeout(tt);
    clearInterval(ti);
    tt=setTimeout(foreign(1), 0);
    ti=setInterval( function() { foreign(1); }, 1000 );

    holder.innerHTML=`
    <div class="flag germany" id="german" title="Germany"></div>
    `;
})
korean.addEventListener("click", kor=() => {
    clearTimeout(st);
    clearInterval(si);
    clearTimeout(tt);
    clearInterval(ti);
    tt=setTimeout(foreign(9), 0);
    ti=setInterval( function() { foreign(9); }, 1000 );

    holder.innerHTML=`
    <div class="flag south_korea" id="korean" title="South Korea">
    <div class="south_korea__center_circle" style="width: 100px; height: 100px;"></div>
  
    <div class="south_korea__strips_1" style="width: 210px; height: 45px;">
      <div class="strips">
        <div style="width: 8px;"></div>
        <div style="width: 8px;"></div>
        <div style="width: 8px;"></div>
      </div>
      <div class="strips">
        <div style="width: 8px;"></div>
        <div style="width: 8px;"></div>
        <div style="width: 8px;"></div>
      </div>
    </div>
  
    <div class="south_korea__strips_2" style="width: 210px; height: 45px;">
      <div class="strips">
        <div style="width: 8px;"></div>
        <div style="width: 8px;"></div>
        <div style="width: 8px;"></div>
      </div>
      <div class="strips">
        <div style="width: 8px;"></div>
        <div style="width: 8px;"></div>
        <div style="width: 8px;"></div>
      </div>
    </div>
  
    <p class="south_korea__invisible_brick" style="left:71px; top:142px; rotate: -34deg;"></p>
    <p class="south_korea__invisible_brick" style="right:71px; top: 142px; rotate: 34deg;"></p>
  </div>
    `;
})
lankan.addEventListener("click", sri=() => {
    clearTimeout(st);
    clearInterval(si);
    clearTimeout(tt);
    clearInterval(ti);
    tt=setTimeout(india, 0);
    ti=setInterval(india, 1000 );

    holder.innerHTML=`
    <div class="flag sri_lanka" id="lankan" title="Sri Lanka" style="gap: 20px;">
    <div class="left__box" style="width: 78px;"></div>
    <img src="/lqpXtLJ.png" class="sri_lanka__logo" alt="Sri Lanka" style="width: 100px; height: 100px;" />
  </div>
    `;
})
switz.addEventListener("click", swit=() => {
    clearTimeout(st);
    clearInterval(si);
    clearTimeout(tt);
    clearInterval(ti);
    tt=setTimeout(foreign(1), 0);
    ti=setInterval( function() { foreign(1); }, 1000 );

    holder.innerHTML=`
    <div class="flag switzerland" id="switz" title="Switzerland"></div>
    `;
    let temp = document.querySelector('.switzerland');
    temp.style.setProperty('--switzerlandBefore','105px');
})
american.addEventListener("click", usa=() => {
    clearTimeout(st);
    clearInterval(si);
    clearTimeout(tt);
    clearInterval(ti);
    tt=setTimeout(foreign(-4), 0);
    ti=setInterval( function() { foreign(-4); }, 1000 );

    holder.innerHTML=`
    <div class="flag united_states" id="american" title="America">
    <div class="united_states__top_left" style="width:120px;">
      <div class="united_states__stars_col" style="height: 100%; width: auto; gap:5px;">
        <div class="united_states__star" style="height: 10px"></div>
        <div class="united_states__star" style="height: 10px"></div>
        <div class="united_states__star" style="height: 10px"></div>
        <div class="united_states__star" style="height: 10px"></div>
        <div class="united_states__star" style="height: 10px"></div>
      </div>
      <div class="united_states__stars_col" style="height: 100%; width: auto; gap:5px;">
        <div class="united_states__star" style="height: 10px"></div>
        <div class="united_states__star" style="height: 10px"></div>
        <div class="united_states__star" style="height: 10px"></div>
        <div class="united_states__star" style="height: 10px"></div>
      </div>
      <div class="united_states__stars_col" style="height: 100%; width: auto; gap:5px;">
        <div class="united_states__star" style="height: 10px"></div>
        <div class="united_states__star" style="height: 10px"></div>
        <div class="united_states__star" style="height: 10px"></div>
        <div class="united_states__star" style="height: 10px"></div>
        <div class="united_states__star" style="height: 10px"></div>
      </div>
      <div class="united_states__stars_col" style="height: 100%; width: auto; gap:5px;"> 
        <div class="united_states__star" style="height: 10px"></div>
        <div class="united_states__star" style="height: 10px"></div>
        <div class="united_states__star" style="height: 10px"></div>
        <div class="united_states__star" style="height: 10px"></div>
      </div>
      <div class="united_states__stars_col" style="height: 100%; width: auto; gap:5px;">
        <div class="united_states__star" style="height: 10px"></div>
        <div class="united_states__star" style="height: 10px"></div>
        <div class="united_states__star" style="height: 10px"></div>
        <div class="united_states__star" style="height: 10px"></div>
        <div class="united_states__star" style="height: 10px"></div>
      </div>
      <div class="united_states__stars_col" style="height: 100%; width: auto; gap:5px;">
        <div class="united_states__star" style="height: 10px"></div>
        <div class="united_states__star" style="height: 10px"></div>
        <div class="united_states__star" style="height: 10px"></div>
        <div class="united_states__star" style="height: 10px"></div>
      </div>
      <div class="united_states__stars_col" style="height: 100%; width: auto; gap:5px;">
        <div class="united_states__star" style="height: 10px"></div>
        <div class="united_states__star" style="height: 10px"></div>
        <div class="united_states__star" style="height: 10px"></div>
        <div class="united_states__star" style="height: 10px"></div>
        <div class="united_states__star" style="height: 10px"></div>
      </div>
      <div class="united_states__stars_col" style="height: 100%; width: auto; gap:5px;">
        <div class="united_states__star" style="height: 10px"></div>
        <div class="united_states__star" style="height: 10px"></div>
        <div class="united_states__star" style="height: 10px"></div>
        <div class="united_states__star" style="height: 10px"></div>
      </div>
      <div class="united_states__stars_col" style="height: 100%; width: auto; gap:5px;">
        <div class="united_states__star" style="height: 10px"></div>
        <div class="united_states__star" style="height: 10px"></div>
        <div class="united_states__star" style="height: 10px"></div>
        <div class="united_states__star" style="height: 10px"></div>
        <div class="united_states__star" style="height: 10px"></div>
      </div>
      <div class="united_states__stars_col" style="height: 100%; width: auto; gap:5px;">
        <div class="united_states__star" style="height: 10px"></div>
        <div class="united_states__star" style="height: 10px"></div>
        <div class="united_states__star" style="height: 10px"></div>
        <div class="united_states__star" style="height: 10px"></div>
      </div>
      <div class="united_states__stars_col" style="height: 100%; width: auto; gap:5px;">
        <div class="united_states__star" style="height: 10px"></div>
        <div class="united_states__star" style="height: 10px"></div>
        <div class="united_states__star" style="height: 10px"></div>
        <div class="united_states__star" style="height: 10px"></div>
        <div class="united_states__star" style="height: 10px"></div>
      </div>
    </div>
  </div>
    `;
})
pakistani.addEventListener("click", pak=() => {
    clearTimeout(st);
    clearInterval(si);
    clearTimeout(tt);
    clearInterval(ti);
    tt=setTimeout(foreign(5), 0);
    ti=setInterval( function() { foreign(5); }, 1000 );

    holder.innerHTML=`
    <div class="flag pakistan" id="pakistani" title="Pakistan"></div>
    `;
    let temp = document.querySelector('.pakistan');
    temp.style.setProperty('--pakistanwidthafter','25px');
    temp.style.setProperty('--pakistanleftafter','65%');
    temp.style.setProperty('--pakistantopafter','33%');
    temp.style.setProperty('--pakistanwidthbefore','84px');
    temp.style.setProperty('--pakistanleftbefore','105px');
    temp.style.setProperty('--pakistantopbefore','10px');
    temp.style.setProperty('--pakistanbackground','linear-gradient(to right, #fff 60px, #01411c 0)');
})
italian.addEventListener("click", ita=() => {
    clearTimeout(st);
    clearInterval(si);
    clearTimeout(tt);
    clearInterval(ti);
    tt=setTimeout(foreign(2), 0);
    ti=setInterval( function() { foreign(2); }, 1000 );

    holder.innerHTML=`
    <div class="flag italy" id="italian" title="Italy"></div>
    `;
})
chinese.addEventListener("click", china=() => {
    clearTimeout(st);
    clearInterval(si);
    clearTimeout(tt);
    clearInterval(ti);
    tt=setTimeout(foreign(8), 0);
    ti=setInterval( function() { foreign(8); }, 1000 );

    holder.innerHTML=`
    <div class="flag china" id="chinese" title="China">
    <div class="china__star" style="margin:20px;width:48px;height:48px"></div>
    <div class="china__small_star" style="width:18px;height:18px"></div>
    <div class="china__small_star" style="width:18px;height:18px"></div>
    <div class="china__small_star" style="width:18px;height:18px"></div>
    <div class="china__small_star" style="width:18px;height:18px"></div>
  </div>
    `;
    // let temp = document.querySelector('.china__small_star');
    // temp.style.setProperty('--china_smallstar1','82px');
    // temp.style.setProperty('--china_smallstar1','10px');
})
spanish.addEventListener("click", spa=() => {
    clearTimeout(st);
    clearInterval(si);
    clearTimeout(tt);
    clearInterval(ti);
    tt=setTimeout(foreign(1), 0);
    ti=setInterval( function() { foreign(1); }, 1000 );

    holder.innerHTML=`
    <div class="flag spain" id="spanish" title="Spain">
    <img src="/g1E7616.png" width="53" alt="Spain" />
  </div>
    `;
})

function clicked() {
    //   this.classList.toggle("active");
    let content = document.getElementsByClassName("content");
    if (content[0].style.display == "flex") {
        content[0].style.display = "none";
    } else {
        content[0].style.display = "flex";
    }
    let temp=document.getElementsByTagName("footer")[0];
    if(temp.style.paddingTop=="0px")
    {
        temp.style.paddingTop="100px";
    }
    else{
        temp.style.paddingTop="0px";
    }
}
ts=document.getElementsByClassName("theme-switch")[0];
ts.addEventListener("click",()=>{
    document.getElementsByTagName("main")[0].classList.toggle("dark-theme");
    document.getElementsByTagName("aside")[0].classList.toggle("dark-theme");
    document.getElementsByTagName("footer")[0].classList.toggle("dark-theme");
    document.getElementsByTagName("html")[0].classList.toggle("dark-theme");
    document.getElementsByTagName("body")[0].classList.toggle("dark-theme");
    document.getElementsByTagName("nav")[0].classList.toggle("dark-theme");
    document.getElementsByClassName("time")[0].classList.toggle("dark-theme2");
    document.getElementsByClassName("content")[0].classList.toggle("dark-theme3");
    
})