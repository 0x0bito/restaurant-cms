import { SquareUserRound } from "lucide-react";

const contactSchema = {
    name: "contact",
    title: "Contact",
    type: "document",
    icon: SquareUserRound,
    fields: [
      { 
        name: "location", 
        title: "Location", 
        type: "object",
        fields: [
          { name: "name", title: "Location Name", type: "string" },
          { name: "mapUrl", title: "Google Maps Link", type: "url" }
        ]
      },
      { name: "phone", title: "Phone Number", type: "string" },
      { name: "mail", title: "Mail", type: "string" },
      {
        name: "openingHours",
        title: "Opening Hours",
        type: "array",
        of: [
          {
            type: "object",
            fields: [
              { name: "day", title: "Day", type: "string" },
              { name: "hours", title: "Hours", type: "string" }
            ]
          }
        ]
      },
      {
        name: "socialMedia",
        title: "Social Media",
        type: "array",
        of: [
          {
            type: "object",
            name: "socialLink",
            title: "Social Link",
            fields: [
              {
                name: "platform",
                title: "Platform",
                type: "string",
              },
              {
                name: "link",
                title: "Link",
                type: "string"
              },
              {
                name: "icon",
                title: "Icon Url (svg)",
                type: "url",
              },
            ],
          },
        ],
      }
    ]
};

export default contactSchema;