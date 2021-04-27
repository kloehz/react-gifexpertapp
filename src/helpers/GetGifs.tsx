import axios from 'axios';
import { Gifs, IGifMapped } from '../interfaces/gifs';

export const getGifs = axios.create({
    baseURL: 'https://api.giphy.com/v1/gifs'
});


export const requestGifs = async ( category: string ) => {
    const res = await getGifs.get<Gifs>(`/search?q=${ encodeURI(category) }&limit=10&api_key=CCqcAB6pyZk53EmH5LdddQsEWn2UdDPL`);
    const data = res.data.data;
    const gifs: IGifMapped[] = data.map( gif => {
        return {
            id: gif.id,
            title: gif.title,
            url: gif.images?.downsized_medium.url
        }
    });

    return gifs;
}
