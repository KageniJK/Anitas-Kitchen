$(document).ready(function(){
  $(".subscription form").submit(function(event){
    var mail = $("input#email").val();

    alert("The email: " + mail + " has been subscribed to Anita's Kitchen mailing list.");

    event.preventDefault();
  });

  $('.menu-toggle').on('click', function(){
  $('.full-menu').toggleClass('full-menu-open');
})
});
