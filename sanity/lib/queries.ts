import { defineQuery } from "next-sanity";

export const allproducts = defineQuery(
    `*[_type == "allproducts"] {
    id,title,stock, description,material,price,colors,"imageUrl": image.asset->url}`
)