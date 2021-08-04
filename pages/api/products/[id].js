import { products } from "../productData";

export default function handler(req, res) {
  const { id } = req.query;
  const product = [];
  products.map((item) => {
    if (item.id === parseInt(id)) {
      return product.push(item);
    }
  });
  if (product.length>0) {
    res.status(200).json(product);
  } else {
    res.status(404).json({ "Error": "Data is not found on API" });
  }
}
