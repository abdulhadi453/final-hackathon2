import { type SchemaTypeDefinition } from "sanity";
import { airmax } from "./airmax";
import { gearup } from "./gearup";
import { images } from "./images";
import { essentials } from "./essentials";
import { allproducts } from "./allproducts";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [airmax, gearup, essentials, images, allproducts,]
};
