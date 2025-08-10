# 📦 Inventario de una Tienda

Sistema de gestión de inventario. Permite controlar entradas, salidas y productos disponibles, además de visualizar estadísticas clave desde un dashboard intuitivo.

## 🚀 Funcionalidades

- Registro de productos, entradas y salidas del inventario.
- Visualizacion de productos, entradas y salidas del inventario.
- Panel de control con:
  - Productos con bajo stock.
  - Productos con mayores ventas.
  - Total de productos y categorías.
  - Ventas del mes.
  - Inventario total disponible.

## 📲 Vistas
### Panel de control
![Panel de control](https://github.com/ariadna-ge/Inventario_tienda/blob/ed820e411f24f925b0163e08f6d260cc3ba9d786/readme/dashboard.png)
### Registro y visualizacion de datos
El diseño es el mismo para los productos, entradas y salidas, solo cambian los datos que se solicitan.
![Datos en tabla](https://github.com/ariadna-ge/Inventario_tienda/blob/ed820e411f24f925b0163e08f6d260cc3ba9d786/readme/inventario.png)
![Editar](https://github.com/ariadna-ge/Inventario_tienda/blob/ed820e411f24f925b0163e08f6d260cc3ba9d786/readme/agregar.png
)

## 🛠 Tecnologías Usadas

<div align="center">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="50"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" width="50"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" width="50"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" width="50"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" width="50"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width="50"/>
</div>


## 📁 Estructura del Proyecto

```
readme            → Vistas del proyecto
database          → Esquema de la base de datos
src
├── config/       → Configuración de la base de datos  
├── controllers/  → Controladores de rutas  
├── models/       → Modelos de datos  
├── public/       → Archivos estáticos
├── routes/       → Definición de rutas  
├── services/     → Lógica auxiliar  
└── views/        → Plantillas de vistas 
```

## ⚙️ Instalación

1. Clona el repositorio.  
   ```bash
   git clone https://github.com/ariadna-ge/Inventario_tienda.git
   ```
2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Crea la base de datos el esquema se encuentra en `database/estructura.sql`.
> NOTA: El esquema no contiene datos, puedes agregar los que gustes.

4. Configura tu base de datos en `config/bd.js`.  
```python
host: 'localhost',
user: 'tu_usuario',
password: 'tu_contraseña',
database: 'tu_base_de_datos'
```

5. Inicia el servidor:

   ```bash
   node server.js
   ```

6. Abre en el navegador: `http://localhost:3000` (o el puerto que configures).

## 📄 Licencia

Este proyecto está licenciado bajo la Licencia MIT. Desarrollado por [ariadna-ge](https://github.com/ariadna-ge) ❤️.

## 🔗 Documentación
Profundiza un poco más sobre el [proyecto](https://docs.google.com/document/d/1CJaKyRyIS3DQxD5CcstuhpmacZs00exr/edit?usp=sharing&ouid=102763565525337420102&rtpof=true&sd=true)
