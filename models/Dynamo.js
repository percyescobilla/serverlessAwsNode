const AWS = require('aws-sdk');

const documentClient = new AWS.DynamoDB.DocumentClient();


const Dynamo = {
    async get(id, TableName) {
        const params = {
            TableName,
            Key: {
                id,
            },
        };

        const data = await documentClient.get(params).promise();

        if (!data || !data.Item) {
            throw Error('Ocurrio un problema en la consulta');
        }
        console.log(data);

        return data.Item;
    },

    async getAll(TableName) {
        const params = {
            TableName,
        };
        const data = await documentClient.scan(params).promise();

        if (!data || !data.Items) {
            throw Error('Ocurrio un problema en la consulta');
        }
        console.log(data);

        return data.Items;
    },

    async write(data,TableName){
        if(!data.id){
            throw Error('No hay un id');
        }

        const params = {
            TableName,
            Item: data
        };

        const res = await documentClient.put(params).promise();

        if(!res){
            throw Error('Error al insertar la data');
        }

        return data;
    }
};
module.exports = Dynamo;
