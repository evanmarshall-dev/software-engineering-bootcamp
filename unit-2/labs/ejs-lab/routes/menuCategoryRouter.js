const express = require("express");
const menuCategoryRouter = express.Router();

function menuCategoryRouteHandler(req, res) {
  // Extract the category param from URL when a request is made to a URL matching pattern /:category.
  const rawCategory = req.params.category;
  // Capitalize first letter of the category name for UI.
  const category = rawCategory.charAt(0).toUpperCase() + rawCategory.slice(1);
  // Filter the restaurants menu (stored in res.locals.RESTAURANT.menu) to find all items belonging to the requested category (rawCategory).
  const menuItems = res.locals.RESTAURANT.menu.filter(
    (item) => item.category === rawCategory
  );
  // Render category.ejs template and passing in message, showMessage flag, filtered menu items, and the formatted category name.
  res.render("category.ejs", {
    message: `Menu: ${category}`,
    showMessage: true,
    menuItems,
    category,
  });
}

// ROUTES
// Use the above handler to GET request to any category path.
menuCategoryRouter.get("/:category", menuCategoryRouteHandler);

module.exports = menuCategoryRouter;
