(function(d, f){
	d.addEventListener('DOMContentLoaded', () => {
		// Initialize Firebase
		var config = {
			apiKey: "AIzaSyDdzVE1lr673KIfOqh9Y2P7dZhR4Y6NCpM",
			authDomain: "prueba-385b0.firebaseapp.com",
			databaseURL: "https://prueba-385b0.firebaseio.com",
			projectId: "prueba-385b0",
			storageBucket: "",
			messagingSenderId: "281079538204"
		  };
		f.initializeApp(config);
		
		const inputCorreo = d.querySelector('#txtCorreo')
		const inputClave = d.querySelector('#txtClave')
		const botonLogin = d.querySelector('#btnLogin')
		const botonRegistro = d.querySelector('#btnRegistro')

		botonRegistro.addEventListener('click', function(e) {
			e.preventDefault()

			const correo = inputCorreo.value
			const clave = inputClave.value
			console.log(correo)
			console.log(clave)
			f.auth().createUserWithEmailAndPassword(correo, clave)
			.then(() => {
				console.log('usuario registrado')
			})
			.catch(error => {
				console.log(error)
			})
		})

		botonLogin.addEventListener('click', function(e) {
			e.preventDefault()

			const correo = inputCorreo.value
			const clave = inputClave.value

			f.auth().signInWithEmailAndPassword(correo, clave)
			.then(() => {
				console.log('logueado')
			})
			.catch(error => {
				console.log(error)
			})
		})
	})
})(document, firebase)