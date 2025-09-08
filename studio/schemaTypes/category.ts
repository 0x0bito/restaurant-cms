import { Layers2Icon } from "lucide-react";

const categorySchema = {
    name: "category",
    title: "Category",
    type: "document",
    icon: Layers2Icon,
    fields: [
      { name: "title", title: "Title", type: "string" },
      { name: "slug", title: "Slug", type: "slug", options: { source: "title", maxLength: 96 } },
      { 
        name: "image",
        title: "Image",
        type: "image",
        options: {hotspot: true},
        fields: [
            { name: "alt", title: "Alt text", type: "string" }
        ] 
      },
    ]
};

export default categorySchema;