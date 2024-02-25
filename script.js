const pwd = document.querySelector('.error1');
const pwd2 = document.querySelector('.error2');

pwd.addEventListener('keyup', () => {
  if(pwd.value === pwd2.value) {
    pwd.style.border = '1px solid black';
    pwd2.style.border = '1px solid black';
  } else {
    pwd.style.border = '1px solid red';
    pwd2.style.border = '1px solid red';
  }
});

pwd2.addEventListener('keyup', () => {
  if(pwd.value === pwd2.value) {
    pwd.style.border = '1px solid black';
    pwd2.style.border = '1px solid black';
  } else {
    pwd.style.border = '1px solid red';
    pwd2.style.border = '1px solid red';
  }
});