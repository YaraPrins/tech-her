const btnRemove = document.getElementById('btnRemoveAccount');
const enterNameField = document.getElementById('removeAccountField');

btnRemove.addEventListener('click',  () => {

    btnRemove.classList.add('none');
    enterNameField.classList.remove('fieldsetNone');
});


