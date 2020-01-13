import {
    addNewProduct,
    getProducts,
    deleteProduct
} from '../controllers/productController';
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file,cb) {
        cb( null, './uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, new Date().toISOString()+ file.originalname)
    }
})
const upload = multer({ storage: storage });

const routes = (app) => {
    app.route('/product')
        .get((req, res, next) => {
            // middleware
            console.log(`Request from: ${req.originalUrl}`)
            console.log(`Request type: ${req.method}`)
            next();
        }, getProducts)

        // POST endpoint
        .post( upload.single('productImage') ,addNewProduct)
        .delete(deleteProduct)

};

export default routes;
