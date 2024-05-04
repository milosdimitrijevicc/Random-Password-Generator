const btn = document.querySelector('.passwordGenerator');
const input = document.querySelector('.passwordPreview');

btn.addEventListener("click" , function(){
  
  const passwordLength = 8;
  const charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let n = charSet.length;
  let password = "";

  for(let i = 0; i < passwordLength; i++){
    password += charSet.charAt(Math.floor(Math.random() * n));
  }

  console.log(password);
  input.value = password;
  return password;   
  

});

