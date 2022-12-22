var items = ['Java çalış', 'Kodlama yap', 'Kitap oku']
var userListDOM = document.querySelector('#userList')


items.forEach(function(item) {

    createItem(item)

})

//Yapılan maddenin üstünü çizmek

userListDOM.addEventListener('click', function (item) {

    if (item.target.tagName == 'LI') {
        item.target.classList.toggle('checked')
        toggleDeleteButton()
    }
})

//Delete all butonu eklemek
function toggleDeleteButton(){
    var checkList = document.querySelectorAll('.checked')
 
    if(checkList.length>0){
        //check edilen madde varsa delete all butonunu görünür yapar
        document.querySelector('#deleteAll').classList.remove('d-none')  
     }
     else {
        // check edilen madde yoksa delete all butonunu ortadan kaldırır
        document.querySelector('#deleteAll').classList.add('d-none')  
     }
}


//Delete all a tıklandığında seçili maddelerin hepsini silme

var deleteAllDOM = document.querySelector('#deleteAll')
deleteAllDOM.addEventListener('click',function(){

    event.preventDefault()
    var element=document.querySelectorAll('.checked')
    element.forEach(function(item){
    item.style.display = 'none'
    item.classList.remove('checked') 
    document.querySelector('#deleteAll').classList.add('d-none') }
    )
})

// Buttona tıklandığında madde eklemek

document.querySelector('#btn').onclick = function () {
    var item = document.querySelector('#txtItem').value

    if (item === '') {
        alert('Lütfen bir değer giriniz.')
        return;
    }
    event.preventDefault()
    createItem(item);
}
//Select kullanarak seçim yapmak
var select = document.getElementById('form-select')
var options=document.querySelectorAll('#value')

function change(){
var value=select.value
console.log(value)

// Value değiştiğinde completed uncompleted maddelerin gösterilmesi

if(value==1){
    var element=document.querySelectorAll('.list-group-item')
    element.forEach(function(item){
        item.classList.remove('d-none')
        item.style.display='flex'

} )}

if (value==2) {
    var element= document.querySelectorAll('.list-group-item')
    element.forEach(function(item){

    if (item.classList.contains('checked')) {
        item.classList.remove('d-none')
        item.style.display='flex'
    } 
    else if(!item.classList.contains('checked'))
        item.classList.add('d-none')
    
   
    
    })}

if(value==3) {
    var element=document.querySelectorAll('.list-group-item')
    element.forEach(function(item){
        if (item.classList.contains('checked')) {
          item.classList.add('d-none') }
        else if(!item.classList.contains('checked'))
        item.classList.remove('d-none')
          item.style.display='flex'
    
})}


    
}


select.onchange=change
change()




function createItem(item) {

    var liDOM = document.createElement('li')
    var t = document.createTextNode(item)
    liDOM.classList.add('list-group-item')
    liDOM.appendChild(t)
    userListDOM.append(liDOM)

    //Close button ekleme
    var span = document.createElement('span')
    var text = document.createTextNode('\u00D7')
    span.className = 'close'
    span.appendChild(text)
    liDOM.appendChild(span)

    // x basıldığında maddeyi silmek
    span.onclick = function () {
        var li = this.parentElement
        li.style.display = 'none'
        li.classList.remove('checked')
    }
}





// var startDOM = document.querySelector('#start')
// startDOM.addEventListener('click', function () {

//   startDOM.style.display = 'none'

// })

// var cardBackDOM = document.querySelectorAll('.card-back')
// var cardFrontDOM = document.querySelectorAll('.card-front-visible')
// let flipCardOne, flipCardTwo

// cardBackDOM.forEach(function (item) {
//   item.addEventListener('click', function (e) {

//     let nextSibling = item.nextElementSibling
//     nextSibling.classList.add('clicked')

//     let flipCard = (e.currentTarget)
//     // let clickedCard=(e.currentTarget.id)

//     if (!flipCardOne) {
//       //  cardOne=clickedCard
//       flipCardOne = flipCard
//     }
//     else if (flipCardOne) {
//       // cardTwo=clickedCard
//       flipCardTwo = flipCard
//     }

//     // console.log(cardOne,cardTwo)
//     console.log(flipCardOne, flipCardTwo)

//     if (flipCardTwo) {
//       if (flipCardOne !== flipCardTwo) {
//         console.log("not matched")
//         flippedCard(flipCardOne, flipCardTwo)
        
//       }
//     }
//     function flippedCard(card1, card2) {
      

//     }
  
//     cardFrontDOM.forEach(function (it) {

//       if (nextSibling.classList.contains('clicked')) {
//         nextSibling.classList.add('flip')

//       }

//       else if (!nextSibling.classList.contains('clicked')) {
//         nextSibling.style.display = 'none'
//       }
     
     

//     })

//   })






// })