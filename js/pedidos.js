
"use strict";
const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
const string_length = 5;

let captcha = getCaptcha();
document.querySelector("#captcha-txt").innerHTML = captcha;
document.querySelector("#submit-btn").addEventListener("click", enviar);

function enviar() {
    let captchaInput = document.querySelector("#captcha");
    if (captcha != captchaInput.value) {
        document.querySelector("#captcha-msg").innerHTML = "Captcha inválido";
        captchaInput.focus();
        return;
    }
    document.querySelector("#captcha-form").submit();
}

function getCaptcha() {
    let randomstring = '';
	for (let i=0; i<string_length; i++) {
		let randomNumber = Math.floor(Math.random() * chars.length);
		randomstring += chars.substring(randomNumber, randomNumber + 1);
	}
	return randomstring;
}