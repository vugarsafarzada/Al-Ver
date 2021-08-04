import { categories } from "./categoryData";

export default function handler(req, res) {
  if (categories) {
    res.status(200).json(categories);
  } else {
    res.status(404).json({ Error: "Data is not found on API" });
  }
}
