const form=document.querySelector(' form')
const fullname=document.querySelector('#fullname')
const email=document.querySelector('#email')
const passward=document.querySelector('#password')


form.addEventListener('submit', (event) =>{
    event.preventDefault()
     console.log(fullname.value);
    console.log(email.value);
     console.log(password.value);



     
     const formData={
         fullname: fullname.value,
         email: email.value,
         passward: password.value
    }
        
    localStorage.setItem('formData',JSON.stringify(formData))
    console.log('Stored Data:', JSON.parse(localStorage.getItem('formData')))
})
const arr=[]
    
  