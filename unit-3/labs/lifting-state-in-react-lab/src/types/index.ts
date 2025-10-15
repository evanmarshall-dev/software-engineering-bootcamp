export type Ingredient = {
  name: string;
  color: string;
};

export type Burger = {
  id: number;
  ingredients: Ingredient[];
};

export type IngredientProps = {
  ingredient: Ingredient;
  onClick: () => void;
  buttonLabel: string;
  buttonAction: string;
};

export type IngredientListProps = {
  ingredients: Ingredient[];
  onAddIngredient: (ingredient: Ingredient) => void;
};

export type BurgerStackProps = {
  stack: Burger["ingredients"];
  onRemoveIngredient: (index: number) => void;
};
