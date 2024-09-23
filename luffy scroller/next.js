console.log("hello");
const pro = document.querySelector(".pro1");
const pro2 = document.querySelector(".pro2");
const slides1 = document.querySelector("#sl1");
const i1 = document.querySelector(".i1");
const i2 = document.querySelector(".i2");
const i3 = document.querySelector(".i3");
const i4 = document.querySelector(".i4");
const i5 = document.querySelector(".i5");
const i6 = document.querySelector(".i6");
const slides2 = document.querySelector("#sl2");
const slides3 = document.querySelector("#sl3");
const slides4 = document.querySelector("#sl4");
const slides5 = document.querySelector("#sl5");
const slides6 = document.querySelector("#sl6");
const p = document.querySelector("#sl1 p")



slides1.addEventListener("mouseenter",function(){
   pro.style.display = "block";
   i1.style.display = "block";
});
slides1.addEventListener("mouseleave", function(){
    pro.style.display = "none";
    i1.style.display = "none"; 
})

slides2.addEventListener("mouseenter",function(){
    pro.style.display = "block";
    i2.style.display = "block";
 });
 slides2.addEventListener("mouseleave", function(){
     pro.style.display = "none";
     i2.style.display = "none";
 })

 slides3.addEventListener("mouseenter",function(){
    pro.style.display = "block";
    i3.style.display = "block";
    
 });
 slides3.addEventListener("mouseleave", function(){
     pro.style.display = "none";
     i3.style.display = "none";
 })

 slides4.addEventListener("mouseenter",function(){
    pro.style.display = "block";
    i4.style.display = "block";
    
 });
 slides4.addEventListener("mouseleave", function(){
     pro.style.display = "none";
     i4.style.display = "none";
 })

 slides5.addEventListener("mouseenter",function(){
    pro.style.display = "block";
    i5.style.display = "block";
    
 });
 slides5.addEventListener("mouseleave", function(){
     pro.style.display = "none";
     i5.style.display = "none";
 })

 slides6.addEventListener("mouseenter",function(){
    pro.style.display = "block";
    i6.style.display = "block";
    
 });
 slides6.addEventListener("mouseleave", function(){
     pro.style.display = "none";
     i6.style.display = "none";
 })

 const ele = document.querySelector(".elem2");
 const ele1 = document.querySelector(".elem3");
 const red = document.querySelector(".red");
 const b2 = document.querySelector(".b2")
 const gray = document.querySelector(".gray");

 ele.addEventListener("mouseenter",function(){
    red.style.left = "15.5vw";
    red.style.width = "5vw";
 });

ele.addEventListener("mouseleave",function(){
    red.style.left = "3.6vw";
    red.style.width = "10vw";
})

ele1.addEventListener("mouseenter",function(){
    red.style.left = "23.5vw";
    red.style.width = "10vw";
 });

ele1.addEventListener("mouseleave",function(){
    red.style.left = "3.6vw";
    red.style.width = "10vw";
})

b2.addEventListener("mouseenter",function(){
    gray.style.display = "block";
 });

b2.addEventListener("mouseleave",function(){
    gray.style.display = "none";
})

const float = document.querySelector(".floater");
const float1 = document.querySelector(".floater1");
const float2 = document.querySelector(".floater2");
const elem1 = document.querySelector(".elem1");
const elem2 = document.querySelector(".elem2");
const elem3 = document.querySelector(".elem3");
const blink = document.querySelector(".blink");

elem1.addEventListener("mouseenter",function(){
    float.style.display = "block";
 });

elem1.addEventListener("mouseleave",function(){
    float.style.display = "none";
})

elem2.addEventListener("mouseenter",function(){
    float1.style.display = "block";
 });

elem2.addEventListener("mouseleave",function(){
    float1.style.display = "none";
})

elem3.addEventListener("mouseenter",function(){
    float2.style.display = "block";
 });

elem3.addEventListener("mouseleave",function(){
    float2.style.display = "none";
})



