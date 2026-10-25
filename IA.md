Cómo declarar el uso de la IA

# Registro de uso de IA

| Fecha | Ejercicio | Herramienta | Qué le pedí (prompt) | Qué me respondió | Qué hice con la respuesta |

| 19/10 | Ej. 1 | Claude | Le pedí que actuara como tutor de JavaScript y me explicara las dudas con pseudocódigo, sin darme el código | Me explicó cada paso del ejercicio en pasos en español y con preguntas | Escribí yo el código siguiendo los pasos |
| 19/10 | Ej. 1 | Claude | Le pregunté dónde se pone .toFixed(2) | Me dijo que va pegado a la variable, dentro del console.log, con el número de decimales entre paréntesis | Lo coloqué en cada importe que muestro |
| 19/10 | Ej. 1 | Claude | Le enseñé mi código del IVA | Me avisó de que había escrito el 21 a mano y de que la variable porcentajeIva ya no se usaba | Volví a usar la variable en el cálculo y en el texto |

| 19/10 | Ej. 2 | Claude | Le pedí que me explicara el ejercicio con pseudocódigo | Me dio los pasos en español: descuento, importe con descuento, envío y total | Seguí los pasos para escribir el código yo |
| 19/10 | Ej. 2 | Claude | Le pregunté cómo mostrar el importe con descuento con console.log | Me dijo que siguiera el patrón de mis otras líneas, con el texto, la variable con toFixed(2) y el símbolo del euro | Copié el formato de la línea del envío y cambié la variable |
| 19/10 | Ej. 2 | Claude | Le pregunté qué debía salir con el caso límite de 50.01 | Me razonó el caso paso a paso, con el descuento del 5 % y el envío de 4.95 | Comprobé que mi programa daba el mismo resultado |
| 19/10 | Ej. 2 | Claude | Le pregunté si el condicional que hicimos era un operador ternario, un switch, o un condicional simple o anidado | Me explicó que el descuento es un condicional encadenado (if, else if, else) y el envío es un condicional simple, y que el switch es para valores exactos y no para rangos | Aprendí a distinguir los tipos de condicional|

| 24/10 | Ej. 3 | Claude | Le pedí que me explicara el ejercicio 3 sin usar condicionales ternarios ni encadenados | Me explicó qué son los arrays y los bucles con pseudocódigo, usando solo if simples | Planteé el ejercicio con if y else sencillos |
| 24/10 | Ej. 3 | Claude | Le dije que no tenía claro cómo funcionan los arrays | Me lo explicó con la imagen de una fila de casilleros numerados que empiezan en 0 | Entendí que el primer elemento es la posición 0 y que el último es el total menos 1 |
| 24/10 | Ej. 3 | Claude | Le pedí que me explicara cómo se pasa el bucle for a JavaScript | Me enseñó las tres partes del for (let i, la condición y i++) y qué pasa vuelta por vuelta con un ejemplo de colores | Adapté el for a mis arrays de productos, precios y stock |
| 24/10 | Ej. 3 | Claude | Le mandé mi código completo del ejercicio | Me dijo que la lógica estaba bien y me sugirió usar toFixed(2), renombrar la variable de la posición del más caro y revisar los commits | Apliqué esas mejoras en mi código |

| 24/10 | Ej. 4 | Claude | Le pedí que me explicara el ejercicio 4 con pseudocódigo | Me dio los pasos: variable posicion en -1, bucle que compara cada producto con el buscado, y un if después del bucle para el caso de que no exista | Escribí mi bucle con el if siguiendo esos pasos |
| 24/10 | Ej. 4 | Claude | Le mandé mi código para que lo revisara | Me dijo que faltaba el aviso cuando el producto no existe, y que no sobrescribiera la variable buscada ni guardara el € dentro del precio | Añadí el if que comprueba si la posición es -1 y muestra el aviso |
| 24/10 | Ej. 4 | Claude | Le pregunté qué hace break y si pasa algo si lo quito | Me explicó que break detiene el bucle al encontrar el producto, y que sin él el resultado es el mismo salvo que haya nombres repetidos | Entendí para qué sirve y decidí eliminarlo |
| 24/10 | Ej. 4 | Autocompletado del editor | No se lo pedí: me sugirió la línea break dentro del bucle | Escribió la línea break; | La entendí con ayuda de Claude y la elimine, declarándola aquí |

| 25/10 | Ej. 5 | Claude | Le pedí que me explicara el ejercicio 5 sobre funciones, con pseudocódigo | Me explicó qué es una función, los parámetros, y la diferencia entre return y console.log | Escribí las funciones calcularImporteLinea y calcularIVA |
| 25/10 | Ej. 5 | Claude | Le pregunté dónde declarar la variable let dentro de una función y cómo escribir las llamadas | Me dijo que va dentro de la función y que las llamadas llevan valores reales y console.log fuera | Declaré descuento y envio dentro de sus funciones |
| 25/10 | Ej. 5 | Claude | Le mandé mis funciones con errores de nombres y llaves para que me guiara | Me señaló los nombres que no coincidían con los parámetros y las llaves que faltaban | Corregí los nombres, las llaves y el return en productoMasCaro, valorInventario y buscarProducto |