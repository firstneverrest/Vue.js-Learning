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

### Vue CLI

Use to create single page application which similar to create-react-app. It has more benefits as following:

- use modern JavaScript features
- provides us with a live-reload dev server
- optimize our code for production

Follow these steps to install:

1. use npm to install vue

```
npm install -g @vue/cli
```

2. create Vue project

```
vue create my-project
```

3. Then, Vue will ask us the question about preset. You can choose freely.

   1. Please pick a preset: Vue 2, **Vue 3** or manually select features
   2. Choose a version of Vue.js: 2.x or **3.x**
   3. Pick a linter / formatter config
   4. Pick additional lint features: Lint on save or Lint on commit
   5. Where do you prefer placing config for Babel, ESLint, etc.: In **dedicated config files** or In package.json
   6. Save this as a preset for future projects: y/**N**
   7. Pick the package manager to use when installing dependencies: **Yarn** or NPM

4. After that, use `cd my-project` and run Vue project with `yarn serve`

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

Vue directives is a special word that can only appear in the form of a prefixed HTML attribute to add more functionality. For example: v-on:click, @click (You can use either v-on: or @ to refer to Vue directive)

```
<element
  prefix-directiveId="[argument:] expression [| filters...]">
</element>
```

### Directives List

- `v-on:click` or `@click` - when click the element
- `v-on:mouseover` or `@mouseover` - when cursor mouse is entered the element
- `v-on:mouseleave` or `@mouseleave` - when cursor mouse is leaved the element
- `v-on:dblclick` or `@dblclick` - when double click at that element

### Mouse events

#### click events

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

#### event object

You can put function inside the directive and then receive event object in JavaScript function in the external JS. Event object store information about event such as event type, offset, position of the mouse cursor and much more.

If you don't define any argument in the function, you will receive the event object as the first argument.

```html
<div @mouseover="handleEvent">mouseover</div>
<div @mouseleave="handleEvent">mouseleave</div>
<div @dblclick="handleEvent">double click</div>
```

```javascript
methods: {
  handleEvent(e) {
    console.log(e)
  }
}
```

But if you want to define argument in the function and receive event object as well. You need to define `$event`

```html
<div @mouseover="handleEvent($event, 5)">mouseover</div>
<div @mouseleave="handleEvent">mouseleave</div>
<div @dblclick="handleEvent">double click</div>
```

```javascript
methods: {
  handleEvent(e, data) {
    console.log(e)
    if (data) {
      console.log(data)
    }
  }
}
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

## Outputting Lists

Using `v-for` directive to do outputting lists.

```html
<h1>Books</h1>
<ul>
  <li v-for="book in books">
    <h3>{{ book.title }}</h3>
    <p>{{ book.author }}</p>
    <p>{{ book.age }}</p>
  </li>
</ul>
```

```javascript
  data() {
    return {
      showBooks: true,
      books: [
        {
          title: 'The Great Empire',
          author: 'Chitsanupong',
          age: 21,
        },
        {
          title: 'The Abyssal World',
          author: 'Carlos',
          age: 18,
        },
        {
          title: 'The Motivation of Life',
          author: 'Mortos',
          age: 26,
        },
      ],
    };
  },
```

## Attribute binding

In order to make attribute in HTML can change dynamically, you can use `v-bind:attribute` to do attribute binding.

For example: `v-bind:href` - bind with href attribute in `<a></a>`

```html
<a v-bind:href="url">visit website</a>
```

## Dynamic classes

Use `v-bind:class` or `:class` to defined dynamic classes

```html
<ul>
  <li v-for="book in books">
    <h3 v-bind:class="{ published: book.isPublished }">{{ book.title }}</h3>
    <p>{{ book.author }}</p>
  </li>
</ul>
```

```javascript
 data() {
    return {
      books: [
        {
          title: 'The Great Empire',
          author: 'Chitsanupong',
          age: 21,
          isPublished: true,
        },
        {
          title: 'The Abyssal World',
          author: 'Carlos',
          age: 18,
          isPublished: true,
        },
        {
          title: 'The Motivation of Life',
          author: 'Mortos',
          age: 26,
          isPublished: false,
        },
      ],
    };
```

## Computed Properties

computed properties is similar to data properties but it can be computed before the data will be used. If the data in data properties change, the method in computed properties will change as well which depend on that data.

```html
<ul>
  <li v-for="book in filteredBooks">
    <h3 v-bind:class="{ published: book.isPublished }">{{ book.title }}</h3>
    <p>{{ book.author }}</p>
  </li>
</ul>
```

```javascript
  computed: {
    filteredBooks() {
      return this.books.filter((book) => book.isPublished);
    },
  },
```

## Folder Structure in Vue CLI

- node_modules - store all dependencies
- public - index.html and icon
- src
  - assets - keep images
  - components - Vue components
  - App.vue - the root component of Vue
  - main.js - render Vue component to HTML page
- .gitignore - ignore files when using git
- babel.config.js
- package.json - store project data and dependencies
- README.md - run commands
- yarn.lock or package-lock.json - lock version of dependencies

## Vue files and templates

In a Vue file, it will be divided into 3 parts:

1. template - write HTML (required)
2. script - write JavaScript (option)
3. style - write CSS (option)

```vue
<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js App" />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';

// write everything like cdn such as data, methods, computed etc.
export default {
  name: 'App', // optional
  components: {
    HelloWorld,
  },
};
</script>

// these CSS will be global style
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
```

## Template refs

allow to select HTML element in DOM like getElement in JavaScript.

```vue
<template>
  <h1>{{ title }}</h1>
  <input type="text" ref="name" />
  <button @click="handleClick">Change Title</button>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      title: 'My first Vue App',
    };
  },
  methods: {
    handleClick() {
      const title = this.$refs.name.value;
      this.title = title;
      this.$refs.name.classList.add('active');
    },
  },
};
```

## Scoped & Global CSS

Generally, every CSS in style tag will be applied in every components. If you want to scope your CSS to be used just in one component, you can just add `scope` in style tag like `<style scoped>...</style>`.

Vue do this by adding random data attribute to both HTML element and CSS class, id or element name.

Best practice: add global css in assets/global.css to separate the components css and global css. Then, import global css in main.js.

## Props

Passing props from parent component to child component with following code:

```vue
<Modal :header="header" :text="text" data="some data" />
```

## Emitting Custom Events

This is the way to pass function from parent component to child component. Using `$emit()` to refer to function props from parent.

```javascript
// App.vue
<Modal :header="header" :text="text" @close="toggleModal" />
```

```javascript
// Modal.vue
<template>
  <div class="backdrop" @click="closeModal">
    <div class="modal">
      <h3>{{ header }}</h3>
      <p>{{ text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: ['header', 'text'],
  methods: {
    closeModal() {
      this.$emit('close');
    },
  },
};
</script>
```

## Click Event Modifier

Specify the event more like `@click.right` means the event will works with right click only, it will not works with left click.

- `@click.shift` - click + hold shift click
- `@click.alt` - click + hold alt click
- `@click.self` - only element itself will be applied the event, the element inside will not be applied.

## Slots

Slots is similar to children props in React. When you want to pass HTML element to the child component.

```html
<!-- App.vue -->
<Modal @close="toggleModal">
  <h3>{{ header }}</h3>
  <p>{{ text }}</p>
</Modal>
```

```html
<!-- Modal.vue -->
<div class="modal">
  <slot></slot>
</div>
```

You can name the slot to make the child components can choose what slot they want to apply.

```html
<!-- App.vue -->
<div class="modal">
  <slot name="links"></slot>
</div>
```

```html
<!-- Modal.vue -->
<Modal @close="toggleModal">
  <template v-slot:links>
    <a href="#">more info</a>
  </template>
  <h3>{{ header }}</h3>
  <p>{{ text }}</p>
</Modal>
```

## Teleport

Sometimes, you may want to render component out of the `<div id="app"></div>` like modal. You can use teleport feature.

```html
<div id="app"></div>
<div class="modals"></div>
```

```vue
<template>
  ...
  <teleport to=".modals" v-if="showModal">
    <Modal @close="toggleModal">
      <template v-slot:links>
        <a href="#">more info</a>
      </template>
      <h3>{{ header }}</h3>
      <p>{{ text }}</p>
    </Modal>
  </teleport>
</template>
```

## Fix Vue problems

1. The template root requires exactly on element

```
[vue/no-multiple-template-root]
The template root requires exactly one element
```

This happens because you open multiple projects in one workplace which means you don't open Vue project in the root of the workplace. How this problem occur? - maybe eslint-plugin-vue cannot be used when you open multiple projects.
