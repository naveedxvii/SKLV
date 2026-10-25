
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("on");io.unobserve(e.target)}})},{threshold:.15});
document.querySelectorAll(".rv").forEach(function(el,i){el.style.transitionDelay=(i%3)*0.12+"s";io.observe(el)});
var g=document.getElementById("glow");
function mv(x,y){g.style.setProperty("--mx",x+"px");g.style.setProperty("--my",y+"px")}
addEventListener("pointermove",function(e){mv(e.clientX,e.clientY)});
addEventListener("scroll",function(){var s=Math.min(scrollY,innerHeight);g.style.opacity=1-s/innerHeight*0.9},{passive:true});
