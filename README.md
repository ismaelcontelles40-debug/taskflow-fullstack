# TaskFlow - Fullstack Task Manager

---

# Descripción

TaskFlow es una aplicación fullstack de gestión de tareas donde los usuarios pueden crear, organizar y gestionar tareas con diferentes estados y prioridades.

---

# Demo

Frontend:
https://taskflow-fullstack-eta.vercel.app/

Backend API:
https://taskflow-fullstack-6enn.onrender.com/api/v1/tasks

Swagger:
https://taskflow-fullstack-6enn.onrender.com/api-docs

---

# Funcionalidades

- Crear tareas
- Eliminar tareas
- Marcar tareas como completadas
- Filtrar por estado (todas, pendientes, completadas)
- Buscar tareas por título
- Asignar prioridad (Alta / Media / Baja)
- Persistencia en base de datos SQLite

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

# Tecnologías

Frontend:
- React
- TypeScript
- Vite
- Context API

Backend:
- Node.js
- Express
- API REST

Base de datos:
- SQLite

---

# Capturas

Escritorio:
Vista principal con tareas, filtros y buscador.

Móvil:
Diseño responsive adaptado a dispositivos móviles.

API:
Documentación completa en Swagger.

---

# Instalación

Backend:
cd server
npm install
npm run dev

Frontend:
cd client
npm install
npm run dev

---

# Autor

Ismael Contelles