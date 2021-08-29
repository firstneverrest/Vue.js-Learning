# Vue.js Learning

The Progressive JavaScript/TypeScript Framework. Vue is used to create dynamic & data-driven websites (SPA) or interactive website. The latest version of Vue is Vue 3. [Visit official website here](https://vuejs.org/).

## Vue concept and new features in Vue 3

1. Create a whole website with multiple pages & components
2. Composition API - improves on reusability, organization & readability
3. Multiple root elements - unlike React, Vue can has many root elements side-by-side in a component
4. Teleport component - render content from one component in a different place in a DOM which can used to create modal
5. Suspense component - handle asynchronous components easily and can provide fall-back content like spinner until data is loaded
6. TypeScript support
7. Vue can be used to create two things in website
   1. standalone widget used in some part of website in HTML page
   2. whole website which is single page application

## Installation and setup

### Use Vue with CDN

1. Create index.html
2. Add this CDN code in index.html (vue@next means version will always be latest version, you can define specific version with vue@3.0 or other)

```
<script src="https://unpkg.com/vue@next"></script>
```

3. Create external JavaScript file
4. Start create Vue app in the JS file

### Extension

Install Vue extension in vscode named "Vetur" which helps you write Vue easier.

## Data and Template

You can create template directly in HTML or create in JavaScript with template. But I recommend to create template in HTML to separate HTML from JavaScript and easier to write HTML.

1. Create template in JavaScript

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Learning Vue</title>
    <script src="https://unpkg.com/vue@next"></script>
  </head>
  <body>
    <div id="app"></div>
    <script src="app.js"></script>
  </body>
</html>
```

```javascript
// app.js
// root component
const app = Vue.createApp({
  // template in HTML
  template: '<h2>This is {{ title }}</h2>',

  // dynamic output
  data() {
    return {
      title: 'The Great Empire',
    };
  },
});

app.mount('#app');
```

2. Create template in HTML (recommended)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Learning Vue</title>
    <script src="https://unpkg.com/vue@next"></script>
  </head>
  <body>
    <div id="app">
      <h2>{{ title }}</h2>
      <p>From: {{ author }} - {{age}}</p>
    </div>
    <script src="app.js"></script>
  </body>
</html>
```

```javascript
const app = Vue.createApp({
  data() {
    return {
      title: 'The Great Empire',
      author: 'Chitsanupong',
      age: 21,
    };
  },
});

app.mount('#app');
```

## Directives

Vue directives is a special word that can only appear in the form of a prefixed HTML attribute to add more functionality.

```
<element
  prefix-directiveId="[argument:] expression [| filters...]">
</element>
```

## Click events

You can use `v-on:click` directives to add click events. Inside double quote, it's freely to insert any JavaScript code.

```HTML
 <div id="app">
    <h2>{{ title }}</h2>
    <p>From: {{ author }} - {{ age }}</p>
    <button v-on:click="age++">Increase age</button>
    <button v-on:click="age--">Decrease age</button>
    <div @click="title = 'Something new'">Change title</div>
  </div>
```

## Method

Instead of write JS code directly in `v-on:click`, you can write in JS file instead.

```HTML
<!-- index.html -->
<div @click="changeTitle('The Abyss')">Change title</div>
```

```javascript
const app = Vue.createApp({
  data() {
    return {
      title: 'The Great Empire',
      author: 'Chitsanupong',
      age: 21,
    };
  },
  methods: {
    changeTitle(title) {
      this.title = title;
    },
  },
});

app.mount('#app');
```

## Conditional Rendering

Use `v-if`, `v-else` and `v-show` to do conditional rendering.

- `v-if` - if the condition is true, it will show the element inside of it. If the condition is false, it will remove the element out of the DOM.
- `v-else` - use with `v-if`, if the condition of `v-if` is false, `v-else` will operate.
- `v-show` - like `v-if` but it will use CSS to operate. If the condition is true, the element inside will be display block. On the other hand, the element inside will be display none, if the condition is false.

```html
<div id="app">
  <div v-if="showBooks">
    <h2>{{ title }}</h2>
    <p>From: {{ author }} - {{ age }}</p>
  </div>
  <button @click="toggleShowBooks">
    <span v-if="showBooks">Hide Books</span>
    <span v-else>Show Books</span>
  </button>

  <div v-show="showBooks">currently showing books</div>
</div>
```

```javascript
const app = Vue.createApp({
  data() {
    return {
      showBooks: true,
      title: 'The Great Empire',
      author: 'Chitsanupong',
      age: 21,
    };
  },
  methods: {
    changeTitle(title) {
      this.title = title;
    },
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
  },
});

app.mount('#app');
```
