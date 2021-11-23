
    function openForm() {
        document.querySelector(".bg-model").style.display = "block";
    }
    function closeForm() {
        document.querySelector(".bg-model").style.display = "none";
    }




    var x = document.getElementById("log");
    var y = document.getElementById("register");
    var z = document.getElementById("btt");
    function register(){
      x.style.left = "-400px";
      y.style.left = "50px";
      z.style.left = "110px";
    }
    function log(){
      x.style.left = "50px";
      y.style.left = "450px";
      z.style.left = "0";
    }
    const menuIcon = document.querySelector(".menu");
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener("click", () => {
navbar.classList.toggle("change");
});
function toggle(){
        var video = document.querySelector('.video');
        var vid = document.querySelector('video');
        video.classList.toggle('active');
        vid.currentTime = 0;
        vid.pause();
    }
