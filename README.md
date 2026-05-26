# TaskFlow Fullstack

![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![SQLite](https://img.shields.io/badge/SQLite-003B57?style=for-the-badge&logo=sqlite&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![Render](https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=black)

---

# Descripción

Aplicación fullstack de gestión de tareas desarrollada con React, TypeScript, Express y SQLite.

Permite crear, editar, completar, eliminar, filtrar y buscar tareas mediante una API REST documentada con Swagger.

---


# Deploy

## Frontend
https://taskflow-fullstack-eta.vercel.app/tasks

## Backend API
https://taskflow-fullstack-6enn.onrender.com/api/v1/tasks

## Swagger UI
https://taskflow-fullstack-6enn.onrender.com/api-docs

---

# Funcionalidades

- Crear tareas
- Eliminar tareas
- Marcar como completadas
- Listado dinámico
- Filtros (Todas / Pendientes / Completadas)
- Buscador de tareas
- Estadísticas en tiempo real
- API REST completa
- Persistencia con SQLite
- Documentación Swagger

---

# Tecnologías

## Frontend
- React
- TypeScript
- Vite
- Context API
- CSS moderno

## Backend
- Node.js
- Express.js
- SQLite (better-sqlite3)
- Swagger (swagger-ui-express + swagger-jsdoc)
- CORS

---

# Estructura del proyecto

La aplicación está separada en frontend y backend.  
El frontend gestiona la interfaz y el backend la lógica y la base de datos.

```
taskflow-fullstack/
│
├── client/                  # Frontend (React + TypeScript)
│   ├── src/
│   │   ├── api/             # Peticiones HTTP al backend
│   │   ├── components/      # Componentes reutilizables de UI
│   │   ├── context/         # Estado global (Context API)
│   │   ├── hooks/           # Hooks personalizados
│   │   ├── pages/           # Vistas principales de la app
│   │   ├── types/           # Tipos TypeScript
│   │   └── main.tsx         # Entrada del frontend
│
├── server/                  # Backend (Node.js + Express)
│   ├── src/
│   │   ├── config/          # Configuración del servidor
│   │   ├── controllers/     # Controladores (manejan requests)
│   │   ├── services/        # Lógica de negocio
│   │   ├── routes/          # Endpoints de la API REST
│   │   ├── database/        # Configuración SQLite
│   │   └── index.js         # Entrada del servidor
│
├── docs/                    # Documentación del proyecto
│   └── images/              # Capturas del README
│
└── README.md
```

---

# Instalación local

## Clonar repositorio
```bash
git clone https://github.com/ismaelcontelles40-debug/taskflow-fullstack.git
```

---

## Backend
```bash
cd server
npm install
npm run dev
```

Servidor:
```
http://localhost:3000
```

---

## Frontend
```bash
cd client
npm install
npm run dev
```

Frontend:
```
http://localhost:5173
```

---

# API Endpoints

## Obtener tareas
```
GET /api/v1/tasks
```

## Crear tarea
```
POST /api/v1/tasks
```

## Actualizar tarea
```
PATCH /api/v1/tasks/:id
```

## Eliminar tarea
```
DELETE /api/v1/tasks/:id
```

---

# Context API

Se utiliza Context API para la gestión global del estado:

- Estado centralizado de tareas
- Evita prop drilling
- Sincronización con backend
- Lógica CRUD centralizada

---

# Base de datos

SQLite con better-sqlite3.

Archivo:
```
server/taskflow.db
```

---

# Capturas

## Vista escritorio
![Desktop](docs/images/servidor.png)

---

## Vista móvil
![Mobile](docs/images/modo-movil.png)

---

## Presentación
![UI](docs/images/modo-presentacion.png)

---

## Swagger
![Swagger](docs/images/servidor.png)

---

# Scripts

## Backend
```
npm run dev
```

## Frontend
```
npm run dev
```

---

# Autor

Proyecto desarrollado por Ismael Contelles
