var modal = document.getElementById('myModal');
var modalImg = document.getElementById("img01");

modal.onclick = function() {
    img01.className += " out";
    setTimeout(function() {
       modal.style.display = "none";
       img01.className = "modal-content";
     }, 300);

 }

/*
*   OCTOBER 1
*/
var toggle = document.getElementById('modalToggle1');
var img = document.getElementById('myImg1');
toggle.onclick = function(){
    modal.style.display = "block";
    modalImg.src = img.src;
}

/*
*   OCTOBER 2
*/
var toggle2 = document.getElementById('modalToggle2');
var img2 = document.getElementById('myImg2');
toggle2.onclick = function(){
    modal.style.display = "block";
    modalImg.src = img2.src;
}

/*
*   OCTOBER 3
*/
var toggle3 = document.getElementById('modalToggle3');
var img3 = document.getElementById('myImg3');
toggle3.onclick = function(){
    modal.style.display = "block";
    modalImg.src = img3.src;
}
