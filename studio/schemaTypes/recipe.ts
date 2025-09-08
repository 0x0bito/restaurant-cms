import { UtensilsIcon } from "lucide-react";
import { Rule } from "sanity";

const recipeSchema = {
    name: "recipe",
    title: "Recipe",
    type: "document",
    icon: UtensilsIcon,
    fields: [
      { name: "title", title: "Title", type: "string" },
      { name: "slug", title: "Slug", type: "slug", options: { source: "title", maxLength: 96 } },
      { name: "description", title: "Description", type: "text"},
      { name: "price", title: "Price", type: "number", validation: (Rule: Rule) => Rule.min(0)},
      {
        name: "categories",
        title: "Categories",
        type: "array",
        of: [
          {
            type: "reference",
            to: [{ type: "category" }],
          }
        ]
      },
      { 
        name: "image", 
        title: "Image", 
        type: "image", 
        options: {hotspot: true},
        fields: [
            { name: "alt", title: "Alt text", type: "string" }
        ] 
      },
      {
        name: "featured",
        title: "Featured",
        type: "boolean"
      }
    ]
};

export default recipeSchema;