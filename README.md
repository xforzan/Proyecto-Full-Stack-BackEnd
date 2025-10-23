# Proyecto 3


Bienvenid@s a **Proyecto 3 - BackEnd**, una proyecto desarrollado con **Node.js**, **Express**, **Vite**, **React** y **MongoDB**.  
Este proyecto sirve como base para aprender y practicar el desarrollo de aplicaciones full-stack modernas.

[![Made by Xforzan](https://img.shields.io/badge/Made%20by-Xforzan-blue)](https://github.com/xforzan)
![Version](https://img.shields.io/badge/Version-1.0.0-orange)
![Node.js](https://img.shields.io/badge/Node.js-22.x-brightgreen)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-lightgreen)

---

## ✨ Características

- 🌐 **API RESTful** con rutas organizadas
- 🗄️ **MongoDB + Mongoose** para manejo de base de datos
- 🔐 **Autenticación con JWT** lista para implementar
- 📦 **Estructura modular** y fácil de escalar


---

## 📂 Estructura del Proyecto

---

## 🚀 Instalación y Uso

### 1️⃣ Clonar el repositorio
```bash
git clone https://github.com/xforzan/Proyecto-Full-Stack-BackEnd
```
### 2️⃣ Entra al proyecto
```bash
cd Proyecto-Full-Stack-BackEnd/
```

### 3️⃣ Instalar las dependencias del cliente y del servidor
```bash
npm install --legacy-peer-deps
```
### 4️⃣ Configurar archivo `.dev` dentro de la carpeta server con las variables
```bash
PORT
DB_URL
JWT_SECRET
CLOUDINARY_CLOUD_NAME
CLOUDINARY_API_SECRET
CLOUDINARY_API_KEY
MERCEDES_API_KEY
```
## ▶️ Ejecución del proyecto
### Modo desarrollo (ejecuta servidor)
```bash
node server.js
```
#### La API se ejecutará en:
👉 `http://localhost:3000`


## 📚 Modelos de datos
### 👤 Usuario
```json
{
  "name": "Juan Pérez",
  "email": "juan@example.com",
  "password": "123456",
  "avatar": "url_cloudinary",
}
```

### 🚗 Coche
```json
{
  "vin": "W1K1XXXXXXXXXXXXX",
  "km": 999999,
  "images": [
    "https://res.cloudinary.com/demo/vehicles/W1K1XXXXXXXXXXXXX/image1.webp",
    "https://res.cloudinary.com/demo/vehicles/W1K1XXXXXXXXXXXXX/image2.webp",
    "https://res.cloudinary.com/demo/vehicles/W1K1XXXXXXXXXXXXX/image3.webp"
  ],
  "user": {
    "$oid": "USER_ID_EXAMPLE"
  },
  "specs": {
    "longType": "Mercedes-AMG A 45 S 4MATIC+ Compacto",
    "marca": "Mercedes-Benz",
    "modelo": "A",
    "version": "LZAZ150A",
    "carroceria": "Compacto",
    "motor": "1991",
    "combustible": "Gasolina",
    "cambio": "automático",
    "cilindros": "4",
    "traccion": "4x4 (AWD)",
    "potenciaKW": "310",
    "potenciaCV": "421",
    "parNm": "500",
    "aceleracion": "3.9",
    "velocidadMax": "270",
    "neumaticoDelantero": "245/35 ZR19 93Y XL",
    "neumaticoTrasero": "245/35 ZR19 93Y XL",
    "emisionesCO2": "206",
    "claseEmisiones": "F",
    "colorEmisiones": "#FF886D"
  }
}

```

## 📚 Endpoints principales

### 📅 Citas
| Método | Endpoint                      | Descripción               |
| ------ | ----------------------------- | ------------------------- |
| **POST**   | `api/v1/appointment/`         | Agendar cita              |
| **GET**    | `api/v1/appointment/user`     | Obtener citas del usuario |
| **DELETE** | `api/v1/appointment/:eventId` | Eliminar cita del usuario |

### 👤 Usuarios
| Método | Endpoint             | Descripción             |
| ------ | -------------------- | ----------------------- |
| **GET**   | `api/v1/user/me`     | Información del usuario |
| **POST**   | `api/v1/user/avatar` | Subir avatar            |
| **DELETE** | `api/v1/me`          | Eliminar usuario        |

### 🛡️ Autenticación 
| Método | Endpoint               | Descripción                           |
| ------ | ---------------------- | ------------------------------------- |
| **POST**   | `api/v1/auth/login`    | Iniciar sesión                        |
| **POST**   | `api/v1/auth/register` | Registrarse                           |
| **POST**   | `api/v1/auth/verify`   | Verificar si el usuario está logueado |
| **POST**   | `api/v1/auth/logout`   | Cerrar sesión                         |

### 🚗 Coches
| Método | Endpoint             | Descripción                |
| ------ | -------------------- | -------------------------- |
| **POST**   | `api/v1/car/add`     | Añadir coche               |
| **GET**    | `api/v1/car/myCars`  | Obtener coches del usuario |
| **GET**   | `api/v1/car/allCars` | Obtener todos los coches   |



## 📜 Licencia

- Este proyecto está bajo la licencia MIT.
- Puedes usarlo, modificarlo y distribuirlo libremente.

<div align="center">

💻 Desarrollado como Proyecto 3 - BackEnd
Con ❤️ para aprender y crecer🚀

</div>