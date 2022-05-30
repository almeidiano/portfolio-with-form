import {c} from './minSelector.js';
import '../../../node_modules/izitoast/dist/js/iziToast.min.js';

export default function submitForm() {
	c(".contact-form button").onclick = (e) => {
		e.preventDefault();

		iziToast.error({
			position: 'bottomRight',
			backgroundColor: 'rgba(99, 0, 6, 0.9)',
			theme: 'dark',
			title: 'Ops!',
			message: 'Ocorreu um erro.',
			progressBarColor: '#FFF',
		});

		// iziToast.warning({
		// 	position: 'bottomRight',
		// 	backgroundColor: 'rgba(182, 143, 0, 0.9)',
		// 	theme: 'dark',
		// 	title: 'Aviso',
		// 	message: 'Preencha todos os campos.',
		// 	progressBarColor: '#FFF',
		// });

		// iziToast.success({
		// 	position: 'bottomRight',
		// 	backgroundColor: 'rgba(17, 97, 52, 0.9)',
		// 	theme: 'dark',
		// 	title: 'Sucesso!',
		// 	message: 'Mensagem enviada com sucesso.',
		// 	progressBarColor: '#FFF',
		// });

		const formData = new FormData(c(".contact-form form"));

		for(var values of formData.values()) {
			if(values === "") {

			}
		}
	}
}