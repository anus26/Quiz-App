

// get data from signup
const signup_form=document.querySelector(' #signup_form')
const fullname=document.querySelector('#fullname')
const email=document.querySelector('#email')
const passward=document.querySelector('#password')

// get data from login
const login_form=document.querySelector('#login_form')
const login_email=document.querySelector('#login_email')
const login_passward=document.querySelector('#login_passward')

// for transition
const chk=document.querySelector('#chk')
const login=document.querySelector('.login')
const signup=document.querySelector('.signup')
const loginLabel=document.querySelector('.login label')
const signupLabel=document.querySelector('.singn label')

// get data from localStorage
const User_auth_data=JSON.parse(localStorage.getItem('user_auth_data'))

// all data come in this array
let User_auth_arr
User_auth_data == null
 ? (User_auth_arr = [])
: (User_auth_arr =User_auth_data)

// alert position settings
alertify.set('notifier','position','top-center')

const emailRegex= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwardRegex=/^(?=.*[A-Z])(?=.*\W).{5,}$/;
const fullnameRegex=/^.{5,}$/;


// signup authentication Response
signup_form.addEventListener('submit',(event)=>{
    event.preventDefault()
    let check_method=true;
})

// validate email for signup
if (!emailRegex.test(singup_email.value)) {
    alertify.error('Invalid email format')
    return;
    
}



























// form.addEventListener('submit', (event) =>{
//     event.preventDefault()
//      console.log(fullname.value);
//     console.log(email.value);
//      console.log(password.value);



     
//      const formData={
//          fullname: fullname.value,
//          email: email.value,
//          passward: password.value
//     }
        
//     localStorage.setItem('formData',JSON.stringify(formData))
//     console.log('Stored Data:', JSON.parse(localStorage.getItem('formData')))
// })
// const arr=[]
    
  