
const product = async () => {
    try {
        let response = await fetch('https://fakestoreapi.com/products');
      
        return await response.json();
    } catch (error) {
        console.error("Failed to fetch products:", error);
        return [];  // Return an empty array or handle error accordingly
    }
}

export default product;
