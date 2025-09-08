import { Users2 } from "lucide-react";
import { Rule } from "sanity";

const reviewSchema = {
    name: "review",
    title: "Review",
    type: "document",
    icon: Users2,
    fields: [
      {
        name: "fullName",
        title: "Full Name",
        type: "string",
        validation: (Rule: Rule) => Rule.required().min(2).max(50),
      },
      {
        name: "rating",
        title: "Rating",
        type: "number",
        validation: (Rule: Rule) => Rule.required().min(1).max(5),
      },
      {
        name: "content",
        title: "Review Content",
        type: "text",
        validation: (Rule: Rule) => Rule.required().min(10).max(500),
      },
      {
        name: "createdAt",
        title: "Created At",
        type: "datetime",
        initialValue: () => new Date().toISOString(),
        readOnly: true,
      }
    ]
  };
  
  export default reviewSchema;
  