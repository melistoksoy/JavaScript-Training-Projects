
//Add ıtem form oluşturma
let userFormDOM = document.querySelector('.userForm')
userFormDOM.addEventListener('submit', formHandler)



const alertDOM = document.querySelector("#alert")


const alertFunction = (title, message, className) => `
<div class="alert alert-${className} alert-dismissible fade show" role="alert">
  <strong>${title}</strong> ${message}
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">
  
  </button>
</div>`


function formHandler(event) {
    event.preventDefault()
    const item = document.querySelector("#item")
    if (item.value) {
        addItem(item.value)


    }
    else {
        alertDOM.innerHTML = alertFunction("Dikkat", "Eksik bilgi girdiniz", "danger")
    }
}




let userListDOM = document.querySelector("#userList")


const addItem = (item)=> {
    //li ekleme
    let liDOM = document.createElement('li')
    liDOM.innerHTML = `${item}`
    liDOM.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center')
    userListDOM.append(liDOM)
    //close button ekleme
    var span = document.createElement('span')
    var text = document.createTextNode('\u00D7')
    span.className = 'close'
    span.appendChild(text)
    liDOM.appendChild(span) 

  //x basıldığında ekli elemanı silme
  
  let closeDOM = document.querySelector('.close')
  closeDOM.addEventListener('click',closeText)
  function closeText(item){

  userListDOM.style.display='none'
    }
  }



//Yapılan maddelerin üstüne çizgi eklemek
userListDOM.addEventListener('click', function (item) {

    if (item.target.tagName = 'li') {
        item.target.classList.toggle('checked')
    }})

    
   