El proyecto consiste 
en una aplicación web de comercio electrónico desarrollada en Node.js usando Express y MongoDB como base de datos. La aplicación, llamada «ART», se centra en la venta de cuadros en diferentes variedades y estilos.

la aplicacion web cuenta con una variedad de productos de diferentes estilos de acuerdo al requerimiento de cada usuario se maneja para diferentes generaciones.
1 ingresar a inicio 
1 ingresar a Mi usuario
2 si no eres usuario registrado te debes registrar 
campos de registro cuenta con un primer nombre, segundo nombre,correo electronico, contraseña.
te lleragara la correo un mensaje de bienvenida.
3 iniciar la sesion con correo electronico,contraseña 
La aplicacion tambien permite restablecer la contraseña si la olvidaste por medio de un correo electronico el cual te llegara al correo que registraste.
cuando ingresas como usuario administrador tienes la opcion de ir al panel de administrar productos o administrar usuarios
al ir al panel de administrador de productos te permitira agregar productos a la aplicacion.
cuando ingresas por primera ves te permite registrarte como usuario premiun
alli te solitira un tipo de archivos donde te permitira el acceso, te muestra una notificacion que ya eres usuario premiun
4 ingresar al apartado de cuadros, donde encontraras  las diferentes varidades de productos
5 si ingresas con el rol de administrador te permitira agregar mas productos al aparatado de cuadros 
podras visualizar la paginacion de todos los productos.
6 el  administrador no  puede puede realizar compra de ningun producto
7 el rol de usuario nomal o cliente puederealizar compra de los cuadros dando cli al boton de agregar al carrito
cuando agrgas un producto osea un cuadro al carrito te genra una alerta de color azul donde te indica que el producto fue agregado al carrito
8 dirigirse a carrito compras alli visualizara todos los productos que compro 
te indica si quieres serguir comprando o si quieres terminarr la compra.
9 cuando se termina la compra, dar cli en terminar compra y te genera un ticket donde te registra el nombre de usuario, email, fecha y hora , lista de los productos que compraste con las siguientes caracteristicas nombre, precio, cantidad, subtotal
10 le das cli en terminar compra, te muestra un mensaje de gracias por tu compra  y te notifica al correo el detalle de la compra.
para salir de la sesion lo puedes realiza por el boton de Lgout.
Installation:
Clone the repository:
git clone https://github.com/ANGIEFOREROG/Proyecto_final_ART.git    el proyecto final se encuentra en la siguiente ruta.
Install dependencies:
cd ART-Node-Project
npm install
Configure environment variables:
Create a .env file in the project root and configure the necessary environment variables.
Start the application:
npm start

The application will be available at http://localhost:8080.

Technologies Used
Node.js
Express
MongoDB
Railway (Deployment Platform)