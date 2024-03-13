const sortOptions = {
  heading: "sort",
  options: [
    {
      label: "Categories",
      href: "#",
      current: true,
      type: "categories",
      isNested: true,
      heading: "Categories",
      options: [
        {
          label: "All",
          value: "all",
          type: "all",
        },
        {
            label: "Fav Items",
            value: "favItems",
            type: "favItems",
          },
        {
          label: "men's clothing",
          value: "men's clothing",
          type: "men's clothing",
        },
        {
          label: "jewelery",
          value: "jewelery",
          type: "jewelery",
        },
      ],
    },
    {
      label: "Best Rating",
      href: "#",
      current: false,
      type: "rating",
      isNested: false,
    },
    {
      label: "Price: Low to High",
      href: "#",
      current: false,
      type: "priceLow",
      isNested: false,
    },
    {
      label: "Price: High to Low",
      href: "#",
      current: false,
      type: "priceHigh",
      isNested: false,
    },
  ],
};

export default sortOptions;
