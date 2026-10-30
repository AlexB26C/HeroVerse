import Heroe from"./Heroes.js";

const heroes = [
    new Heroe(1, "Negricius", "Llorar desconsoladamente provoca a toda la grada rival", "La afición del Valencia y ver a Rodri levantando un Balón de Oro", "Victimista, arrogante y provocador", 22, 93, 67),
    new Heroe(2, "Mbappies", "Correr a la velocidad de la luz única y exclusivamente para meterse en fuera de juego", "Las defensas adelantadas y las discotecas suecas", "Tortuga, mercenario y dictador", 45, 68, 12),
    new Heroe(3, "Lamine Ilegal", "Regatear a defensas profesionales mientras huye de la policía de extranjería con la mochila del colegio", "El control de pasaportes en los aeropuertos y el toque de queda de su madre", "Menor no acompañado, descarado y tiktoker", 87, 79, 45),
    new Heroe(4, "Frionel Pepsi", "Robar Balones de Oro jugando en Miami y evadir millones a Hacienda sin pisar la cárcel", "La Agencia Tributaria y las remontadas en Champions", "Pechofrío, dictador de vestuario y evasor fiscal", 54, 76, 89),
    new Heroe(5, "Penaldo de Arabia", "Marcar de penalti contra camellos en el minuto 98 y celebrarlo quitándose la camiseta a lo bestia", "Asumir que está acabado, el bótox y que Messi ganara el Mundial", "Egocéntrico, prepotente y obsesionado con su reflejo", 18, 38, 99),
]

const prefijos = [
    "El Monarca",
    "Vizconde",
    "El Puto",
    "Almirante",
    "El Archiduque",
    "Profeta",
    "El Primo",
    "General",
    "El Magnífico",
    "Patriarca",
    "El Tirano",
    "Maestro",
    "El Ídolo",
    "Gobernador",
    "El Santo"
];

const nombres = [
    "Tragaperras",
    "Ibuprofeno",
    "Satisfyer",
    "Airfryer",
    "Vaper",
    "Gymbro",
    "Gorrilla",
    "Cachopo",
    "Desguace",
    "Criptazo",
    "Becario",
    "Dominguero",
    "Tinder",
    "Chupito",
    "Forense"
];

const superpoderes = [
    "Engullir un menú kebab completo en 30 segundos sin masticar ni respirar",
    "Detectar radares de tráfico ocultos usando exclusivamente el olfato",
    "Vomitar de forma controlada y con precisión milimétrica desde un tercer piso",
    "Montar muebles de IKEA sin instrucciones usando solo una cuchara sopera",
    "Ligar en discotecas poniendo voz de doblador de documentales de La 2",
    "Esquivar responsabilidades laborales lanzando bombas de humo imaginarias",
    "Invocar a un enano en patinete que reparte bofetadas al enemigo",
    "Convertir el agua del grifo en cerveza de garrafón al tocarla",
    "Hablar con acento de gángster de los años 20 cada vez que se emborracha",
    "Atraer a todos los perros del parque para que le meen en la pierna simultáneamente",
    "Generar excusas médicamente comprobables en 5 segundos para faltar a cenas familiares",
    "Cantar el himno de la Champions a pleno pulmón para ahuyentar a testigos de Jehová",
    "Sudar Monster Energy por los sobacos cuando se pone nervioso",
    "Dormir profundamente de pie en el transporte público sin caerse",
    "Borrar el historial del navegador con la mente justo antes de desmayarse"
];

const debilidades = [
    "Las facturas de la luz con el precio del megavatio por las nubes",
    "Que alguien intente explicarle qué es exactamente el euríbor",
    "Las resacas de más de tres días provocadas por mezclar licores",
    "Los porteros de discoteca con cuello de toro y ganas de bronca",
    "El mensaje de 'Tenemos que hablar' de su pareja",
    "Las reuniones de vecinos a las que tiene que ir por obligación",
    "Olvidar el PIN del móvil tras reiniciarlo por accidente",
    "Que su madre le llame por su nombre completo delante de sus amigos",
    "Ver un vídeo de 10 minutos para darse cuenta de que es un Rickroll",
    "La gente que le exige un Bizum de 1,20€ por un café",
    "Quedarse encerrado en un baño público sin cobertura ni papel higiénico",
    "Que le pidan amablemente que baje la música a las 4 de la mañana",
    "Las fotos antiguas de Tuenti donde salía con flequillo emo",
    "Los cuñados que saben más que él de virología y geopolítica",
    "El insoportable olor a brócoli hervido en espacios cerrados"
];

const personalidades = [
    "Grasiento y sorprendentemente ágil",
    "Agresivo y llorón a partes iguales",
    "Empanado y con graves delirios de grandeza",
    "Nostálgico y alérgico al esfuerzo físico",
    "Obsesivo y con fobia extrema a la pala de trabajar",
    "Intensito y consumidor diario de podcasts motivacionales",
    "Cuñadísimo y experto en criptomonedas actualmente arruinado",
    "Paranoico y adicto a comprar chatarra en AliExpress",
    "Ruidoso y emocionalmente muy inestable",
    "Tacaño y devorador implacable de buffets libres",
    "Fanfarrón y propenso a sufrir esguinces tontos",
    "Guapo de lejos pero asqueroso de cerca",
    "Intelectualmente nulo y físicamente peligroso",
    "Espiritualmente elevado pero maloliente",
    "Depresivo y experto en humor negro"
];



function addHeroes(name, superpoder, debilidad, personalidad, fuerza, velocidad, inteligencia) {
    let nuevoId = heroes.length + 1;
    heroes.push(new Heroe(nuevoId, name, superpoder, debilidad, personalidad, fuerza, velocidad, inteligencia));
}

function filterHeroes() {

}

function generateRandomHeroe() {
    let nuevoId = heroes.length + 1;

    let nombreRandom = prefijos[Math.floor(Math.random() * prefijos.length)] + " " + nombres[Math.floor(Math.random() * nombres.length)];
    let poderRandom = superpoderes[Math.floor(Math.random() * superpoderes.length)];
    let debilidadRandom = debilidades[Math.floor(Math.random() * debilidades.length)];
    let personalidadRandom = personalidades[Math.floor(Math.random() * personalidades.length)];

    let fuerzaRandom = Math.floor(Math.random() * 101);
    let inteligenciaRandom = Math.floor(Math.random() * 101);
    let velocidadRandom = Math.floor(Math.random() * 101);

    heroes.push(new Heroe(nuevoId, nombreRandom, poderRandom, debilidadRandom, personalidadRandom, fuerzaRandom, velocidadRandom, inteligenciaRandom));
}

//Se hace la media de las tres propiedades y luego le inyecta al heroe una nieva propiedad "nivelDePoder" con la media de las tres
function calcularEstadisticas(heroe){
    let  media = (heroe.fuerza + heroe.velocidad + heroe.inteligencia)/3;
    heroe.nivelDePoder = Math.round(media);

    return heroe.nivelDePoder;
}