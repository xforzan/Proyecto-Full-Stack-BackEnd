# Proyecto 3




### Para evitar conflictos
```shell
npm install --legacy-peer-deps
```



## Appointment
| Método | Endpoint                      | Descripción               |
| ------ | ----------------------------- | ------------------------- |
| **POST**   | `api/v1/appointment/`         | Agendar cita              |
| **GET**    | `api/v1/appointment/user`     | Obtener citas del usuario |
| **DELETE** | `api/v1/appointment/:eventId` | Eliminar cita del usuario |

## User
| Método | Endpoint             | Descripción             |
| ------ | -------------------- | ----------------------- |
| **GET**   | `api/v1/user/me`     | Información del usuario |
| **POST**   | `api/v1/user/avatar` | Subir avatar            |
| **DELETE** | `api/v1/me`          | Eliminar usuario        |

## Auth
| Método | Endpoint               | Descripción                           |
| ------ | ---------------------- | ------------------------------------- |
| **POST**   | `api/v1/auth/login`    | Iniciar sesión                        |
| **POST**   | `api/v1/auth/register` | Registrarse                           |
| **POST**   | `api/v1/auth/verify`   | Verificar si el usuario está logueado |
| **POST**   | `api/v1/auth/logout`   | Cerrar sesión                         |

## Car
| Método | Endpoint             | Descripción                |
| ------ | -------------------- | -------------------------- |
| **POST**   | `api/v1/car/add`     | Añadir coche               |
| **GET**    | `api/v1/car/myCars`  | Obtener coches del usuario |
| **GET**   | `api/v1/car/allCars` | Obtener todos los coches   |
