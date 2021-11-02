import { checkPluralword, translateWords, formatInCurrencyBR } from "./util-service.js";

const buildElment = (element, type, text, classs) => {
    const item = document.createElement(type);
    item.classList.add(classs);
    item.textContent = text;
    element.append(item);
}

const addItemToList = (item) => {
    const elementMain = document.querySelector("#section-main");

    const elementItem = document.createElement('div');
    elementItem.classList.add("div-item");
    elementMain.append(elementItem);

    const element = document.createElement('div');
    element.classList.add("div-content-item");
    elementItem.append(element);

    const dataAddress = item.listing.address;
    const address = dataAddress.street + ", " + dataAddress.streetNumber + " - " + dataAddress.neighborhood + ", "
        + dataAddress.city + " - " + dataAddress.stateAcronym;

    buildElment(element, 'p', address, "font-address");

    const name = item.link.name;
    buildElment(element, 'p', name, "font-description");

    const structureInfo = [
        item.listing.usableAreas + " m²",
        item.listing.bedrooms + checkPluralword(" Quarto", item.listing.bedrooms),
        item.listing.bathrooms + checkPluralword(" Banheiro", item.listing.bathrooms),
        item.listing.parkingSpaces + checkPluralword(" Vaga", item.listing.parkingSpaces)];

    buildElment(element, 'p', structureInfo.join(" "), "font-structure-item");

    const amenities = item.listing.amenities;
    const listAmenities = amenities.map((item) => {
        return translateWords(item);
    })

    const elementAmenities = document.createElement('div');
    elementAmenities.classList.add("flexible-row")
    element.append(elementAmenities);

    listAmenities.forEach(item => {
        buildElment(elementAmenities, 'button', item, 'button-amenities');
    });

    const price = item.listing.pricingInfos[0].price;
    buildElment(element, 'p', formatInCurrencyBR(price), "font-price");

    if (item.listing.unitTypes[0] === 'APARTMENT') {
        if (item.listing.pricingInfos[0].monthlyCondoFee !== "") {
            const monthlyCondoFee = item.listing.pricingInfos[0].monthlyCondoFee;
            buildElment(element, 'p', "Condomínio: " + formatInCurrencyBR(monthlyCondoFee), "font-monthlyCondoFee");
        } else {
            buildElment(element, 'p', "Condomínio: -");
        }
    }

}

export const structureItensToList = (arrItems) => {
    arrItems.forEach((item) => {
        addItemToList(item);
    })
}