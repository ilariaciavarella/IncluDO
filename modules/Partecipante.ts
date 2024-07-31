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
		if (corso.elencoIscritti.includes(this)) {
			console.log(
				`${this.nome} ${this.cognome} risulta già iscritto al corso di ${corso.titolo}`
			);
		} else {
			corso.aggiungiPartecipante(this);
			console.log(
				`${this.nome} ${this.cognome} è stato correttamente iscritto al corso di ${corso.titolo}`
			);
		}
	}
}
