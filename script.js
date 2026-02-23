const toggle = document.getElementById("menuToggle");
const nav = document.getElementById("navMenu");

toggle.onclick = () =>{
  nav.classList.toggle("active");
}

document.querySelectorAll(".dropdown > a").forEach(item=>{
  item.addEventListener("click",function(e){
    e.preventDefault();

    let parent = this.parentElement;

    document.querySelectorAll(".dropdown").forEach(drop=>{
      if(drop !== parent){
        drop.classList.remove("active");
      }
    });

    parent.classList.toggle("active");
  })
});
let slider=document.getElementById("slider");

function slideLeft(){
slider.scrollLeft-=300;
}

function slideRight(){
slider.scrollLeft+=300;
}

setInterval(()=>{
slider.scrollLeft+=300;
},3000);
