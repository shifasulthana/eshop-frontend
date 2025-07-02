function createProduct(product){
    return`<div class="bg-white p-4 rounded shadow hover:shadow-md">
           <img 
             src="http://localhost:3000/file?name=${product.image}" 
             alt="${product.name}" 
             class="w-full h-48 object-contain mx-auto rounded mb-3"/>
            <h3 class="text-lg font-semibold">${product.name}</h3>
            <P class="text-sm text-gray-600 mb-4 flex-grow line-clamp-3">${product.description}</p>
            <p class="text-gray-600">${product.price}</p>
            <button class="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Add to Cart</button>
        </div>`
}

const productsDiv = document.getElementById('products')

fetch("http://localhost:3000/product/" ,{
    method: "GET",
    headers:{
        token:localStorage.getItem('token')
    }
}).then(async (res) => {
    const data = await res.json()
    console.log(data)

    data.products.forEach((p)=> {
        console.log(p)
        productsDiv.innerHTML += createProduct(p)
    });
})