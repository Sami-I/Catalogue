export default {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "array",
      of: [{ type: "image" }],
      options: {
        hotspot: true,
      },
    },
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 90,
      },
    },
    {
      name: "price",
      title: "Price",
      type: "number",
    },
    {
      name: "details",
      title: "Details",
      type: "string",
    },
    {
      title: "Product Category",
      name: "category",
      type: "string",
      options: {
        list: [
          { title: "Jackets", value: "jacket" },
          { title: "Shoes", value: "shoe" },
          { title: "Jumpers", value: "jumper" },
          { title: "T-Shirts", value: "t-shirt" },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Gender",
      name: "gender",
      type: "string",
      options: {
        list: [
          { title: "Mens", value: "mens" },
          { title: "Womens", value: "womens" },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
  ],
};
