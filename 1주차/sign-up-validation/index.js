const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const age = document.getElementById('age');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
    validateAgeInput();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    const ageValue = age.value.trim();


    if(usernameValue === '') {
        setError(username, '필수 입력 항목입니다!');
    } else {
        setSuccess(username);
    }

    if(emailValue === '') {
        setError(email, '필수 입력 항목입니다!');
    } else if (!isValidEmail(emailValue)) {
        setError(email, '올바른 이메일 형식이 아닙니다.');
    } else {
        setSuccess(email);
    }

    if (ageValue === '') {
        setError(age, '필수 입력 항목입니다!');
    } else if (isNaN(ageValue) || ageValue < 0) {
        setError(age, '나이는 음수가 될 수 없습니다.');
    } else if (isNaN(ageValue) || ageValue % 1 !== 0){
        setError(age, '나이는 소수가 될 수 없습니다.');
    }else if (ageValue < 19) {
        setError(age, '만 19세 이상이어야 합니다.');
    } else {
        setSuccess(age);
    }
    
    if(passwordValue === '') {
        setError(password, '필수 입력 항목입니다!');
    } else if (passwordValue.length < 5 ) {
        setError(password, '비밀번호는 최소 4자리 이상이어야 합니다.')
    } else if (passwordValue.length > 12){
        setError(password, '비밀번호는 최대 12자 이하여야 합니다.')
    } else {
        setSuccess(password);
    }

    if(password2Value === '') {
        setError(password2, '필수 입력 항목입니다!');
    } else if (password2Value !== passwordValue) {
        setError(password2, "비밀번호가 일치하지 않습니다.");
    } else {
        setSuccess(password2);
    }
};



    