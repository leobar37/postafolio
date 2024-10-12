---
publishDate: 2020-12-27T00:00:00Z
title: Leobit
excerpt: Leobit es una app para repartidores que facilita la gestión de ventas diarias, clientes y productos, optimizada para móviles y creada con tecnologías como tRPC y React.
github: https://github.com/chickenLeobar/storeapp/tree/stagging
category: Administración
video: https://youtu.be/W45VNDC-Obs
tech:
  - Vite
  - React
  - Zod
  - Prisma
  - Redis
  - Chakra UI
  - Astro
  - Turborepo
---

Cada vez que aparecen nuevas tecnologías, surgen nuevas ideas y dudas. Estas, junto con mis ganas de emprender, me llevaron a comenzar un nuevo proyecto que hoy ha completado su primera fase: Leobit.

## ¿Cómo Surgió la Idea?

Antes de convertirme en desarrollador, trabajé durante mi infancia repartiendo pollo. En ese entorno, noté que muchos pequeños comerciantes tienen rutas de entrega, y al final de cada ruta, necesitan cuadrar rápidamente las ventas del día. Este recuerdo fue mi inspiración para Leobit. Tomé esos requerimientos básicos y comencé a plasmar ideas en Excalidraw

## DevOps: Un Enfoque Eficiente con Digital Ocean

Como full stack developer, tengo experiencia trabajando con servidores Linux y utilizando herramientas de DevOps. Sin embargo, para simplificar el despliegue, decidí utilizar Digital Ocean Apps. Mi flujo de trabajo está automatizado con un archivo Terraform que me permite construir toda la infraestructura como código. Luego, con GitHub Actions, gestiono los despliegues, asegurando que solo se realicen builds cuando haya cambios relevantes, gracias a Turborepo. Finalmente, genero imágenes de Docker que se suben a un registro privado de Digital Ocean, donde se detectan los cambios y se despliega la nueva versión.

## Características Clave del MVP

Hasta ahora, he logrado crear un MVP funcional que cubre los requerimientos principales:

Ventas rápidas y sin interrupciones: Una de mis mayores frustraciones eran los tiempos de carga, así que optimicé la app para que los usuarios puedan realizar sus ventas sin interrupciones, sincronizando todo en segundo plano.

Gestión de cajas y canales de ventas: Los usuarios pueden crear canales de ventas y cerrar o abrir cajas. Al finalizar, obtienen un resumen detallado del recorrido de ventas.

Registro de entidades importantes: Los usuarios pueden registrar clientes, productos, precios y transacciones, facilitando la administración del negocio.

PWA y Mobile-First: Aunque Leobit es una aplicación web, está diseñada para ser utilizada como una Progressive Web App (PWA) y optimizada para dispositivos móviles, asegurando que esté al alcance de las manos de los usuarios.

## Reflexiones y Próximos Pasos

Este es solo un resumen de lo que he logrado hasta ahora. Desde la concepción de la idea hasta llevarla a producción, ha sido un proceso que me ha permitido crecer como desarrollador. Mi objetivo ahora es seguir trabajando en Leobit para hacerlo más estable y útil para los usuarios.

Sigo aprendiendo y mejorando el proyecto con cada fase, y estoy emocionado por ver hacia dónde lo llevará el próximo capítulo.
