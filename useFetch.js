import { useEffect, useRef, useState } from 'react';

export const useFetch = (url) => {
    const isMounted = useRef(true);
    const [state, setState] = useState({ data: null, loading: true, error: null });

    if (!url) {
        throw new Error('La URL es obligatoria');
    }

    useEffect(() => {
        return () => {
            isMounted.current = false;
        }
    }, []);

    useEffect(() => {
        setState({ data: null, loading: true, error: null });
        
        fetch(url)
                .then((response) => response.json())
                .then((data) => {
                    if (isMounted.current) {
                        setState({
                            data,
                            loading: false,
                            error: null
                        });
                    }
                })
                .catch((error) => setState({
                    data: null,
                    loading: false,
                    error: 'Ocurrió un error, intente más tarde'
                }));
    }, [ url ]);

    return state;
}
