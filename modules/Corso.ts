import { IPartecipante } from "./Partecipante";

export interface ICorso {
	titolo: string;
	descrizione: string;
	settoreProfessionale: string;
	durata: string;
	elencoIscritti: IPartecipante[];

	aggiungiPartecipante(partecipante: IPartecipante): void;
}

export class Corso implements ICorso {
	constructor(
		public titolo: string,
		public descrizione: string,
		public settoreProfessionale: string,
		public durata: string,
		public elencoIscritti: IPartecipante[]
	) {}

	aggiungiPartecipante(partecipante: IPartecipante): void {
		this.elencoIscritti.push(partecipante);
		console.log(
			`${partecipante.nome} ${partecipante.cognome} è stato aggiunto agli iscritti del corso di ${this.titolo}`
		);
	}
}
