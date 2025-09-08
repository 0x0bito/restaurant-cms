const socialMediaPostsSchema = {
  name: "social",
  title: "Social Media",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string" },
    { name: "subtitle", title: "Subtitle", type: "text" },
    {
      name: "images",
      title: "Instagram Images",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "alt",
              title: "Alt text",
              type: "string",
            },
          ],
        },
      ],
    },
  ],
};

export default socialMediaPostsSchema;
