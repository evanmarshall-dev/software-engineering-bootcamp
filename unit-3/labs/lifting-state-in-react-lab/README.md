# Burger Stacker

In this lab, you'll be building a burger stacking application. The user will be able to select ingredients to add to their burger, and the ingredients will be displayed in a stack. This will demonstrate how to lift state up in a React application.

## Objectives

- **App**: The parent component containing `<BurgerStack>` and `<IngredientList>`. It will also contain `stack` state, and two functions for manipulating that state.
- **BurgerStack**: A `<ul>` that renders the elements held in `stack`. Each ingredient rendered in this component should contain a button for removing the ingredient from the `stack`.
- **IngredientList**: A `<ul>` that renders the elements held in `availableIngredients`. Each ingredient rendered in this component should contain a button for adding the ingredient to the `stack`.

## User Stories

- As a user, I want to be able to see a list of the ingredients that can be added to my burger on the left side of the screen.
- As a user, I want to be able to see a stack of the ingredients that make up my burger on the right side of the screen.
- As a user, I want to click a '+' button on an ingredient to `add it` to my burger stack. This action will place the ingredient on the stack displayed on the right side of the screen, while keeping the original ingredient list on the left unchanged.
- As a user, I want to click an 'X' button on an ingredient in my burger stack to `remove it`. This will take the ingredient off the stack on the right side of the screen, without changing the ingredient list on the left.
