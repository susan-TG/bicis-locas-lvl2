function validateForm(){
	/* Escribe tú código aquí */
	var name = document.forms["myForm"]["name"].value;
	var lastname = document.forms["myForm"]["lastname"].value;
	var email = document.forms["myForm"]["input-email"].value;
	var password = document.forms["myForm"]["input-password"].value;
	var bicis = document.forms["myForm"]["bicis"].value;

	var exp = /^[a-zA-Z]+$/;
	var expEmail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

	// Nombre
	if (name == null || name == "") {
        document.getElementById('error-name').innerHTML = "El nombre no puede quedar vacio";
        document.getElementById('error-name').classList.remove('error');
        return false;
    }
	if (!name.match(exp)) {
		document.getElementById('error-name').innerHTML = "Solo se permiten caracteres de la A a la Z en el nombre";
        document.getElementById('error-name').classList.remove('error');
		return false;
	}
	if (name[0]!=name[0].toUpperCase()) {
		document.getElementById('error-name').innerHTML = "El nombre tiene que empezar en mayúscula";
        document.getElementById('error-name').classList.remove('error');
		return false;
	}
	// Apellido
	if (lastname == null || lastname == "") {
		document.getElementById('error-lastname').innerHTML = "El apellido no puede quedar vacio";
        document.getElementById('error-lastname').classList.remove('error');
        return false;
    }
	if (!lastname.match(exp)) {
		document.getElementById('error-lastname').innerHTML = "Solo se permiten caracteres de la A a la Z en el nombre";
        document.getElementById('error-lastname').classList.remove('error');
		return false;
	}
	if (lastname[0]!=lastname[0].toUpperCase()) {
		document.getElementById('error-lastname').innerHTML = "El apellido tiene que empezar en mayúscula";
        document.getElementById('error-lastname').classList.remove('error');
		return false;
	}
	// Email
	if (email == null || email == "") {
		document.getElementById('error-email').innerHTML = "El Correo no puede quedar vacio";
        document.getElementById('error-email').classList.remove('error');
        return false;
    }
	if (!email.match(expEmail)) {
		document.getElementById('error-email').innerHTML = "Debes ingresar un email valido";
        document.getElementById('error-email').classList.remove('error');
		return false;
	}
	// Password
	if (password == null || password == "") {
		document.getElementById('error-password').innerHTML = "El password no puede quedar vacio";
        document.getElementById('error-password').classList.remove('error');
        return false;
    }
	if (password.length < 6) {
		document.getElementById('error-password').innerHTML = "El password no puede quedar vacio";
        document.getElementById('error-password').classList.remove('error');
		return false;
	}
	if (password == "password" || password == "123456" || password == "098754") {
		document.getElementById('error-password').innerHTML = 'El password no puede ser "password" o "123456" o "098754"';
        document.getElementById('error-password').classList.remove('error');
		return false;
	}
	// Bicis
	if (bicis == 0) {
		document.getElementById('error-bicis').innerHTML = "Debes elegir algún tipo de bici";
        document.getElementById('error-bicis').classList.remove('error');
		return false;
	}
}
