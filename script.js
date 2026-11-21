var data=[["TikTok",91,0],["Facebook",87,0],["Instagram",71,0],["YouTube",37,1],["X (Twitter)",10,1]];
var box=document.getElementById("bars");
data.forEach(function(d){var r=document.createElement("div");r.className="bar";
r.innerHTML='<span>'+d[0]+'</span><div class="track"><div class="fill'+(d[2]?' navy':'')+'" data-w="'+d[1]+'"></div></div><span>'+d[1]+'%</span>';box.appendChild(r);});
var io=new IntersectionObserver(function(e){e.forEach(function(x){if(x.isIntersecting){box.querySelectorAll(".fill").forEach(function(f){f.style.width=f.dataset.w+"%"});}})});
io.observe(box);
document.querySelectorAll("#qs li").forEach(function(li){li.onclick=function(){li.classList.toggle("done")}});
