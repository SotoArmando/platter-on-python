module.exports = {
  routes: [
    {
      method: "GET",
      path: "/platterauth/platterConfirmValidation/",
      handler: "platterauth.platterConfirmValidation",
      config: {
        policies: [],
        middlewares: [],
        auth: false,
      },
    },
    {
      method: "POST",
      path: "/platterauth/recipelike/:recipeId",
      handler: "platterauth.recipeLike",
      config: {
        policies: [],
        middlewares: [],
        auth: false,
      },
    },
    {
      method: "POST",
      path: "/platterauth/recipeComment/:recipeId",
      handler: "platterauth.recipeComment",
      config: {
        policies: [],
        middlewares: [],
        auth: false,
      },
    },
    {
      method: "POST",
      path: "/platterauth/updaterecipeComment/:recipeId",
      handler: "platterauth.updaterecipeComment",
      config: {
        policies: [],
        middlewares: [],
        auth: false,
      },
    },
    {
      method: "POST",
      path: "/platterauth/deleterecipeComment/:recipeId",
      handler: "platterauth.deleterecipeComment",
      config: {
        policies: [],
        middlewares: [],
        auth: false,
      },
    },
    {
      method: "POST",
      path: "/platterauth/recipeshopping/:recipeId",
      handler: "platterauth.recipeShopping",
      config: {
        policies: [],
        middlewares: [],
        auth: false,
      },
    },
    {
      method: "GET",
      path: "/platterauth/recipeLikesByUser/:user",
      handler: "platterauth.recipeLikebyUser",
      config: {
        policies: [],
        middlewares: [],
        auth: false,
      },
    },
    {
      method: "GET",
      path: "/platterauth/shoppingListsbyUser/:user",
      handler: "platterauth.shoppingListsbyUser",
      config: {
        policies: [],
        middlewares: [],
        auth: false,
      },
    },
    {
      method: "GET",
      path: "/platterauth/recipeCommentByRecipe/:recipe",
      handler: "platterauth.recipeCommentByRecipe",
      config: {
        policies: [],
        middlewares: [],
        auth: false,
      },
    },
    {
      method: "GET",
      path: "/platterauth/amazonproducts/:keywords",
      handler: "platterauth.amazonProducts",
      config: {
        policies: [],
        middlewares: [],
        auth: false,
      },
    },
    {
      method: "GET",
      path: "/platterauth/amazondetail/:asin",
      handler: "platterauth.amazonDetail",
      config: {
        policies: [],
        middlewares: [],
        auth: false,
      },
    },
    {
      method: "GET",
      path: "/platterauth/productrecomendations/:recipedata",
      handler: "platterauth.productRecomendations",
      config: {
        policies: [],
        middlewares: [],
        auth: false,
      },
    },
  ],
};

