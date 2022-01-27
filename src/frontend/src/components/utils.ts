import bd from "../services/bd";

export const requestPalavra = async (palavra: string) => {
    try{
        const request = await bd.get(`/${palavra}`)

        return request.data[0]
    }catch(err){
        return {
            class: "",
            etymology: "",
            meanings: []
        }
    }
}

export const requestSinonimos = async (palavra: string) => {
    try {
        const request = await bd.get(`/synonyms/${palavra}`)
        
        return request.data
    } catch (err) {
        return []
    }
}