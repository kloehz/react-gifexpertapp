import { useEffect, useState } from "react"
import { requestGifs } from '../helpers/GetGifs';
import { IGifMapped } from '../interfaces/gifs';

interface IState {
    data: IGifMapped[],
    loading: boolean
}

export const useFetchGifs = ( category: string ) => {

    const [state, setState] = useState<IState>({
        data: [],
        loading: true,
    });

    useEffect(() => {
        
        requestGifs( category )
            .then( gifs => {
                setState({
                    data: gifs,
                    loading: false
                });
            })

    }, [ category ])

    return state;

}
