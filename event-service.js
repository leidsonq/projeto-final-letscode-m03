import { addItemToList } from "./html-handle.js";
import { getCityData } from "./async-service.js";

export const handleChange = (targetInput) => {
    targetInput.addEventListener('change', async () => {
        try {
            const dataCity = await getCityData("https://private-9e061d-piweb.apiary-mock.com/venda?state=sp&city=sao-paulo");
            console.log(dataCity);
        } catch (error) {
            throw new Error("Algo deu errado");
        }
    });
}