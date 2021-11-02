import { structureItensToList} from "./html-handle.js";
import { getCityData } from "./async-service.js";
import {validateCity} from "./util-service.js";

export const handleChange = (targetInput) => {
    targetInput.addEventListener('change', async () => {
        try {
            const search = validateCity(targetInput.value);
            const dataCity = await getCityData(`https://private-9e061d-piweb.apiary-mock.com/venda?state=${search[0]}&city=${search[1]}`);
            const arrCityInfo = dataCity.search.result.listings;
            console.log(arrCityInfo);
            structureItensToList(arrCityInfo);
            

        } catch (error) {
            throw new Error("Algo deu errado");
        }
    });
}