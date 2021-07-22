import Product from '../models/Product';

export const createProduct = async (req, res) => {
    const {name, category, price, imgUrl} = req.body;
    const newProduct = new Product({name, category, price, imgUrl});
    const product = await newProduct.save();
    return res.status(201).json(product);
}

export const getProducts = async (req, res) => {
    const products = await Product.find();
    return res.json(products);
}

export const getProductById = async (req, res) => {
    const id = req.params.id;
    const product = await Product.findById(id);
    return res.json(product);
}

export const updateProductById = async (req, res) => {
    const id = req.params.id;
    const updatedProduct = await Product.findByIdAndUpdate(id, req.body, {
        new: true
    });
    return res.status(200).json(updatedProduct);
}

export const deleteProductById = async (req, res) => {
    const id = req.params.id;
    await Product.findByIdAndDelete(id);
    return res.status(200).json('deleted successfully');
}