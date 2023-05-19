const Dynamo = require('models/Dynamo');
const { v4 } = require("uuid");


const getUsers = async (event) => {
    const users = await Dynamo.getAll('UserTable').catch(err => {
        console.log('error in Dynamo Get', err);
        return {
            status: 500,
            msg: 'No se pudo ser procesado la solicitud',
        };
    });

    return {
        status: 200,
        body: JSON.stringify(users),
    };
};

const getUser = async (event) => {

    const { id } = event.pathParameters;
    const user = await Dynamo.get(id, 'UserTable').catch(err => {
        console.log('error in Dynamo Get', err);
        return {
            status: 500,
            msg: 'No se pudo ser procesado la solicitud',
        };
    });

    return {
        status: 200,
        body: JSON.stringify(user),
    };
};

const addUsers = async (event) => {

    const { name, age } = JSON.parse(event.body);
    const createdAt = new Date()
    const id = v4()

    const newUser = {
        id,
        name,
        age,
        createdAt,
    };

    const createUsers = await Dynamo.write(newUser, 'UserTable').catch(error => {
        console.log('Error:', error);
        return {
            statusCode: 500,
            msg: "No se pudo insertar el usuario",
        };
    });

    return {
        statusCode: 200,
        body: JSON.stringify(createUsers),
    };
};




module.exports = {
    getUsers,
    getUser,
    addUsers,
};