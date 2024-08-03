import { IPartecipante, Partecipante } from "./modules/Partecipante";
import { ICorso, Corso } from "./modules/Corso";
import { IAzienda, Azienda } from "./modules/Azienda";

const AlidaZanesha: IPartecipante = new Partecipante(
	"Alida",
	"Zanesha",
	"Albania",
	"Diploma di Liceo Artistico",
	["Albanese", "Italiano", "Inglese"],
	"Ceramica"
);

const KareemJalal: IPartecipante = new Partecipante(
	"Kareem",
	"Jalal",
	"Tunisia",
	"Esame di Terza Media",
	["Arabo", "Italiano"],
	"Tessitura"
);

const MarynaSvyatoslava: IPartecipante = new Partecipante(
	"Maryna",
	"Svyatoslava",
	"Ucraina",
	"Secondo anno di Liceo Alberghiero",
	["Ucraino", "Inglese"],
	"Pasticceria"
);

const corsoCucina: ICorso = new Corso(
	"Cucina tipica siciliana",
	"Corso di cucina destinato ai gioveni per tramandare le ricette dolci e salate della tradizione siciliana",
	"Cucina",
	"16 mesi",
	[]
);

const corsoCeramiche: ICorso = new Corso(
	"Ceramiche decorate",
	"Laboratorio di artigianato per imparare l'arte della creazione e decorazione a mano dei vasi in ceramica",
	"Artigianato",
	"8 mesi",
	[]
);

const corsoRicamo: ICorso = new Corso(
	"Ricamo classico",
	"Corso per di introduzione al ricamo per approcciarsi agli strumenti e imparare i punti cardine dell'arte",
	"Sartoria",
	"20 mesi",
	[]
);

const PanetteriaDalmazio: IAzienda = new Azienda(
	"Panetteria Dalmazio",
	"Cucina",
	"Panetteria storica del centro di Siracusa, che sforna ogni giorno pane fresco e prodotti tipici della rosticceria siciliana",
	["Panettiere", "Commesso"]
);

const AgoEFilo: IAzienda = new Azienda(
	"Ago e Filo",
	"Sartoria",
	"Nuova sartoria in un piccolo paesino in provincia di Napoli, formata da uno staff giovanissimo, che lavora sia con tecniche tradizionali che innovative",
	["Sarto", "Esperto in ricamo tradizionale"]
);

//Iscritti prima
console.log("Elenchi iscritti prima:");
console.log(corsoCeramiche.elencoIscritti);
console.log(corsoCucina.elencoIscritti);
console.log(corsoRicamo.elencoIscritti);

//Iscrizioni
AlidaZanesha.iscrivitiCorso(corsoCeramiche);
KareemJalal.iscrivitiCorso(corsoRicamo);

corsoCucina.aggiungiPartecipante(MarynaSvyatoslava);
corsoRicamo.aggiungiPartecipante(KareemJalal);

PanetteriaDalmazio.offriPosizione(MarynaSvyatoslava, "Panettiere");
AgoEFilo.offriPosizione(KareemJalal, "Esperto in ricamo tradizionale");

//Iscritti dopo
console.log("Elenchi iscritti dopo:");
console.log(corsoCeramiche.elencoIscritti);
console.log(corsoCucina.elencoIscritti);
console.log(corsoRicamo.elencoIscritti);
