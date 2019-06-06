---
title: Theming
date: 2019-05-31
locale: en
---

Theming a web with custom properties is as easy as it gets as shown in this article.

<!--more-->

Theming is such an important aspect of web development, and even though your app or website might not require different themes we should develop our visual styles such as color, spacing, fonts and animations as if they were to change every day. Why? Because it is what changes most often. If done well, a rebranding, introducing a "dark mode" or adjusting colors will be super easy.

## Custom properties

CSS's Custom properties are truly a gift. They open up so many possibilities because of their dynamic behaviour. We can create a new custom property in a given element as follows:

```css
.class {
    --a-custom-property: 42px;
}
```

Now every child of that element has access to this custom property:

```css
.class-child {
    margin-bottom: var(--a-custom-property);
}
```

We can even set default values in case the property is not declared:

```css
.class-child {
    margin-bottom: var(--a-custom-property, 12px);
}
```

And what is even more amazing is that we can change dynamically the values of custom properties via CSS or JavaScript:

```css
@media (max-width: 800px) {
    .class-child {
        --a-custom-property: 56px;
    }
}
```

_Note: One would thing that we can declare variables for the values of media queries but we can't, we'll have to wait until [env](https://developer.mozilla.org/en-US/docs/Web/CSS/env) lands in Edge and Internet Explorer to have full support (as of June 2019)._

## Theming

So, using custom properties how can we theme an app? Well, we first start by creating a `colors.css` file:

```css
:root {
    --white-color: hsla(0, 0%, 100%, 0.88);
    --white-light-color: hsl(0, 0%, 98%);
    --black-color: hsl(0, 1%, 15%);
    --dark-blue: hsl(222, 14%, 18%);
    --gray-color: hsl(150, 2%, 79%);
    --blue-color: hsl(229, 87%, 44%);
    --blue-light-color: hsl(206, 68%, 55%);
    --blue-dark-color: hsl(219, 16%, 16%);
    --teal-color: hsl(184, 97%, 37%);
    --orange-color: hsl(32, 100%, 50%);
}
```

_Note: The `:root` selector targets the root element of a document._

Now, if the color changes slightly to another one, we should change this file. But, should we still reference this in our components or CSSs? The answer is no, we should have another indirection. Imagine the following case. We declare in very component to use the custom property `--orange-color`. However, a new redesign requires a change of the main color of the app (which is the `--orange-color`) to a blue color. Now, in order to make it work we could do something like this:

```css
:root {
  --orange-color: blue;
}
```

But this is so bad at so many levels. For one, we have names that don't represent what they stand for and can misguide developers. What if we create a new custom property `--real-blue: darkblue;`? This for sure will ensue madness.

How can we tackle this problem? The answer lies in a previous paragraph: "requires a change of the main color of the app". What we need to identify is the main color of the app, also known as **primary color**. After that we should identify a **secondary color** or other colors and what do they represent. We can handle all this in a new file called `palette.css`:

```css
:root {
  --primary-color: var(--orange-color);
  --secondary-color: var(--teal-color);
}
```

Another thing I like to do is declare the foreground and background color, this allows me to create in a future a dark theme or a light theme:


```css
:root {
  --foreground-color: var(--black-color);
  --background-color: var(--white-color);
}
```
