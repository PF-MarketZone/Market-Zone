
const Review = require('../models/reviews')


const getReviewsHandler = async ( )=>{
    try {
        const reviews =  await Review.find();
        res.status(200).send( reviews);
       } catch (error) {
        res.send({message: 'Error al buscar los reviews', error: error.message });
      } 
};

    
 const getReviewsByIdHandler=async ( )=>{
try {
    const { reviewId }= req.params
    const review = await Review.findById(reviewId);
    return res.status(200).json(review);
} catch (error) {
    return res.status(500).json({ message: 'Error al buscar la review', error: error.message });
}

 };

 const getReviewsByIProductHandler= async( )=>{

    try {
        const { product } = req.params; 
        const reviews = await Review.find({ product: product });
    if (!reviews) {
        return res.status(404).json({ message: 'Este producto aún no cuenta con reviews' });
         } return res.status(200).json(reviews);
      } catch (error) {   
        return res.status(500).json({ message: `Error al buscar reviews del producto de id ${product}`, error: error.message });
      }
 };

module.exports = {
    getReviewsHandler,
    getReviewsByIdHandler,
    getReviewsByIProductHandler
}