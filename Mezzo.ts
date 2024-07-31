interface IMezzo {
	readonly ID: number;
	tipo: "Bici" | "Scooter" | "Monopattino";
	stato: "Disponibile" | "In uso";

	assegnaUtente(utente: IUtente): void;
}

class Mezzo implements IMezzo {
	static IDCounter: number = 0;
	ID: number;

	constructor(
		public tipo: "Bici" | "Scooter" | "Monopattino",
		public stato: "Disponibile" | "In uso"
	) {
		this.ID = ++Mezzo.IDCounter;
	}

	assegnaUtente(utente: IUtente): void {
		this.stato = "In uso";
	}
}
