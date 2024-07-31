interface IUtente {
	nome: string;
	cognome: string;
	email: string;
	metodoPagamento: string;

	prenotaMezzo(mezzo: IMezzo): void;
}

class Utente implements IUtente {
	constructor(
		public nome: string,
		public cognome: string,
		public email: string,
		public metodoPagamento: string
	) {}

	prenotaMezzo(mezzo: IMezzo): void {
		mezzo.stato = "In uso";
	}
}
