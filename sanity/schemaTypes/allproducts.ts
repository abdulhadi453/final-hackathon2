export const allproducts = 
    {
      title: "allproducts",
      name: "allproducts",
      type: "document",
      fields: [
        {
          title: "allproducts id",
          name: "id",
          type: "number"
        },
        {
            title: "allproducts material",
            name: "material",
            type: "string"
          },
        {
          title: "allproducts title",
          name: "title",
          type: "string"
        },

        {
            title: "allproducts description",
            name: "description",
            type: "string"
          },
          {
            name: 'stock',
            title: 'stock',
            type: 'number',
          },
          {
            name: 'colors',
            title: 'Colors',
            type: 'array',
            of: [{ type: 'string' }],
          },

          {
            title: "allproducts price",
            name: "price",
            type: "number"
          },


          {
            title: "allproducts image",
            name: "image",
            type: "image"
          }

      ]
    }  
