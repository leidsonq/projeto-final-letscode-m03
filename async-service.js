export const getCityData = async (url) =>{
    try {
        const data = await fetch(url);
        return await data.json();
    } catch (error) {
        throw new Error ("Algo deu errado");
    }
} 