# Lecture: Responsive Design

## Module: Testing Styles w/o Media Queries

> [!NOTE]
> References:
> [`clamp()`](https://developer.mozilla.org/en-US/docs/Web/CSS/clamp), [`min()`](https://developer.mozilla.org/en-US/docs/Web/CSS/min), [`max()`](https://developer.mozilla.org/en-US/docs/Web/CSS/max), [`minmax()`](https://developer.mozilla.org/en-US/docs/Web/CSS/minmax)

### `clamp()`

The clamp CSS function clamps a middle value within a range of values between a defined min and max.

The function takes three params:

1. The **minimum** value is the smallest (most negative) value. This is the lower bound in the range of allowed values. If the preferred value is less than this value, the **minimum** value will be used.
2. The **preferred** value is the expression whose value will be used as long as the result is between the minimum and maximum values.
3. The **maximum** value is the largest (most positive) expression value to which the value of the property will be assigned if the preferred value is greater than this upper bound.

> [!NOTE]
> The expressions can be math functions (i.e. using `calc()`) literal values, other expressions that evaluate to a valid argument type like `length`, nested `min()`, and `max()` functions.

The following example shows static and calculated values for a minimum width. When the width of the calculated value is equal to `1000px` or more then we switch to a fixed `1000px` value. We use `min()` to set a **maximum** width:

```css
body {
  width: min(1000px, calc(70% + 100px));
}
```

The following example shows static and calculated values for a maximum font size. We are using `max()` to set a **minimum** font size. When `1.2vw` is less than `1.2rem` it does not go any smaller and stays at `1.2rem`. This is helpful because really small text is hard to read.

```css
p {
  font-size: max(1.2rem, 1.2vw);
}
```

The following example shows setting a heading font size. It has a viewport-relative value with both a _min_ and _max_ threshold. The viewport-relative value is `2.5vw` that is **clamped** between `1.8rem` and `2.8rem`.

- If the _calculated_ value of `2.5vw` is less than `1.8rem`, then `1.8rem` will be used.
- If the _calculated_ value of `2.5vw` is greater than `2.8rem`, then `2.8rem` will be used.

```css
h1 {
  font-size: clamp(1.8rem, 2.5vw, 2.8rem);
}
```
