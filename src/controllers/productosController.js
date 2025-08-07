const productosService = require('../services/productosService');

exports.getAll = (tableName, viewName) => {
  return (req, res) => {
    productosService.getAllData(tableName, (err, results) => {
      if (err) {
        console.log(`Error al recuperar los datos de la tabla '${tableName}'`, err);
        return res.status(500).send('Error al recuperar los datos');
      }
      const data = {};
      data[tableName] = results;
      res.render(viewName, data);
    });
  };
};

exports.post = (tableName, redirectPath) => {
  return (req, res) => {
    const formData = req.body;
    if (!formData || typeof formData !== 'object') {
      return res.status(400).send('Datos inválidos');
    }
    productosService.postData(tableName, formData, (err) => {
      if (err) {
        console.error(`Error al insertar en ${tableName}`, err);
        return res.status(500).send('Error al insertar los datos');
      }
      res.redirect(redirectPath);
    });
  };
};

exports.getById = (tableName, viewName, idName = 'id') => {
  return (req, res) => {
    const id = req.params[idName];
    productosService.getDataById(tableName, id, idName, (err, results) => {
      if (err) {
        console.error(`Error al obtener el dato de ${tableName}`, err);
        return res.status(500).send('Error al obtener el dato');
      }
      if (results.length > 0) {
        res.render(viewName, { producto: results[0] });
      } else {
        res.status(404).send('Producto no encontrado');
      }
    });
  };
};

exports.updateById = (tableName, redirectPath, idName = 'id') => {
  return (req, res) => {
    const id = req.params[idName];
    const formData = req.body;
    if (!formData || typeof formData !== 'object') {
      return res.status(400).send('Datos inválidos');
    }
    productosService.updateDataById(tableName, id, idName, formData, (err) => {
      if (err) {
        console.error(`Error al actualizar en ${tableName}`, err);
        return res.status(500).send('Error al actualizar los datos');
      }
      res.redirect(redirectPath);
    });
  };
};