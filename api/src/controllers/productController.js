import mongoose from 'mongoose';
import { ProductSchema } from '../models/productModel';


const Product = mongoose.model('Product', ProductSchema);

export const addNewProduct = (req, res) => {
    let newProduct = new Product({...req.body, productImage: req.file.path});

    newProduct.save((err, product) => {
        if (err) {
            res.send(err);
        }
        res.json(product);
    });
};

export const getProducts = (req, res) => {
    Product.find({}, (err, product) => {
        if (err) {
            res.send(err);
        }
        res.json(product);
    });
};
/*

export const getContactWithID = (req, res) => {
    Contact.findById(req.params.contactId, (err, contact) => {
        if (err) {
            res.send(err);
        }
        res.json(contact);
    });
}

export const updateContact = (req, res) => {
    Contact.findOneAndUpdate({ _id: req.params.contactId}, req.body, { new: true }, (err, contact) => {
        if (err) {
            res.send(err);
        }
        res.json(contact);
    })
}
*/
export const deleteProduct = (req, res) => {
    Product.remove({ _id: req.params.productId }, (err, contact) => {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'Successfully deleted contact'});
    })
}
