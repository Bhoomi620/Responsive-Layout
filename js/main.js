$(document).ready(function(){
$('.fa-bars').click(function(){
    $(this).toggleClass('fa-times');
    $('nav').toggleClass('nav-toggle')
});


// document.addEventListener('DOMContentLoaded', function() {
//     var barsIcon = document.querySelector('.fa-bars');
//     var nav = document.querySelector('nav');
    
//     barsIcon.addEventListener('click', function() {
//       barsIcon.classList.toggle('fa-times');
//       nav.classList.toggle('nav-toggle');
//     });
//   });



// $(window).on('scroll load',function(){
//     $('.fa-bars').removeClass('fa-times');
//     $('nav').removeClass('nav-toggle')
// });

window.addEventListener('scroll', function() {
    document.querySelector('.fa-bars').classList.remove('fa-times');
    document.querySelector('nav').classList.remove('nav-toggle');
});

window.addEventListener('load', function() {
    document.querySelector('.fa-bars').classList.remove('fa-times');
    document.querySelector('nav').classList.remove('nav-toggle');
});


/*
$('.count').each(function(){
    var $this = $(this);
    countTo = $this.attr('data-count');
    $({countNum : $this.text()}).animate({
        countNum : countTo
    }, {
    duration: 5000,
    step : function(){
      $this.text(Math.floor(this.countNum)); },
    complete : function(){
$this.text(this.countNum + '+')
    }} )}) */

document.querySelectorAll('.count').forEach(function(element) {
    var countTo = element.getAttribute('data-count');
    $({ countNum: element.textContent }).animate(
        {
            countNum: countTo
        },
        {
            duration: 5000,
            step: function() {
                element.textContent = Math.floor(this.countNum);
            },
            complete: function() {
                element.textContent = this.countNum + '+';
            }
        }
    );
});

/* magnific pop up start here
 $('.project').magnific({
 delegate:'a',
 type:'image',
 gallery:{
     enable:true
 }
 }); */

});