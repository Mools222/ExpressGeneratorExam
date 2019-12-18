const mysql = require('promise-mysql');

function getConnection() {
    return mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "password", // Seems that password can't be blank when deploying on Google Cloud (so I just chose "password")
        database: "mefi",
        multipleStatements: false // Prevents some SQL injections
    });
}

exports.read = async function (tableName, primaryKey, id) {
    let connection;
    try {
        connection = await getConnection();
        let query = `SELECT * FROM ${tableName}` + (id ? ` WHERE ${primaryKey} = ${id}` : "");
        let result = await connection.query(query);
        return result.length === 0 ? await Promise.reject(new Error(`Ingen resurse-data fundet`)) : result;
    } catch (e) {
        throw e;
    } finally {
        if (connection)
            connection.end();
    }
};

exports.create = async function (city, category_id, resource_name, description, address, phone, open_hours, website) {
    let connection;
    try {
        connection = await getConnection();
        let query = `INSERT INTO resources VALUES (null, '${city}', '${category_id}', '${resource_name}', '${description}','${address}', '${phone}','${open_hours}', '${website}')`;
        let result = await connection.query(query);
        return result.insertId;
    } catch (e) {
        throw e;
    } finally {
        if (connection)
            connection.end();
    }
};

exports.update = async function (resource_id, city, category_id, resource_name, description, address, phone, open_hours, website) {
    let connection;
    try {
        connection = await getConnection();
        let query = `UPDATE resources SET city = '${city}', category_id = '${category_id}', resource_name = '${resource_name}', description = '${description}', address = '${address}', phone = '${phone}', open_hours = '${open_hours}', website = '${website}' WHERE resource_id = '${resource_id}'`;
        await connection.query(query);
        return resource_id;
    } catch (e) {
        throw e;
    } finally {
        if (connection)
            connection.end();
    }
};

exports.deleteSomething = async function (resource_id) { // "delete" is a keyword in JavaScript, therefore it can't be used as the variable name in this function expression
    let connection;
    try {
        connection = await getConnection();
        let query = `DELETE FROM resources WHERE resource_id = '${resource_id}'`;
        let result = await connection.query(query);
        return result.affectedRows === 0 ? await Promise.reject(new Error(`Ingen resurse med id ${resource_id}`)) : result;
    } catch (e) {
        throw e;
    } finally {
        if (connection)
            connection.end();
    }
};
