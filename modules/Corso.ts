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
		if (this.elencoIscritti.indexOf(partecipante) === -1) {
			this.elencoIscritti.push(partecipante);
			console.log(
				`${partecipante.nome} ${partecipante.cognome} è stato aggiunt* all'elenco degli iscritti del corso di ${this.titolo}`
			);
		} else {
			console.log(
				`${partecipante.nome} ${partecipante.cognome} è già presente nella lista degli iscritti a questo corso`
			);
		}
	}
}
