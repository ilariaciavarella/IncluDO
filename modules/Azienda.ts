import { IPartecipante } from "./Partecipante";

export interface IAzienda {
	nome: string;
	settore: string;
	descrizione: string;
	posizioniAperte: string[];

	offriPosizione(partecipante: IPartecipante, posizione: string): void;
}

export class Azienda implements IAzienda {
	constructor(
		public nome: string,
		public settore: string,
		public descrizione: string,
		public posizioniAperte: string[]
	) {}

	offriPosizione(partecipante: IPartecipante, posizione: string): void {
		console.log(
			`${this.nome} offre a ${partecipante.nome} ${partecipante.cognome} una posizione come ${posizione}`
		);
	}
}
