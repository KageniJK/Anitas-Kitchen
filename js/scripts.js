$(document).ready(function(){
  $("subscribe form").submit(function(event){
    var mail = $("input#email").val();

    console.log(mail);

    event.preventDefault();
  });

  $('.menu-toggle').on('click', function(){
  $('.full-menu').toggleClass('full-menu--open');
})
});
