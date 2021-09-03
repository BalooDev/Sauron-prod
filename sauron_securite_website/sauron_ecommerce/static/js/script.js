
var example1 = new Vue({
    el: '#navCv',
    data: {
      admin: false,
      log: false,
    },
 
  })
  var scr = document.addEventListener("scroll",function(){
    if(window.scrollY==0){
        $('#nav-logo').removeClass('icon-m');
        $('#nav-logo').addClass('icon-l');
    }
    else{
        $('#nav-logo').removeClass('icon-l');
        $('#nav-logo').addClass('icon-m');
    }
    if(window.scrollY==0 && document.URL=="http://127.0.0.1:8000/sauron/"){
        $("#navCv").addClass("bg-transparent");
        $("#navCv").removeClass("bg-nav");
    }
    else{
        $("#navCv").removeClass("bg-transparent");
        $("#navCv").addClass("bg-nav");
    }
})
// init controller
$(function(){
window.scroll(0,0);

function itemhover(item){
    $("#item"+item).removeClass("text-white")
    $("#item"+item).addClass("bg-white")
    $("#item"+item).addClass("text-dark")
    $("#dropmenu"+item).removeClass("dn")
}

function itemnonhover(item){
    
    $("#item"+item).removeClass("bg-white")
    $("#item"+item).removeClass("text-dark")
    $("#dropmenu"+item).addClass("dn")
    $("#item"+item).addClass("text-white")
}


$("#item1").hover(
    function(){
        itemhover(1);

        itemnonhover(2)
        itemnonhover(3)
        itemnonhover(4)
        itemnonhover(5)
        gsap.to("#dropmenunav",{ height: 150,duration:0.5})
        gsap.to(".navB",{height: 0,duration:0.3})
    },
    function()
    {
        
    })

$("#item2").hover(
    function(){
        itemhover(2);

        itemnonhover(1)
        itemnonhover(3)
        itemnonhover(4)
        itemnonhover(5)
        gsap.to("#dropmenunav",{ height: 150,duration:0.5})
        gsap.to(".navB",{height: 0,duration:0.3})

    },
    function()
    {
        
    })

$("#item3").hover(
    function(){
        itemhover(3);

        itemnonhover(2)
        itemnonhover(1)
        itemnonhover(4)
        itemnonhover(5)
        gsap.to("#dropmenunav",{ height: 150,duration:0.5})
        gsap.to(".navB",{height: 0,duration:0.3})


    },
    function()
    {
        
    })

    $("#item4").hover(
        function(){
            itemhover(4);

            itemnonhover(2)
            itemnonhover(3)
            itemnonhover(1)
            itemnonhover(5)
            gsap.to("#dropmenunav",{ height: 150,duration:0.5})
            gsap.to(".navB",{height: 0,duration:0.3})
    
    
        },
        function()
        {
            
        })

$("#item5").hover(
    function(){


        itemnonhover(2)
        itemnonhover(3)
        itemnonhover(4)
        itemnonhover(1)
        gsap.to("#dropmenunav",{ height: 0,duration:0.5})
        gsap.to(".navB",{height: "auto",duration:0.3})


    },
    function()
    {
        
    })

$("#brand").hover(
    function(){
        $("#item3").removeClass("bg-white")
        $("#item3").removeClass("text-dark")

        $("#item1").removeClass("bg-white")
        $("#item1").removeClass("text-dark")

        $("#item2").removeClass("bg-white")
        $("#item2").removeClass("text-dark")


        $("#item1").addClass("text-white")
        $("#item2").addClass("text-white")
        $("#item3").addClass("text-white")
        $("#dropmenu1").addClass("dn")
        $("#dropmenu2").addClass("dn")
        $("#dropmenu3").addClass("dn")
        gsap.to("#dropmenunav",{ height: 0,duration:0.5})
        gsap.to(".navB",{height: "auto",duration:0.3})

    },
    function()
    {
        
    })

$("#dropmenunav").hover(
    function(){

    },
    function()
    {
        $("#item3").removeClass("bg-white")
        $("#item3").removeClass("text-dark")

        $("#item1").removeClass("bg-white")
        $("#item1").removeClass("text-dark")

        $("#item2").removeClass("bg-white")
        $("#item2").removeClass("text-dark")

        $("#item1").addClass("text-white")
        $("#item2").addClass("text-white")
        $("#item3").addClass("text-white")
        $("#dropmenu1").addClass("dn")
        $("#dropmenu2").addClass("dn")
        $("#dropmenu3").addClass("dn")
        gsap.to("#dropmenunav",{ height: 0,duration:0.5})
        gsap.to(".navB",{height: "auto",duration:0.3})

    })

$("#navCv").hover(
    function(){
        gsap.to(".navB",{height: "auto",duration:0.3})
    },
    function(){
        if(window.scrollY!=0){
            gsap.to(".navB",{height: 0,duration:0.3})
        }
    })
var controller = new ScrollMagic.Controller();

new ScrollMagic.Scene({
    offset: 1, // start this scene after scrolling for 50px
})
.setTween(".navB",0.3, {
    height: 0,
    })
    .addTo(controller);

var tl = gsap.timeline({repeat: -1, repeatDelay: 2});
tl.fromTo(".presentation-img",{
    duration: 1.5,   
    y:0,
    yoyo:true,
    ease:"elastic", 
    delay:1,
},

{      
    delay:1,
    duration: 1.5, 
    y: -100,
    yoyo: true, 
    repeat: -1,
    ease:"elastic", 
    stagger: {
        each:0.5,
        from:"random"
    }})
/*var finHeader = false;

//retrait affichage n*1
new ScrollMagic.Scene({
    offset: 50, // start this scene after scrolling for 50px
})
.setTween("#description1", {
    opacity: 0,
    duration:.3,
    x: 400,})
    .addIndicators({name: "1 (duration: 300)"})
    .addTo(controller);

new ScrollMagic.Scene({
    offset: 50 // start this scene after scrolling for 50px
})
.setTween("#img1", {
    opacity: 0,
    duration:.3,
    y: 400,})
    .addIndicators({name: "1 (duration: 300)"})
    .addTo(controller);
*/
/*//apparition affichage n*2
new ScrollMagic.Scene({
    offset: 50 // start this scene after scrolling for 50px
})
.setTween(gsap.from("#description2", {opacity: 0, x: -400,duration: .3, delay:0.6}))
    .addIndicators({name: "2 (duration: 300)"})
    .addTo(controller);

new ScrollMagic.Scene({
    offset: 50 // start this scene after scrolling for 50px
})
.setTween(gsap.from("#img2",{opacity: 0, y: -400, duration: .3, delay:0.6}))
    .addIndicators({name: "2 (duration: 300)"})
    .addTo(controller);



//retrait affichage n*2
new ScrollMagic.Scene({
    offset: 450 // start this scene after scrolling for 50px
})
.setTween("#description2", {
    duration:.3,
    opacity: 0,
    x: 400,})
    .addIndicators({name: "2 (duration: 300)"})
    .addTo(controller);

new ScrollMagic.Scene({
    offset: 450 // start this scene after scrolling for 50px
})
.setTween("#img2", {
    duration:.3,
    opacity: 0,
    y: 400,})
    .addIndicators({name: "2 (duration: 300)"})
    .addTo(controller);


//apparition affichage n*3
new ScrollMagic.Scene({
    offset: 450 // start this scene after scrolling for 50px
})
.setTween(gsap.from("#description3", {opacity: 0, x: -400,duration:.5, delay:.5}))
    .addIndicators({name: "3 (duration: 300)"})
    .addTo(controller);

new ScrollMagic.Scene({
    offset: 450 // start this scene after scrolling for 50px
})
.setTween(gsap.from("#img3",{opacity: 0, y: -400,duration:.5, delay:.5}))
    .addIndicators({name: "3 (duration: 300)"})
    .addTo(controller);

//retrait affichage n*3
new ScrollMagic.Scene({
    offset: 850 // start this scene after scrolling for 50px
})
.setTween("#description3", {
    duration:.3,
    opacity: 0,
    x: 400,})
    .addIndicators({name: "2 (duration: 300)"})
    .addTo(controller);

new ScrollMagic.Scene({
    offset: 850 // start this scene after scrolling for 50px
})
.setTween("#img3", {
    duration:.3,
    opacity: 0,
    y: 400,})
    .addIndicators({name: "2 (duration: 300)"})
    .addTo(controller);
*/
//transition
/*
new ScrollMagic.Scene({
    offset: 50 // start this scene after scrolling for 50px
})
.setTween(gsap.from("#transition-produit",{opacity: 0,duration:1,}))
    .addIndicators({name: "3 (duration: 300)"})
    .addTo(controller);

//transition

document.addEventListener('scroll',function(){
    console.log(finHeader)
    if(!finHeader && window.pageYOffset>50)
    {
       setTimeout(()=>window.scroll(0,0),2000) 
       finHeader=true;
       $(".chevron").hide();
    }
    
    if(category)
    {
        tween.reverse();
        category=false;
    }

})
*/
/*
//position fixe
new ScrollMagic.Scene({
    offset: 50, // start this scene after scrolling for 50px
    reverse: false,
})
.setTween("#header", {
    y: -1000,
    delay:1,
    duration: 3})
    .addIndicators({name: "2 (duration: 300)"})
    .addTo(controller);

//affichage navbar
new ScrollMagic.Scene({
    offset: 50,
    reverse: false, // start this scene after scrolling for 50px
})
.setTween(gsap.to("#navCv",{padding: 5, height: "auto",duration:0.5, delay:2.2}))
    .addIndicators({name: "2 (duration: 300)"})
    .addTo(controller);

//animation liste produits
new ScrollMagic.Scene({
    offset: 50,
    reverse: false, // start this scene after scrolling for 50px
})
.setTween(gsap.from(".cardProduct",{stagger:0.5, y:-100, opacity:0, delay:2}))
    .addIndicators({name: "2 (duration: 300)"})
    .addTo(controller);
})
let tween = gsap.from(".category-item",{stagger:0.2, y:-100, opacity:0, duration:0.4});
tween.pause();
let category = false;
$("#btn-category").click(function(){
    if(!category)
    {
        tween.play();
        category=true;
    }
    else
    {
        tween.reverse();
        category=false;
    }
    
})

$(".chevron").click(function(){
    if(window.pageYOffset<50)
    {
        window.scroll(0,50)
    }
    else if(window.pageYOffset<450)
    {
        window.scroll(0,450)
    }
    else
    {
        window.scroll(0,852)
    }
})
*/
$("#new-account").click(function(){
    if($("#new-account").hasClass("active-item"))
    {
      
    }
    else
    {
      $("#new-account").addClass("active-item"); 
      $("#connexion").removeClass("active-item");
      $(".new-account-content").removeClass("dn")
      $(".connexion-content").addClass("dn");
    }                      
                        
  });
  
  $("#connexion").click(function(){
    if($("#connexion").hasClass("active-item"))
    {
      
    }
    else
    {
      $("#connexion").addClass("active-item"); 
      $("#new-account").removeClass("active-item");
      $(".new-account-content").addClass("dn")
      $(".connexion-content").removeClass("dn");
    }                      
                        
  })

/*let tween2 = gsap.from("#log",{y:-2000, opacity:0, duration:0.4});
tween2.pause();
var co=false;
  $("#connexion-btn").click(function(){
      if(!co)
      {
        ouvrirConnexion()
      }
      else
      {
        fermerConnexion()
      }
  })

  var ouvrirConnexion = function(){
    co=true;
    tween2.play();
    $("#connexion-btn").html("FERMER");
  }
  var fermerConnexion = function(){
    co=false;
    tween2.reverse();
    window.scroll(0,0);
    $("#connexion-btn").html("CONNEXION");
  }*/

  $("#create-account").click(function(){
    $("#new-account").addClass("active-item"); 
    $("#connexion").removeClass("active-item");
    $(".new-account-content").removeClass("dn")
    $(".connexion-content").addClass("dn");
    //ouvrirConnexion();
  })
  $("#connexion-btn").click(function(){
    $("#new-account").removeClass("active-item"); 
    $("#connexion").addClass("active-item");
    $(".new-account-content").addClass("dn")
    $(".connexion-content").removeClass("dn");
    //ouvrirConnexion();
  })
})