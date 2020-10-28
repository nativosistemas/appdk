class Farmacia {
    constructor(id, nombre, direccion) {
        this.id = id;
        this.nombre = nombre;
        this.direccion = direccion;
    }
}
class Modulo {
    constructor(id, nombre, descripcion, laboratorio) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.laboratorio = laboratorio;
        this.moduloDetalle = [];
    }
}
class ModuloDetalle {
    constructor(descripcion, producto, precio, precioDto) {
        this.descripcion = descripcion;
        this.producto = producto;
        this.precio = precio;
        this.precioDto = precioDto;
    }
}
class Pedido {
    constructor(farmacia, modulo, cantidad) {
        this.fechaCreacion = Date.now();
        this.farmacia = farmacia;
        this.modulo = modulo;
        this.cantidad = cantidad;
    }
}
var l_Farmacia =[];
var l_Modulo =[];
function CargarTodo(){
    const oFarmacia_1 = new Farmacia(1, 'La red', 'San justo 343');
    l_Farmacia.push(oFarmacia_1);
    const oFarmacia_2 = new Farmacia(2, 'Cassini', 'Urquiza 2311');
    l_Farmacia.push(oFarmacia_2);
    const oFarmacia_3 = new Farmacia(3, 'Remedio y escalada', 'Rioja 896');
    l_Farmacia.push(oFarmacia_3);
    //
    var l_ModuloDetalle_1 =[];
    const oModuloDetalle_1 = new ModuloDetalle('3% mas', 'aspirina', 3.2, 2.5);
    l_ModuloDetalle_1.push(oModuloDetalle_1);
    const oModuloDetalle_2 = new ModuloDetalle('2% menos', 'curitas', 2, 1.7);
    l_ModuloDetalle_1.push(oModuloDetalle_2);
    const oModuloDetalle_3 = new ModuloDetalle('8%', 'talco', 5, 4);
    l_ModuloDetalle_1.push(oModuloDetalle_3);

    var l_ModuloDetalle_2 =[];
    const oModuloDetalle_4 = new ModuloDetalle('seea', 'rocio', 3.2, 2.5);
    l_ModuloDetalle_2.push(oModuloDetalle_4);
    const oModuloDetalle_5 = new ModuloDetalle('2% menos', 'juliana', 2, 1.7);
    l_ModuloDetalle_2.push(oModuloDetalle_5);

    var l_ModuloDetalle_3 =[];
    const oModuloDetalle_6 = new ModuloDetalle('8%', 'oleo', 13, 7);
    l_ModuloDetalle_3.push(oModuloDetalle_6);
    //
    const oModulo_1 = new Modulo(1, 'Transfer 333', '50% de descuento', 'Bayer');
    oModulo_1.moduloDetalle = l_ModuloDetalle_1;
    l_Modulo.push(oModulo_1);
    const oModulo_2 = new Modulo(2, 'Combo 741', '80% de descuento', 'Bayer');
    oModulo_2.moduloDetalle = l_ModuloDetalle_2;
    l_Modulo.push(oModulo_2);
    const oModulo_3 = new Modulo(3, 'Directo 741', '30% de descuento', 'Monsanto');
    oModulo_3.moduloDetalle = l_ModuloDetalle_3;
    l_Modulo.push(oModulo_3);
    const oModulo_4 = new Modulo(4, 'Duper j', '10% de descuento', 'Bayer');
    l_Modulo.push(oModulo_4);
    //
return l_Modulo;

}

export default CargarTodo;