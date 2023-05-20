const Dynamo = require('../models/Dynamo');

test('Dynamo es un Objeto', () => {
    expect(typeof Dynamo).toBe('object');
});

test('dynamo tiene una funcion get y write', () => {
    expect(typeof Dynamo.get).toBe('function');
    expect(typeof Dynamo.write).toBe('function');
});

const TableName = 'UserTable';
const data = { name: 'escobilla', age: '28' };

test('Dynamo inserta', async () => {

    try {
        const res = await Dynamo.write(data, TableName);
        console.log('la res',res);
        expect(res).toBe(data);
    } catch (error) {
        console.log('Error al insertar', error);
    }

});

test('Dynamo trae data', async () => {
    try {
        const res = await Dynamo.get(data.Id, validTableName);
        expect(res).toEqual(data);
    } catch (error) {
        console.log('Error al traer la data', error);
    }
});