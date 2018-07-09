$(document).ready(function(){
  -  $(".toggle#enable i").click(function(e){
+
+  $(".subscribe-section form").submit(function(event){
+    var email= $("input.email-input").val();
+    alert("Thank you " +email+ " for subscribing :)");
+    event.preventDefault();
+  });
+
+  $(".toggle#enable i").click(function(){
     $(".menu").toggleClass("active");
     $(".toggle#enable").hide();
     $(".toggle#disable").show();
-    $(".menu").attr("inactive");
-    e.preventDefault();
   });

-  $(".toggle#disable i").click(function(e){
+  $(".toggle#disable i").click(function(){
     $(".menu").toggleClass("active");
     $(".toggle#enable").show();
     $(".toggle#disable").hide();
-    $(".menu").attr("active");
-    e.preventDefault();
   });
});
