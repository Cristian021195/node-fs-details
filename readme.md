# Node JS - File System - buenas practicas
## _El codigo y la explicacion es por parte de otro desarrollador, la idea es transcribir al español dicha explicación_

Si bien leer, crear, editar y borrar archivos son tareas comunes en la programación, siempre hay que tener
en cuenta diversos factores antes de implementarlo en codigo, y tambien hacernos una serie de preguntas.

- ¿Son archivos pesados o pequeños?
- ¿Son archivos de texto, binarios, o codificados?
- ¿Importa el orden de ejecución al momento de operar con estos archivos?
- ¿Los archivos son impresindibles respecto a la logica de la aplicación?

### Codigos e Implementaciones de funciones que debemos tener en cuenta

- **require('fs')** vs **require('fs/promise')**
- Segun el caso, pero el uso de: **fs.watch(path)**, nos permite tener observados en tiempo real archivos y si cambian.
- Abrir siempre los archivos antes de operar con ellos: **fs.open(path, flag)**, 'r', 'w' ...
- Cerrar el archivo en caso de no necesitar o comprobar existencias: **existingFile.close()**
- Eliminar archivos con rutas especificas y absolutas: **fs.unlink(path)**
- Renombrar archivos: **fs.rename(oldPath, newPath)**
- Agregar contenido al archivo: **fs.open(path, flag)**, ver las flags / babderas correspondientes.
- Uso de eventos, emmiters, on("eventName", async-or-not-callback) y emmit("eventName")
- Lectura de archivos, fileHandler.read: **fileHandler.read(buffer, offset, length, position)**
