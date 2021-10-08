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

/*
*   OCTOBER 4
*/
var toggle4 = document.getElementById('modalToggle4');
var img4 = document.getElementById('myImg4');
toggle4.onclick = function(){
    modal.style.display = "block";
    modalImg.src = img4.src;
}

/*
*   OCTOBER 5
*/
var toggle5 = document.getElementById('modalToggle5');
var img5 = document.getElementById('myImg5');
toggle5.onclick = function(){
    modal.style.display = "block";
    modalImg.src = img5.src;
}

/*
*   OCTOBER 6
*/
var toggle6 = document.getElementById('modalToggle6');
var img6 = document.getElementById('myImg6');
toggle6.onclick = function(){
    modal.style.display = "block";
    modalImg.src = img6.src;
}

/*
*   OCTOBER 7
*/
var toggle7 = document.getElementById('modalToggle7');
var img7 = document.getElementById('myImg7');
toggle7.onclick = function(){
    modal.style.display = "block";
    modalImg.src = img7.src;
}
