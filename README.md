# Node.js + PostgreSQL REST API

Autor: Alex Hernández 

API desarrollada con **Node.js** y **PostgreSQL**, utilizando la librería `pg` para la conexión con la base de datos y `Express.js` para la gestión de rutas.

## Instalación 

```sh
git clone https://github.com/Aserturik/node-postgre-students
cd node-postgre-students/
```
##  Ejecución

### Ejecutar con Docker 

Si tienes **Docker y Docker Compose** instalados, puedes ejecutar la API y la base de datos en contenedores:

```sh
docker-compose up --build
```

Esto levantará:  
✅ Un contenedor con **PostgreSQL** que ejecutará el script de creación de tablas automáticamente.  
✅ Un contenedor con la API en **Node.js**, conectada a la base de datos.

**📌 Verifica que la base de datos se haya creado:**

```sh
docker exec -it postgres_container psql -U aserturik -d nodepg -c "SELECT * FROM students;"
```

---

## 📡 Endpoints Disponibles

### **Estudiantes (`/students`)**

- **GET `/students`** → Obtener todos los estudiantes
- **GET `/students/:id`** → Obtener un estudiante por ID
- **POST `/students`** → Agregar un nuevo estudiante
    
    ```json
    {
      "name": "Juan Pérez",
      "career": "Ingeniería Petroquímica"
    }
    ```
    
- **PUT `/students/:id`** → Actualizar un estudiante
- **DELETE `/students/:id`** → Eliminar un estudiante
