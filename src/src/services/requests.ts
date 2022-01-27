import axios from "axios"
import cheerio from "cheerio"
import {sanitizeWord} from "./utils"
import type { DataPalavra, Sinonimos} from "../types"

export const requestMeanings = async (word: string): Promise<DataPalavra> => {
    const sanitizedWord = sanitizeWord(word);

    const structure: DataPalavra = {
        class: '',
        meanings: [],
        etymology: '',

    };

    try {

        const { data: dicioHTML } = await axios.get(`https://dicio.com.br/${sanitizedWord}`);

        const $ = cheerio.load(dicioHTML);

        const meanings: DataPalavra[] = [];
        meanings.push(structure);

        $('.significado span').each((_, element) => {

            const text = $(element).text();
            const cheerioElement = $(element);

            if (cheerioElement.hasClass('cl')) {
                if (meanings.length === 1 && meanings[0].class === '' && meanings[0].meanings.length === 0)
                    meanings[0].class = text;
                else
                    meanings.push({ class: text, meanings: [], etymology: '' });
            }

            else if (cheerioElement.hasClass('etim'))
                meanings[meanings.length - 1].etymology = text;

            else if (!cheerioElement.hasClass('tag'))
                meanings[meanings.length - 1].meanings.push(text);

        });

        if ($('.conjugacao').html()) meanings.push({ ...structure, meanings: [] });

        $('.conjugacao span').each((_, element) => {

            const text = $(element).text();
            const cheerioElement = $(element);

            if (cheerioElement.hasClass('etim'))
                meanings[meanings.length - 1].etymology = text;

            else if (!cheerioElement.hasClass('tag'))
                meanings[meanings.length - 1].meanings.push(text);

        });

        return meanings[0]

    } catch (err) {
        console.error(err);
        
        return structure
    }
}

export const requestSynonyms = async (word: string): Promise<Sinonimos> => {
    
    const sanitizedWord = sanitizeWord(word);

    try {

        const { data: dicioHTML } = await axios.get(`https://dicio.com.br/${sanitizedWord}`);

        const $ = cheerio.load(dicioHTML);

        const synonyms: Sinonimos = [];

        $('.sinonimos').each((_, children) => {

            if ($(children).text().includes("é sinônimo de:")) {

                $('a', children).each((_, element) => {

                    const text = $(element).text();

                    if (text) synonyms.push(text)

                });

            }

        });

        return synonyms

    } catch (err) {
        console.log(err);
        
        
        return []
    }
}