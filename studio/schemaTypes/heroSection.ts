import { Image } from "lucide-react";


const heroSchema = {
    name: "hero",
    title: "Hero Section",
    type: "document",
    icon: Image,
    fields: [
      {
        name: "title",
        title: "Title",
        type: "string"
      },
      {
        name: "description",
        title: "Description",
        type: "text"
      },
      {
        name: "image",
        title: "Hero Image",
        type: "image",
        options: {
          hotspot: true
        }
      },
      {
        name: "buttonText",
        title: "Button Text",
        type: "string"
      },
      {
        name: "buttonLink",
        title: "Button Link",
        type: "url"
      }
    ]
  };
  
  export default heroSchema;
  