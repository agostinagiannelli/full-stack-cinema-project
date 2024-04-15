const CarritoCompra = require('../index');

describe('Tests sobre la clase CarritoCompra', () => {
    let carrito;
    beforeEach(() => {
        carrito = new CarritoCompra();
    });

    const producto1 = { name: "Producto 1", price: 5 };
    const producto2 = { name: "Producto 2", price: 10 };

    it("CarritoCompra debe ser una clase", () => {
        expect(typeof CarritoCompra).toBe("function");
        expect(carrito instanceof CarritoCompra).toBe(true);
    });

    it("Debe iniciar la propiedad 'productos' como un array vacío", () => {
        expect(Array.isArray(carrito.productos)).toBe(true);
        expect(carrito.productos).toHaveLength(0);
    });

    it("El método 'agregarProducto' debe recibir un objeto representando un producto y agregarlo al carrito", () => {
        carrito.agregarProducto(producto1);
        expect(carrito.productos).toHaveLength(1);
        expect(carrito.productos[0]).toEqual(producto1);

        carrito.agregarProducto(producto2);
        expect(carrito.productos).toHaveLength(2);
        expect(carrito.productos[1]).toEqual(producto2);
    });

    it("El método 'calcularTotal' debe calcular el total de la compra sumando los precios de todos los productos en el carrito", () => {
        carrito.agregarProducto(producto1);
        carrito.agregarProducto(producto2);
        expect(carrito.calcularTotal()).toBe(15);
    });

    it("El método 'aplicarDescuento' debe aplicar un descuento al total de la compra según el porcentaje especificado", () => {
        carrito.agregarProducto(producto1);
        carrito.agregarProducto(producto2);
        expect(carrito.aplicarDescuento(20)).toBe(12);
        expect(carrito.aplicarDescuento(50)).toBe(7.5);
    });
});