import { products } from "../../productData";

export default function handler(req, res) {
  const { id } = req.query;
  const productByCategoryID = products.filter(
    (product) => product.categoryId == id.toString()
  );
  if (productByCategoryID.length > 0) {
    res.status(200).json(productByCategoryID);
  } else {
    res.status(404).json({ Error: "Data is not found on API" });
  }
}
