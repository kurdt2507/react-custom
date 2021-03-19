import { useState } from 'react';

export const useForm = (initialState = {}) => {
    const [values, setValues] = useState(initialState);
    // Resetea los valores del formulario al initialState
    const reset = () => {
        setValues(initialState);
    };
    // Se mantiene a la escucha de cambios en el input cuyo name coincida con el target
    const handleInputChange = ({ target }) => {
        setValues({
            ...values,
            [ target.name ]: target.value
        });
    };

    return [ values, handleInputChange, reset ];
}
