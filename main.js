const openModalBtn = document.querySelector('.open-modal');
const myDialog = document.querySelector('#myDialog')

openModalBtn.addEventListener('click', function(){
    myDialog.showModal()
})