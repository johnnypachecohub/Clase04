(function(d, f){
	d.addEventListener('DOMContentLoaded', () => {
		// Initialize Firebase
		var config = {
			apiKey: "AIzaSyCJjTyVmf2de_Au0q7izPEAd5I2ykSbKDY",
			authDomain: "inventario-76e60.firebaseapp.com",
			databaseURL: "https://inventario-76e60.firebaseio.com",
			projectId: "inventario-76e60",
			storageBucket: "inventario-76e60.appspot.com",
			messagingSenderId: "346250501510"
		};
		f.initializeApp(config);
		
		const inputCorreo = d.querySelector('#txtCorreo')
		const inputClave = d.querySelector('#txtClave')
		const botonLogin = d.querySelector('#btnLogin')
		const botonRegistro = d.querySelector('#btnRegistro')

	})
})(document, firebase)