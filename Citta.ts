interface ICitta {
	nomeCitta: string;
	mezziDisponibili: IMezzo[];

	aggiungiMezzo(mezzo: IMezzo): void;
}

class Citta implements ICitta {
	constructor(public nomeCitta: string, public mezziDisponibili: IMezzo[]) {}

	aggiungiMezzo(mezzo: IMezzo): void {
		this.mezziDisponibili.push(mezzo);
	}
}
