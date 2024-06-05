const form=document.querySelector('form')
const fullname=document.querySelector('#fullname')
const email=document.querySelector('#email')
const passward=document.querySelector('#passward')


form.addEventListener('submit', (event) =>{
    event.preventDefault()
    console.log(fullname.value);
    console.log(email.value);
    console.log(passward.value);
})

const arr=[]
// let arr
    let form=JSON.parse(localStorage.get('cartItems'))
    if (items === null) {
        
    }else{
        arr=items
    }