# useCounter

Custom hook que implementa la lógica para un contador, a continuación se muestra un ejemplo de uso:

```
const { counter, increment, decrement, reset } = useCounter();
```

**NOTA**: Por defecto se inicializa con un valor de 10, si se desea cambiar el valor inicial se puede pasar como parámetro al crear la instancia, ejemplo:
```
const { counter, increment, decrement, reset } = useCounter(0);
```

**counter**: Contiene el state con el valor actual del contador.

**increment**: Función para aumentar en 1 unidad el state con el valor del contador.

**decrement**: Función para disminuir en 1 unidad el state con el valor del contador.

**reset**: Función para regresar el state al valor original con el que se creó.