import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const ProductSchema = new Schema({
    productName: {
        type: String,
        required: 'Enter a product name'
    },
    qty: {
        type: Number,
        required: 'Enter a qty'
    },
    productDescription: {
        type: String
    },
    category: {
        type: String
    },
    created_date: {
        type: Date,
        default: Date.now
    },
    productImage: {
        type: String,
        required: 'product image is required'
    }
});
