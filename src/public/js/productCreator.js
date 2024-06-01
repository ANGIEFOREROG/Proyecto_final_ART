const form = document.getElementById("formProductCreator");
const deleteBtn = document.getElementById("delete-btn");
const addBtn = document.getElementById("add-btn");

fetch("/api/sessions/current")
  .then((response) => response.json())
  .then((userData) => {
    if (userData.role === "ADMIN") {
      deleteBtn.disabled = false;
      addBtn.disabled = false;
    } else if (userData.role === "PREMIUM") {
      deleteBtn.disabled = true;
      addBtn.disabled = false;
    }
  })
  .catch((error) => console.error(error));

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const productData = {};
  formData.forEach((value, key) => {
    productData[key] = value;
  });
  const  thumbnails = [{thumbnail: productData.thumbnail}];
  productData.thumbnail = thumbnails;

  console.log(productData);


  try {
    console.log("creacion de productos")
    const responseUser = await fetch("/api/sessions/current");
    const userData = await responseUser.json();

    if (userData.role === "PREMIUM") {
      productData.owner = userData.email;
    } else {
      productData.owner = "admin";
    }
    console.log(productData);
    const responseProduct = await fetch("/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    });

    const result = await responseProduct.json();
    if (responseProduct.ok) {
      console.log(result.message);
      form.reset();
    } else {
      console.error(result.message);
    }
  } catch (error) {
    console.error(error);
  }
  
},
);

deleteBtn.addEventListener("click", async () => {
  console.log("eliminar");
  const codeInput = document.getElementById("pid");
  const productCode = codeInput.value.trim(); // Elimina espacios en blanco al inicio y al final

  // Verificar que el código del producto tenga el formato correcto
  const isValidProductCode = /^[a-zA-Z0-9]{1,24}$/.test(productCode);
  if (!isValidProductCode) {
    console.error("Código del producto no válido");
    return;
  }

  try {
    // Obtener información de sesión
    const responseUser = await fetch("/api/sessions/current");
    const userData = await responseUser.json();

    // Verificar el rol del usuario y establecer el propietario del producto
    console.log(userData.role);
    let owner;
    if (userData.role === "PREMIUM") {
      owner = userData.email;
    } else {
      owner = "admin";
    }

    // Crear el objeto de solicitud para eliminar el producto
    const requestOptions = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${userData.token}` // Incluir token de sesión en el encabezado de autorización
      }
    };

    // Realizar la solicitud para eliminar el producto
    const response = await fetch(`/api/products/code/${productCode}`, requestOptions);
console.log(response);
    // Verificar la respuesta y manejarla adecuadamente
    const result = await response.json();
    if (response.ok) {
      console.log(result.message);
      codeInput.value = ""; // Restablece el campo de entrada
    } else {
      console.error(result.message);
    }
  } catch (error) {
    console.error(error);
  }
});
