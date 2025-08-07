const db = require('../config/db');

// Función reutilizable que consulta los datos de las diversas tablas
exports.getAllData = (tableName, callback) => {
    const selctDB = `SELECT * FROM ${tableName}`;
    db.query(selctDB, callback);
};

// Función para agregar un dato en la base de datos
exports.postData = (tableName, formData, callback) => {
    const columns = Object.keys(formData);
    const values = Object.values(formData);
    const columnsSQL = columns.join(', ');
    const placeholders = columns.map(() => '?').join(', ');
    const insertInto = `INSERT INTO ${tableName} (${columnsSQL}) VALUES (${placeholders})`;
    db.query(insertInto, values, callback);
};

// Función para obtener un dato por ID
exports.getDataById = (tableName, id, idName, callback) => {
    const getById = `SELECT * FROM ${tableName} WHERE ${idName} = ?`;
    db.query(getById, [id], callback);
};

// Función para seleccionar una consulta especifica
exports.getFilteredData = (tableName, columnName, operator, value, callback) => {
    const query = `SELECT * FROM ${tableName} WHERE ${columnName} ${operator} ?`;
    db.query(query, [value], callback);
};

// Función para actualizar un dato
exports.updateDataById = (tableName, id, idName, formData, callback) => {
    delete formData[idName];
    const columns = Object.keys(formData);
    const values = Object.values(formData);
    const setClause = columns.map(col => `${col} = ?`).join(', ');
    const update = `UPDATE ${tableName} SET ${setClause} WHERE ${idName} = ?`;
    values.push(id);
    db.query(update, values, callback);
};