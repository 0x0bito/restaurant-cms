import { Navigation, SquareUserRound } from "lucide-react";

const navbarSchema = {
    name: "navbar",
    title: "Navbar",
    type: "document",
    icon: Navigation,
    fields: [
        {
            name: "logo",
            title: "Logo",  
            type: "image", 
            options: {hotspot: true},
            fields: [
                { name: "alt", title: "Alt text", type: "string" }
            ] 
        },
        {
        name: "socialLinks",
        title: "Social Links",
        type: "array",
        of: [
          {
            type: "object",
            fields: [
              {
                name: "platform",
                title: "Platform",
                type: "string",
              },
              {
                name: "url",
                title: "URL",
                type: "url"
              }
            ]
          }
        ]
      }
    ]
};

export default navbarSchema;