//valida as possibilidades de entrada para as cidades de sp e rj
export const validateCity = (city) => {
    const saoPaulo = ["sp","sao paulo", "sao-paulo"];
    const rioDeJaneito = ["rj", "rio de janeiro", "rio-de-janeiro"];
    const cityLowerCase = city.toLocaleLowerCase();
    const cityNoAccent = cityLowerCase.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    const search = saoPaulo.indexOf(cityNoAccent) != -1 ? ["sp", "sao-paulo"] : rioDeJaneito.indexOf(cityNoAccent) != -1 ? ["rj", "rio-de-janeiro"]: [" ", city]; 
    return search;
}

//verifica a necessidade da palavra ser exibida no plural ou não
export const checkPluralword = (word, number) => {
    if (number > 1) return word+"s";
    if (number < 2) return word;
}


//retorna a palavra traduzida se ela constar no dicionário, caso contrário retorna a própria palavra
export const translateWords = (word) => {
    let wordTranslated = "";
    switch (word) {
        case 'PARTY_HALL': wordTranslated = "Salão de festas"
        break;
        case 'FURNISHED': wordTranslated = "Mobiliada"
        break;
        case 'FIREPLACE': wordTranslated = "Lareira"
        break;
        case 'POOL': wordTranslated = "Piscina"
        break;
        case 'BARBECUE_GRILL': wordTranslated = "Churrasqueira"
        break;
        case 'GATED_COMMUNITY': wordTranslated = "Condomínio Fechado"
        break;
        case 'PLAYGROUND': wordTranslated = "Parque Infantil"
        break;
        case 'ELEVATOR': wordTranslated = "Elevador"
        break;
        case 'SPORTS_COURT': wordTranslated = "Quadra de esportes"
        break;
        case 'PETS_ALLOWED': wordTranslated = "Aceita Animais"
        break;
        case 'AMERICAN_KITCHEN': wordTranslated = "Cozinha americana"
        break;
        case 'TENNIS_COURT': wordTranslated = "Quadra de tênis"
        break;
        case 'LAUNDRY': wordTranslated = "Lavanderia"
        break;
        case 'GYM': wordTranslated = "Academia"
        break;
        case 'ELECTRONIC_GATE': wordTranslated = "Portão eletrônico"
        break;
        case 'CINEMA': wordTranslated = "Cinema"
        break;
        case 'SAUNA': wordTranslated = "Sauna"
        break;
        case 'GARDEN': wordTranslated = "Jardim"
        break;
        case 'AIR_CONDITIONING': wordTranslated = "Ar-condicionado"
        break;
        case 'BICYCLES_PLACE': wordTranslated = "Local de bicicletas"
        break;       
    }
    return wordTranslated;
}


//retorna um valor em formato de moeda brasileira
export const formatInCurrencyBR = (price) => {
    const priceInt = parseInt(price);
    return priceInt.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
} 