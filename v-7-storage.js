//********************local Storage and session Storage***********************

const addlocalStorage = () => {
    const idInput = document.getElementById('storage-id');
    const id = idInput.value ;
    document.getElementById('storage-id').value = '';
    const valueInput = document.getElementById('storage-value');
    const value = valueInput.value ;
    document.getElementById('storage-value').value = '';
    // set localStorage value and key 
    if(id && value){
        localStorage.setItem(id,value);
    }
    // to clear 
    idInput.value = '';
    valueInput.value = '';
  
}