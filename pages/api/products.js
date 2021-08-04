import { products } from "./productData";

export default function handler(req, res) {
  if (products) {
      res.status(200).json(products);
  }else{
      res.status(404).json({ "Error": "Data is not found on API" });
  }
}
