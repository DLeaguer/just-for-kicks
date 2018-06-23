// 1. Add an event to the 'See Details' content that will create an alert box that says 'Not Available in Hawaii.' after clicking on See Details.
details.addEventListener('click', seeDetails);
function seeDetails() {
    alert('Not Available in Hawaii.');
}

//2. Add an event to the div element with the id of 'name1' that will show/hide the description ('descrip1') after hovering over Air Jordan II.
var getName1 = document.getElementById('name1');
getName1.addEventListener('mouseover', showName1Desc);

function showName1Desc(){
    var getDescrip1 = document.getElementById('descrip1');
    if(getDescrip1.style.display === 'block'){
        getDescrip1.style.display = 'none';
    }
    else {
        getDescrip1.style.display = 'block';
    }
}

//3. Add an event to the div element with the id of 'name2' that will show/hide the following description after clicking on the element.
//'The instantly recognizable Jumpman silhouette made its debut with the Air Jordan 3 during Michael Jordan's 1987-88 NBA season.'
// var getName2 = document.getElementById('name2');
var descrip2 = document.createElement('div');
descrip2.id = 'descrip2';
descrip2.innerHTML = 'The instantly recognizable Jumpman silhouette made its debut with the Air Jordan 3 during Michael Jordan\'s 1987-88 NBA season.';
descrip2.style.display = 'none';
name2.appendChild(descrip2);
name2.addEventListener('click', showDescript2);

function showDescript2() {
    var getDescrip2 = document.getElementById('descrip2');
    if(getDescrip2.style.display === 'block'){
        console.log('none');
        getDescrip2.style.display = 'none';
    }
    else {
        console.log('block');
        getDescrip2.style.display = 'block';
    }
}

//You'll need to:
// create a div element with an id of 'descrip2'
//append this element to the div element with the id of 'name2' 


//4. Add events to the all the thumbs up icon that will add a count for each time the icon is clicked on for any shoe.
for(var i = 0; i < social.length; i++) {
    var getThumbs = document.getElementsByClassName('far fa-thumbs-up')[i];
    var thumbCount = document.createElement('div');
    thumbCount.className = 'thumbCount';
    thumbCount.innerHTML = '0';
    getThumbs.appendChild(thumbCount);
    
    getThumbs.addEventListener('click', addThumbsUp);
}

function addThumbsUp() {
    var countThumbs = this.querySelectorAll('.thumbCount')[0];
    countThumbs.innerHTML++;
}

//5. Add an event to the plus icon that will increment the price of the Air Jordan V shoe each time the icon is clicked on.
var getPrice4 = document.getElementById('price4');
var getIncrease = document.getElementById('increase');
getIncrease.addEventListener('click', countPlus);

function countPlus() {
    getPrice4.innerHTML = parseInt(getPrice4.innerHTML, 10) + 1;
    getPrice4.appendChild(getIncrease);
}


//6. Add an event to the minus icon that will decrement the price of the Air Jordan V shoe each time the icon is clicked on.
var getPrice5 = document.getElementById('price5');
var getDecrease = document.getElementById('decrease');
getDecrease.addEventListener('click', countMinus);

function countMinus() {
    getPrice5.innerHTML = parseFloat(getPrice5.innerHTML) - 1;
    getPrice5.appendChild(getDecrease);
}

//7. Add an event to the Air Jordan XI shoe that will show another colorway for that shoe after hovering over the image. 
var getImg6 = document.getElementsByTagName('img')[6];
getImg6.addEventListener('mouseover', changeShoe);
getImg6.addEventListener('mouseout', changeBack);

function changeShoe() {
    getImg6.src = 'https://www.sneakerlegends.com/images/stories/virtuemart/product/378038117.jpg';
}

function changeBack() {
    getImg6.src = 'https://www.sneakerlegends.com/images/stories/virtuemart/product/378037623%20378037623%20378037623%20378037623.jpg';
}

//8. Add an event to the Air Jordan XII shoe that will increase the image by 50% after clicking on the image.
var getImg7 = document.getElementsByTagName('img')[7];
getImg7.addEventListener('click', shoelarger);
getImg7.addEventListener('mouseout', shoeSmaller);

function shoelarger() {
    getImg7.style.width = '375px';
    getImg7.style.height = '375px';
}

function shoeSmaller() {
    getImg7.style.width = '250px';
    getImg7.style.height = '250px';
}

//9. Add events to both the plus and minus icon that will add or decrease the price each time the respective icon is clicked on.


//10. Add an event to the Air Jordan XXVIII shoe that will show the famous 'crying Michael Jordan' meme after clicking on the image.