# useCounter

Custom hook que implementa la lógica para realizar peticiones asíncronas, a continuación se muestra un ejemplo de uso:

```
const url = 'http://url.to.api';
const { data: null, loading: true, error: null } = useFetch(url);
```

**NOTA**: Es obligatorio proporcionar el URL de donde se obtendrá la información, por el momento solo soporta peticiones de tipo GET.

**data**: Al inicio y en caso de error su valor es null; en caso de éxito contiene la respuesta obtenida de la URL.

**loading**: Indica cuando la petición ha sido completada.

**error**: Su valor inicial es null, en caso de error tendrá el mensaje "Ocurrió un error, intente más tarde".