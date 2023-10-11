import Product from "./product";

export const getAllProducts = async () : Promise<Product[]> => {
    const res : any = await fetch('https://fakestoreapi.com/products/1');
    return res.json();
}

export const getProductsCategoryWise = async (category: string) : Promise<Product[]> => {
    const res : any = await fetch(`https://fakestoreapi.com/products/category/${category}`);
    return res.json();
}

export const getProduct = async (productId: number) : Promise<Product> => {
    const res : any = await fetch(`https://fakestoreapi.com/products/${productId}`);
    return res.json();
}

export const getCategories = async () => {
    const res: any = await fetch(`https://fakestoreapi.com/products/categories`);
    const categories = await res.json();
    return categories;
}

