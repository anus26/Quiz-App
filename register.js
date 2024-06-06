const form=document.querySelector('form')
const fullname=document.querySelector('#fullname')
const email=document.querySelector('#email')
const passward=document.querySelector('#passward')


form.addEventListener('submit', (event) =>{
    event.preventDefault()
     console.log(fullname.value);
    console.log(email.value);
     console.log(passward.value);



// const arr=[]
// // let arr
//   const formData= localStorage.setItem('formData',JSON.stringify('formData'))
//  'StorageData',JSON.parse(localStorage.getItem('formData'))
// if (formData === null) {
//     console.log('ok');
// }else{
//     console.log('no');
// }

const formData={
       fullname: fullname.value,
       email: email.value,
       passward: passward.value
    }
        
        
    localStorage.setItem('formData',JSON.stringify(formData))
    console.log('Stored Data:', JSON.parse(localStorage.getItem('formData')))
})
const arr=[]
    
    