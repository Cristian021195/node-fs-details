const fs  = require('fs/promises');

(async ()=> {

    const archivoHandler = await fs.open('./notas.txt', 'r')

    archivoHandler.on("change", async() => {
        let size = (await archivoHandler.stat()).size; //obtiene el tamaño del archivo
        const buff = Buffer.alloc(size); //asigna espacio de memoria al buffer
        const offset = 0; // la ubicacion donde queremos que empiece a llenarse el buffer
        const length = buff.byteLength; // cantidad de bytes en el buffer
        const position = 0; // posicion inicial para leer

        const res = await archivoHandler.read(buff, offset, length, position);//lectura de archivo
        console.log(res.buffer.toString('utf8'));//console.log(res)
    })

    const watcher = fs.watch("./notas.txt"); // funcion generadora asincrona Object [AsyncGenerator] {}
    for await (const event of watcher){
        //if(event.eventType === "change" && event.filename == "notas.txt") ...
        if(event.eventType === "change"){//const content = await fs.readFile('./notas.txt');
            archivoHandler.emit("change")
        }
    }
})()