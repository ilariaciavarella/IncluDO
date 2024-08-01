import { ICorso } from "./Corso";

export interface IPartecipante {
	nome: string;
	cognome: string;
	paeseOrigine: string;
	livelloIstruzione: string;
	competenzeLinguistiche: string[];
	ambitoInteresse: string;

	iscrivitiCorso(corso: ICorso): void;
}

export class Partecipante implements IPartecipante {
	constructor(
		public nome: string,
		public cognome: string,
		public paeseOrigine: string,
		public livelloIstruzione: string,
		public competenzeLinguistiche: string[],
		public ambitoInteresse: string
	) {}

	iscrivitiCorso(corso: ICorso): void {
		if (corso.elencoIscritti.indexOf(this) !== -1) {
			console.log(
				`${this.nome} ${this.cognome} risulta già iscritt* al corso di ${corso.titolo}`
			);
		} else {
			console.log(
				`${this.nome} ${this.cognome} si è correttamente iscritt* al corso di ${corso.titolo}`
			);
			corso.aggiungiPartecipante(this);
		}
	}
}
