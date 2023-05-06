/* const button = document.getElementById("submit");
//const mail = document.getElementById("obtain");
button.addEventListener("click", function(){
    const inputText = document.getElementById('obtain').value;
    const subject = 'Reset Password';
    const body = inputText;
    const mailtoLink = `mailto:?subject=${subject}&body=${body}`;
  
    window.location.href = mailtoLink;
});


//orignal code form chatgpt expect the "obtain" part
function sendEmail() {
    const inputText = document.getElementById('obtain').value;
    const subject = 'Subject of email';
    const body = inputText;
    const mailtoLink = `mailto:?subject=${subject}&body=${body}`;
  
    window.location.href = mailtoLink;
  }
  */


  function sendEmail() {
    const inputText = document.getElementById('obtain').value;
    const subject = 'Reset Password';
    const body = inputText;
    const mailtoLink = `mailto:?subject=${subject}&body=${body}`;
  
    window.location.href = mailtoLink;
  }

  