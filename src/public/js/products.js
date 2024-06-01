async function addProduct(id) {
  console.log("aqui llega");
  const cart = getCookie("cart");
  if (cart) {
    const response = await fetch(`/api/carts/${cart}/products/${id}`, {
      method: "PUT",
    });
    const result = await response.json();
  } else {
    //si no encontro la cookie, es porque ya hay un usuario logueado
    const response = await fetch(`/api/carts/products/${id}`, {
      method: "PUT",
    });
    const result = await response.json();
  }
  Toastify({
    text: "Producto agregado al carrito",
    duration: 3000,
  }).showToast();
}

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
}

const btnAddProduct = document.querySelectorAll(".btnAddProduct");

// btnAddProduct.addEventListener("click", (e) => {
//   e.preventDefault();
//   console.log(e.target.id);
// });


async function deleteProduct(code) {
  try {
    const response = await fetch(`/api/products/code/${code}`, {
      method: "DELETE",
    });
    const result = await response.json();
    if (response.ok) {
      console.log(result.message);
      // Realizar alguna acción después de eliminar el producto, como actualizar la interfaz de usuario
    } else {
      console.error(result.message);
    }
  } catch (error) {
    console.error(error);
  }
}

const btnDeleteProduct = document.querySelectorAll(".btnDeleteProduct");

btnDeleteProduct.forEach((btn) => {
  btn.addEventListener("click", async (e) => {
    e.preventDefault();
    const code = e.target.dataset.code; // Suponiendo que el código del producto está almacenado en un atributo de datos en el botón
    await deleteProduct(code);
  });
});
