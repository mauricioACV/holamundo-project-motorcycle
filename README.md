# holamundo-project-motorcycle
Repositorio ejercicio N°1 proyecto canal Youtube HolaMundo

El acceder a index.html, la app solicitará ingresar un nombre para continuar.
Se generan los tramos horarios sobre un arreglo, con un ciclo de iteración For.
Los tramos horarios van desde 8:00 hasta 20:30 hrs.

Para simular que otros usuarios han tomado algún rescurso de motocicleta, lo hago de la siguiente forma:
  - Al primer horario que parte a las 8:00 le asigno 8 motocicletas
  - Al siguiente horario 8:30 le asigno un numero aleatorio de entre 0 y 8, y asi lograr simular que diferentes recursos ya fueron tomados por otros usuarios.
  - Al siguiente nuevamente le asigno 8 motos, y al siguiente aleatorio. Y así sucesivamente.

Con lo anterior logro que aparezcan 8 motos disponibles siempre en algún horario, y en otros se obtiene, por lo general, que aparezcan en cero las motos disponibles, para demostrar que no se puede tomar el recurso.

Por lo general al cargar la página index.html, se obtienen diversos valores para la cantidad de motos disponibles. Seria ideal que algunos recursos de motos aparecieran con cero motos disponibles y otros con solo una moto disponible, esto con la finalidad de poder probar por completo las funcionalidades de la app. Como la obtención de estos valores dependen de lo que arroje la generación de números aleatorios, puede que se necesite recargar la página para obtener estos valores ideales.

NOTA: Este código pertenece a un programador muy novato en JavaScript, solo llevo 2 meses avanzando un curso de ES6. Incluso, no sé si este archivo README esta bien hecho. Tengame paciencia jeje.
