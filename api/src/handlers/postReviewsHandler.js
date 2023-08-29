
const createReview = async (userId, productId, transactionId, rating, title, description) => {
  // Verifica si el usuario ha realizado una compra para el producto
  const hasPurchased = await checkPurchase(userId, productId, transactionId);

  if (!hasPurchased) {
    throw new Error("El usuario no ha comprado este producto.");
  }

  // Verifica si el usuario ya ha dejado una reseña previa para el producto
  const existingReview = await Review.findOne({ user: userId, product: productId });

  if (existingReview) {
    // Puedes permitir que el usuario actualice su reseña existente aquí
    existingReview.rating = rating;
    existingReview.title = title;
    existingReview.description = description;
    await existingReview.save();
    return existingReview;
  }

  // Si no existe una reseña previa, crea una nueva reseña
  const newReview = new Review({
    user: userId,
    product: productId,
    transaction: transactionId,
    rating: rating,
    title: title,
    description: description
  });

  await newReview.save();
  return newReview;
};




module.exports = {createReviewsHandler};