const openModalBtn = document.querySelector('.open-modal');
const myDialog = document.querySelector('#myDialog');
const closeModalBtn = document.querySelector('.close-modal')

openModalBtn.addEventListener('click', function(){
    myDialog.showModal()
})

closeModalBtn.addEventListener('click', function(){
    myDialog.close()
})

