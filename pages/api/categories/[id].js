import { categories } from "../categoryData";

export default function handler(req, res) {
  const { id } = req.query;
  const category = [];
  categories.map((item) => {
    if (item.id === parseInt(id)) {
      return category.push(item);
    }
  });
  if (category.length > 0) {
    res.status(200).json(category);
  } else {
    res.status(404).json({ Error: "Data is not found on API" });
  }
}
