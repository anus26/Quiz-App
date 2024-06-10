

// // get data from signup
// const signup_form=document.querySelector(' #signup_form')
// const fullname=document.querySelector('#full_name')
// const signup_email=document.querySelector('#signup_email')
// const signup_password=document.querySelector('#signup_password')

// // get data from login
// const login_form=document.querySelector('#login_form')
// const login_email=document.querySelector('#login_email')
// const login_password=document.querySelector('#login_password')

// // for transition elements
// const chk=document.querySelector('#chk')
// const login=document.querySelector('.login')
// const signup=document.querySelector('.signup')
// const loginLabel=document.querySelector('.login label')
// const signupLabel=document.querySelector('.signup label')

// // get data from localStorage
// const User_auth_data=JSON.parse(localStorage.getItem('user_auth_data'))

// // all data will be stored  in this array
// let User_auth_arr
// User_auth_data == null
//  ? (User_auth_arr = [])
// : (User_auth_arr =User_auth_data)

// // alert position settings
// alertify.set('notifier','position','top-center')

// // regular expression for validation
// const emailRegex= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// const passwordRegex=/^(?=.*[A-Z])(?=.*\W).{5,}$/;
// const fullnameRegex=/^.{5,}$/;


// // signup authentication Response
// signup_form.addEventListener('submit',(event)=>{
//     event.preventDefault()
    
// })

// // validate email for signup
// if (!emailRegex.test(signup_email.value)) {
//     alertify.error("Invalid email format");
//     return
    
// }


// // validate passward
//   if (!passwordRegex.test(signup_passward.value)) {
//     alertify.error(
//       "Passward must be at least 5 characters long, with special Character,Captial letter "
//     );
//     return;
    
//   }


  
//   // Validate username
//   if (!fullnameRegex.test(full_name.value)) {
//     alertify.error("Username must be at least 5 characters long");
//     return;
//   }

// //   getting true or false checking email
// let emailExists=User_auth_arr.some(
//     (item)=> item.email === signup_email.value)
//     if (emailExists) {
//       alertify.error("Email is already registered");
//   } else {
//       // Add new user to the array
//       User_auth_arr.push({
//           name: fullname.value,
//           password: signup_password.value,
//           email: signup_email.value
//       });

//       // Update localStorage
//       localStorage.setItem('user_auth_data', JSON.stringify(User_auth_arr));

//       alertify.success("Signup successful");
//   }
// ;

// // Login authentication response
// login_form.addEventListener('submit', (event) => {
//   event.preventDefault();

//   // Check if email and password match any existing user
//   let user = User_auth_arr.find((item) => 
//       item.email === login_email.value && item.password === login_password.value
//   );

//   if (user) {
//       alertify.success("Login successful");
//       // Perform login actions, like redirecting to a dashboard
//   } else {
//       alertify.error("Invalid email or password");
//   }
// });

// Get data from signup form
// const signup_form = document.querySelector('#signup_form');
// const fullname = document.querySelector('#full_name');
// const signup_email = document.querySelector('#signup_email');
// const signup_password = document.querySelector('#signup_password');

// // Get data from login form
// const login_form = document.querySelector('#login_form');
// const login_email = document.querySelector('#login_email');
// const login_password = document.querySelector('#login_password');

// // Transition elements
// const chk = document.querySelector('#chk');
// const login = document.querySelector('.login');
// const signup = document.querySelector('.signup');
// const loginLabel = document.querySelector('.login label');
// const signupLabel = document.querySelector('.signup label');

// // Get data from localStorage
// // const User_auth_data = JSON.parse(localStorage.getItem('user_auth_data'));

// // All data will be stored in this array
// // let User_auth_arr = User_auth_data == null ? [] : User_auth_data;

// // Alert position settings
// // alertify.set('notifier', 'position', 'top-center');

// // Regular expressions for validation
// const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// const passwordRegex = /^(?=.*[A-Z])(?=.*\W).{5,}$/;
// const fullnameRegex = /^.{5,}$/;

// // Signup authentication response
// signup_form.addEventListener('submit', (event) => {
//     event.preventDefault();
    
//     // Validate email for signup
//     if (!emailRegex.test(signup_email.value)) {
//         alertify.error('Invalid email format');
//         return;
//     }

//     // Validate password
//     if (!passwordRegex.test(signup_password.value)) {
//         alertify.error("Password must be at least 5 characters long, with a special character and a capital letter");
//         return;
//     }

//     // Validate full name
//     if (!fullnameRegex.test(fullname.value)) {
//         alertify.error("Full name must be at least 5 characters long");
//         return;
//     }

//     // Check if email already exists
//     let emailExists = User_auth_arr.some((item) => item.email === signup_email.value);

//     if (emailExists) {
//         alertify.error("Email is already registered");
//     } else {
//         // Add new user to the array
//         User_auth_arr.push({
//             name: fullname.value,
//             password: signup_password.value,
//             email: signup_email.value
//         });

//         // Update localStorage
//         localStorage.setItem('user_auth_data', JSON.stringify(User_auth_arr));

//         alertify.success("Signup successful");
//     }
// });

// // Login authentication response
// login_form.addEventListener('submit', (event) => {
//     event.preventDefault();

//     // Check if email and password match any existing user
//     let user = User_auth_arr.find((item) => 
//         item.email === login_email.value && item.password === login_password.value
//     );

//     if (user) {
//         alertify.success("Login successful");
//         // Perform login actions, like redirecting to a dashboard
//     } else {
//         alertify.error("Invalid email or password");
//     }
// });











document.addEventListener("DOMContentLoaded",()=>{

  // registration form element
  const form=document.querySelector('.form')
  const fullname=document.querySelector('#fullname')
  const email=document.querySelector('#email')
  const password=document.querySelector('#password')
  
  // handle registration form submission
  form.addEventListener('submit', (event) =>{
    event.preventDefault()
    // console.log(fullname.value);
    // console.log(email.value);
    // console.log(password.value);

    // basic validation
   if (fullname.value === '' || email.value === '' || password.value ==='') {
    alert ('all field are required')
    return
   } 
    
        // Store data in localStorage (insecure for passwords in real-world applications)
    const formData={
      fullname: fullname.value,
      email: email.value,
      password: password.value
    }
    
    localStorage.setItem('formData',JSON.stringify(formData))
    console.log('Stored Data:', JSON.parse(localStorage.getItem('formData')))
    alert('registration successfull')
    form.reset()
  })
  // const arr=[]
  
  // login form element
  const loginform=document.querySelector('.login_form')
  const loginemail=document.querySelector('#login_email')
  const loginpassword=document.querySelector('#login_password')
  
  
  loginform.addEventListener('submit',(event)=>{
    event.preventDefault()
    const storedData =JSON.parse(localStorage.getItem('formData'))
    if(!storedData){
      console.log('no user registerd');
      returm
    }
    // basic login validation
    if (loginemail.value === storedData.email && loginpassword.value === storedData.password) {
      console.log('login successfull');
      
    }else{
      console.log('invalid email or password');
    }
    loginform.reset()
  })
})