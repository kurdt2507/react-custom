# useForm

Custom hook que permite mantenerse a la escucha de cambios en los input de un form, a continuación se muestra un ejemplo de uso:

```
const initialValues = {
    name: "John",
    lastname: "Doe",
    email: "john.doe@email.com",
    age: 30
};
const [ formValues, handleInputChange, reset ] = useForm(initialValues);
```

**NOTA**: No es obligatorio proporcionar los valores iniciales.

**formValues**: Obtiene los valores obtenidos a partir de los eventos change en los input.

**handleInputChange**: Función para obtener los valores de los input que sufran un cambio.

**reset**: Devuelve los valores que se recibieron al crear la instancia de useForm.