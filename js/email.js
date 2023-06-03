
const userName = document.getElementById('user-name').value
const userMail = document.getElementById('user-mail').value
const userMessage = document.getElementById('message').value
// console.log(userName)
// console.log(userMail)
// console.log(userMessage)

function handleclick(){

//Form VAlidation
if(userName===' ' && userMail===' ' && userMessage===' '){
    alert('Please! fill the section')
}
// else{

var templateParams = {
    to_name: 'Cara',
    from_name: document.getElementById('user-name').value,
   from_email: document.getElementById('user-mail').value,
   message: document.getElementById('message').value
};
 
console.log('clicked under function')
emailjs.send('service_ew15ate', 'template_9okqoqu', templateParams)
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
       alert('Sent successfully')
    }, function(error) {
       console.log('FAILED...', error);
       alert('Something went wrong')
    });

    emailjs.sendForm('service_ew15ate', 'template_9okqoqu', '#myForm')
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });
}
// }
