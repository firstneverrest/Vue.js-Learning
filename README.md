# Vue.js Learning

The Progressive JavaScript/TypeScript Framework. Vue is used to create dynamic & data-driven websites (SPA) or interactive website. The latest version of Vue is Vue 3. [Visit official website here](https://vuejs.org/).

## Vue concept and new features in Vue 3

1. Create a whole website with multiple pages & components
2. Composition API - improves on reusability, organization & readability
3. Multiple root elements - unlike React, Vue can has many root elements side-by-side in a component
4. Teleport component - render content from one component in a different place in a DOM which can be used to create modal
5. Suspense component - handle asynchronous components easily and can provide fall-back content like spinner until data is loaded
6. TypeScript support
7. Vue can be used to create two things in website
   1. standalone widget used in some part of website in HTML page
   2. whole website which is single page application

## Installation and setup

### Use Vue with CDN (Widget)

1. Create index.html
2. Add this CDN code in index.html (vue@next means version will always be latest version, you can define specific version with vue@3.0 or other)

```
<script src="https://unpkg.com/vue@next"></script>
```

3. Create external JavaScript file
4. Start create Vue app in the JS file

### Vue CLI (SPA)

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

3. Create Vue component in JavaScript

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script src="https://unpkg.com/vue@next"></script>
    <link rel="stylesheet" href="styles.css" />
    <title>Vue Test</title>
  </head>
  <body>
    <div class="container">
        <ul>
          <user-list />
          <user-list />
          <user-list />
        </ul>
      </section>
    </div>

    <script src="script.js"></script>
  </body>
</html>

```

```js
app.component('user-list', {
  template: `
  <li
  >
    <p>{{ user }}</p>
    <input type="text" @click.stop />
    <p>{{ isChecked }}</p>
    <button @click="check">Check</button>
  </li>
  `,
  data() {
    return {
      isChecked: false,
      user: '',
    };
  },
  methods: {
    check() {
      this.isChecked = !this.isChecked;
    },
  },
});
```

## Directives

Vue directives is a special word that can only appear in the form of a prefixed HTML attribute to add more functionality. For example: v-on:click, @click (You can use either v-on: or @ to refer to Vue directive)

```
<element
  prefix-directiveId="[argument:] expression [| filters...]">
</element>
```

### Directives Mouse List

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

## Click Event Modifier

Specify the event more like `@click.right` means the event will works with right click only, it will not works with left click.

- `@click.shift` - click + hold shift click
- `@click.alt` - click + hold alt click
- `@click.self` - only element itself will be applied the event, the element inside will not be applied.

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
- `v-else-if` - means else if in programming language.
- `v-else` - use with `v-if`, if the condition of `v-if` is false, `v-else` will operate.
- `v-show` - like `v-if` but it will use CSS to operate. If the condition is true, the element inside will be display block. On the other hand, the element inside will be display none, if the condition is false (the elements that display none are not removed from the DOM).
- `v-html` - in order to output real HTML not just string.

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

Using `v-for` directive to do outputting lists and also loop through object.

```html
<h1>Books</h1>
<ul>
  <li v-for="(book, index) in books">
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

```html
<!-- loop through object -->
<ul v-else>
  <li v-for="(value, key, index) in {name: 'First', age: 21}" :key="some_id">
    {{ key }}: {{ value }} - {{ index }}
  </li>
</ul>

<!-- loop through array of number -->
<li v-for="num in 20">{{ num }}</li>
```

## Attribute binding

In order to make attribute in HTML can change dynamically, you can use `v-bind:attribute` to do attribute binding.

For example: `v-bind:href` - bind with href attribute in `<a></a>` or you can just use a shorthand`:href`.

```html
<a v-bind:href="url">visit website</a>

<!-- or -->

<a :href="url">visit website</a>
```

## Dynamic classes

Use `v-bind:class` or `:class` to defined dynamic classes

```html
<ul>
  <li v-for="book in books">
    <h3 v-bind:class="{ published: book.isPublished, active: book.isActive }">
      {{ book.title }}
    </h3>
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
          isActive: true
        },
        {
          title: 'The Abyssal World',
          author: 'Carlos',
          age: 18,
          isPublished: true,
          isActive: false
        },
        {
          title: 'The Motivation of Life',
          author: 'Mortos',
          age: 26,
          isPublished: false,
          isActive: false
        },
      ],
    };
 }
```

or the better way with computed properties

```html
<ul>
  <li v-for="book in books">
    <h3 :class="bookClasses">{{ book.title }}</h3>
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
          isActive: true
        },
        {
          title: 'The Abyssal World',
          author: 'Carlos',
          age: 18,
          isPublished: true,
          isActive: false
        },
        {
          title: 'The Motivation of Life',
          author: 'Mortos',
          age: 26,
          isPublished: false,
          isActive: false
        },
      ],
    };
 },
  computed: {
    bookClasses() {
      return { published: this.book.isPublished, active: this.book.isActive }
    }
  }
```

### Dynamic Classes with Array Syntax

```html
<!-- old -->
<ul>
  <li v-for="book in books">
    <h3 class="book" :class="{active: isPublished}">{{ book.title }}</h3>
    <p>{{ book.author }}</p>
  </li>
</ul>
```

```html
<!-- better way -->
<ul>
  <li v-for="book in books">
    <h3 :class="['book', {active: isPublished}]">{{ book.title }}</h3>
    <p>{{ book.author }}</p>
  </li>
</ul>
```

## Computed Properties

computed properties is similar to data properties but it can be computed before the data will be used. If the data in data properties change, the method in computed properties will change as well which depend on that data.

Computed properties help preventing Vue re-render unrelated content from methods rendering.

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

## Watchers

Watchers are used to trigger a function whenever a reactive property changes. You can use when you need to perform side effects in reaction to state changes.

```javascript
  data() {
    return {
      question: '',
      answer: 'Questions usually contain a question mark. ;-)'
    }
  },
  watch: {
    // whenever question changes, this function will run
    question(newQuestion, oldQuestion) {
      if (newQuestion.indexOf('?') > -1) {
        this.getAnswer()
      }
    }
  },
  methods: {
    async getAnswer() {
      this.answer = 'Thinking...'
      try {
        const res = await fetch('https://yesno/api')
        this.answer = (await res.json()).answer
      } catch (error) {
        this.answer = 'Error! Could not reach the API. ' + error
      }
    }
  }
```

## Methods vs Computed Properties vs Watchers

| Methods                                                       | Computed Properties                                                                                    | Watchers                                                |
| ------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------- |
| use with event binding or data binding                        | use with data binding                                                                                  | allow running any code in reaction to some changed data |
| method is executed for every re-render cycle of the component | only re-evaluated if one of their used values changed and suitable for data that depends on other data | not great when the task is depend on many data          |

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

## Scoped & Global CSS

Generally, every CSS in style tag will be applied in every components. If you want to scope your CSS to be used just in one component, you can just add `scope` in style tag like `<style scoped>...</style>`.

Vue do this by adding random data attribute to both HTML element and CSS class, id or element name.

Best practice: add global css in assets/global.css to separate the components css and global css. Then, import global css in main.js.

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
</script>
```

## Props

Passing props from parent component to child component with following code:

```vue
<!-- parent -->
<Modal :header="header" :text="text" data="some data" />

<!-- child -->
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

You can validate props by defining type of the props

```vue
<script>
export default {
  name: 'Modal',
  props: {
    title: {
      type: String,
      default: 'My first Vue App',
      required: true,
    },
    name: String,
    emailAddress: String,
    age: {
      type: Number,
      required: true,
      validator: (value) => {
        return value.length > 0;
      },
    },
  },
  methods: {
    closeModal() {
      this.$emit('close');
    },
  },
};
</script>
```

Very props that be passed to child component will always be string. Therefore, you need to use `v-bind` to interpret as an another type that you define in validation props and also turns prop to dynamic prop value.

```vue
<template>
  <div>
    <user
      v-for="user in users"
      :key="user.id"
      :title="user.title"
      :name="user.name"
      :email-address="user.email"
      :age="user.age"
    ></user>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  data() {
    return {
      users: [
        {
          id: 1,
          title: 'Life at Finnomena',
          name: 'Carlos',
          email: 'first@finnomena.com',
          age: 22,
        },
        {
          id: 2,
          title: 'A day in the life of a Software Engineer (Finnomena)',
          name: 'Carlos',
          email: 'first@finnomena.com',
          age: 24,
        },
        {
          id: 3,
          title: 'Agile and Scrum',
          name: 'Carlos',
          email: 'first@finnomena.com',
          age: 25,
        },
      ],
    };
  },
  methods: {
    handleClick() {
      this.title = 'Changed title';
    },
  },
};
</script>
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

## Fallthrough Attributes

Fallthrough attribute is an attribute or event listener which is passed to a child component but not explicitly declared in the receiving component's props or emits.

## Provide & Inject

Provide and Inject are used to pass data directly from the parent to a child component without passing through other components. Therefore, you can use provide & inject instead of emit.

```vue
<!-- Parent -->
<script>
export default {
  name: 'App',
  components: {},
  data() {
    return {
      users: [
        {
          id: 1,
          title: 'Life at Finnomena',
          name: 'Carlos1',
          email: 'first1@finnomena.com',
          age: 22,
        },
        {
          id: 2,
          title: 'A day in the life of a Software Engineer (Finnomena)',
          name: 'Carlos2',
          email: 'first2@finnomena.com',
          age: 24,
        },
        {
          id: 3,
          title: 'Agile and Scrum',
          name: 'Carlos3',
          email: 'first3@finnomena.com',
          age: 25,
        },
      ],
    };
  },
  provide() {
    return {
      users: this.users,
    };
  },
};
</script>

<!-- Child -->
<template>
  <div>
    <h1>Users</h1>
    <div v-for="user in users" :key="user.id">
      <p>{{ user.name }}</p>
      <p>{{ user.email }}</p>
    </div>
  </div>
</template>

<script>
export default {
  inject: ['users'],
};
</script>

<style></style>
```

## Global and Local Component

global component - register in main.js and can be used everywhere like template. The drawback of this kind of registration are web browser need to load all global component in once and the name of components in main.js file would be really huge and doesn't know where it be used.
local component - a better way to register a component when the component is used only in a few component.

## Slots

Slots is similar to children props in React. When you want to pass HTML element to the child component. Slots are very useful when use a create wrapper component and you would like to pass children HTML props/element into the wrapper component.

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
  <slot name="content"></slot>
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
  <!-- slot shorthand: #slotName -->
  <template #content>
    <p>some content</p>
  </template>
</Modal>
```

Tip: The style of slot should be in the target component not the parent that send slot template into a child component.

### Scoped Slot

```vue
<!-- single slot -->
<template>
  <div>
    <User #body="bodyProps">
      <p>This is a body slot</p>
      <p>{{ bodyProps.account }}</p>
    </User>
  </div>
</template>

<!-- multiple slots -->
<template>
  <div>
    <User>
      <template #body="bodyProps">
        <p>This is a body slot</p>
        <p>{{ bodyProps.account }}</p>
      </template>
      <template #footer="footerProps">
        <p>This is a footer slot</p>
        <p>{{ footerProps.contact }}</p>
      </template>
    </User>
  </div>
</template>
```

```vue
<template>
  <slot name="body" :account="account"> </slot>
</template>
```

## Dynamic Component

An alternative to `v-if` when you would like to conditionally render component. In addition, `<keep-alive><keep-alive>` can be used to tell Vue that components in the tag should not be removed entirely (data lost) but state should be cached behind the scenes.

```vue
<template>
  <keep-alive>
    <component :is="componentName"></component>
  <keep-alive>
</template>
```

## Teleport

Sometimes, you may want to render component out of the `<div id="app"></div>` like modal. You can use teleport feature.

- <teleport to=".modals" v-if="showModal"></teleport> - render in element that has modals class.
- <teleport to="body" v-if="showModal"></teleport> - render in the body tag.

```html
<!-- index.html -->
<div id="app"></div>
<div class="modals"></div>
```

```vue
// App.vue
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

## Lifecycle Hooks

From: [Vue Lifecycle Hooks](https://v3.vuejs.org/guide/instance.html#lifecycle-diagram)
Lifecycle hooks can make you choose when to run code such as when to fetch the data from the server? or when the component is created, what it should do? Vue lifecycle hooks can be used as below:

```vue
<script>
export default {
  beforeCreate() {
    console.log('component before created');
  },
  created() {
    console.log('component created');
  },
  beforeMount() {
    console.log('component before mounted');
  },
  mounted() {
    console.log('component mounted');
  },
  beforeUpdate() {
    console.log('component before updated');
  },
  updated() {
    console.log('component updated');
  },
  beforeUnmount() {
    console.log('component before unmounted');
  },
  unmounted() {
    console.log('component after unmounted');
  },
};
</script>
```

## Forms & Inputs

`v-model` directive can be used to handle form by enabling you to bind the variable in data to the input value. This directive create two-direction binding. The benefits of `v-model` are automatic handling number data type and two-direction binding which are not available by default in custom event handler.
`v-model` modifiers:

- lazy - listen to every change events (by default)
- number - typecast as a Number
- trim - trim user input whitespace (no leading or trailing whitespace)

```vue
// SignupForm.vue
<template>
  <form>
    <label>Email: </label>
    <input type="email" required v-model="email" />

    <label>Password: </label>
    <input type="password" required v-model="password" />
  </form>
  <p>Email: {{ email }}</p>
  <p>Password: {{ password }}</p>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
};
</script>
```

### Prevent Default of Form Submitting

Vue has another better alternative to JavaScript built-in function or `event.preventDefault()` which is event modifier.

```vue
<template>
  <form v-on:submit.prevent="submitForm">...</form>
</template>
```

## Fetching Data

```vue
<template>
  <div>
    <h1>User</h1>
    <p v-if="isLoading">Loading...</p>
    <p v-else-if="!isLoading && errorMsg">{{ errorMsg }}</p>
    <p v-else-if="!isLoading && (!users || users.length === 0)">
      No Users Found.
    </p>
    <ul v-else-if="!isLoading && users && users.length > 0">
      <li v-for="user in users" :key="user.id">
        {{ user.name }} - {{ user.email }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [],
      isLoading: true,
      errorMsg: null,
    };
  },
  methods: {
    getUsers() {
      fetch('https://jsonplaceholder.typicode.com/user')
        .then((response) => {
          if (response.status === 200) {
            return response.json();
          } else {
            throw new Error('Something went wrong on api server!');
          }
        })
        .then((data) => {
          this.users = data;
          this.isLoading = false;
        })
        .catch((error) => {
          this.errorMsg = error.message;
          this.isLoading = false;
          console.log(error);
        });
    },
  },
  mounted() {
    this.getUsers();
  },
};
</script>
```

## Vue Router

Vue Router is Similar to React router concept. When create a new project via Vue CLI, you can choose manually select features
-> choose Router -> Use history mode for router (Yes)

```js
// main.js
import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import Home from './pages/Home.vue';
import './assets/global.css';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: () => import('./pages/About.vue') },
  ],
  linkActiveClass: 'active-link', // adding class when the link is active
});

const app = createApp(App);

app.use(router);

app.mount('#app');
```

Use `<router-view />` to tell vue router know where to render the component.

```vue
<!-- App.vue -->
<template>
  <Navbar />
  <router-view />
</template>
```

Use `<router-link>` to navigate the page like `<a>` tag.

```vue
<!-- Navbar.vue -->
<template>
  <li>
    <router-link to="/">Home</router-link>
  </li>
  <li>
    <router-link to="/about">About</router-link>
  </li>
</template>
```

### Programmatic navigation

- `this.$router.push('/about');` to navigate the page by path.
- `this.$router.forward();` to navigate forward.
- `this.$router.back();` to navigate back.
- `this.$route.path;` get current path.
- `this.$route.params.id;` get the id param.
- `this.$route.query;` get the query.

### Route Params

```js
import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import Home from './pages/Home.vue';
import About from './pages/About.vue';
import User from './components/User.vue';
import './assets/global.css';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home, alias: ['/home', '/homepage'] }, // alias (not redirect)
    { path: '/about', component: About },
    { path: '/users/:userId', component: User, props: true }, // send params via props
    { path: '/:notFound(.*)', redirect: '/users/1' }, // not match any route
  ],
  linkActiveClass: 'active-link',
});

const app = createApp(App);

app.use(router);

app.mount('#app');
```

### Updating Params Data with Watcher

Dynamic route params cause some weird behavior when change to the path with params because the router will not re-create the component. Therefore, you need to use a watcher to update the params.

### Nested Route

```js
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/users',
      component: User,
      children: [
        { path: 'members', component: Test, props: true },
        { path: ':userId', component: Test, props: true },
      ],
    },
  ],
  linkActiveClass: 'active-link',
});
```

### More with named routes

```js
const routes = [
  {
    path: '/user/:username',
    name: 'user',
    component: User,
  },
];
```

```js
router.push({
  name: 'user',
  params: { username: 'erina' },
  query: { userid: '123' },
});
```

### Multiple Router View

```js
const routes = [
  {
    path: '/user/:username',
    name: 'user',
    components: { default: UsersList, footer: UsersFooter },
  },
];
```

```
<router-view name="footer"></router-view>
```

### Controlling Scroll Behavior

When you change route with router-link, you could see that the page position is still the same not go up to the top. So, you can change the scroll behavior in createRouter().

```js
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home, alias: ['/home', '/homepage'] },
    { path: '/about', component: About },
    { path: '/:notFound(.*)', redirect: '/' },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { left: 0, top: 0 };
  },
});
```

### Navigation Guards

```js
const router = createRouter({
  routes: [
    { path: '/', name: 'home', component: Home, alias: ['/home', '/homepage'] },
    {
      path: '/about',
      name: 'about',
      meta: { isAuth: true }
      component: About,
      beforeEnter(to, from, next) {
        console.log('beforeEnter');
        next();
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  console.log(from, to);
  if (to.path === '/about' && to.meta.!isAuth) {
    next({ name: 'home' });
  } else {
    next();
  }
});

router.afterEach((to, from) => {
  // sending analytics data
});
```

another guard that can be used in a component.

- `beforeRouteEnter(to, from, next)` - authentication
- `beforeRouteLeave(to, from, next)` - prevent user unsaved action before leaving page

Running order from home to about route.

1. beforeEach
2. beforeRouteEnter
3. afterEach
4. mounted
5. beforeRouteLeave
6. unmounted

## Transition and Animation

```vue
<template>
  <h1>Home Page</h1>
  <p>Welcome to our Home</p>
  <transition>
    <div class="box" v-if="isAnimated"></div>
  </transition>
  <button @click="animate()">Animate</button>
</template>

<script>
export default {
  data() {
    return {
      isAnimated: false,
    };
  },
  methods: {
    animate() {
      this.isAnimated = !this.isAnimated;
    },
  },
};
</script>

<style scoped>
.box {
  width: 100px;
  height: 100px;
  background: red;
  margin: 2rem;
}

.v-enter-from {
  opacity: 0;
  transform: translateX(0);
}

.v-enter-active {
  transition: all 1s ease-in-out;
}

.v-enter-to {
  opacity: 1;
  transform: translateX(100px);
}

.v-leave-from {
  opacity: 1;
  transform: translateX(100px);
}

.v-leave-active {
  transition: all 1s ease-in-out;
}

.v-leave-to {
  opacity: 0;
  transform: translateX(0);
}
</style>
```

### Use your own animation keyframe.

```css
.v-enter-from {
  /* opacity: 0;
  transform: translateX(0); */
}

.v-enter-active {
  /* transition: all 1s ease-in-out; */
  animation: box-animation 2s ease-out;
}

.v-enter-to {
  /* opacity: 1;
  transform: translateX(100px); */
}
```

### Use custom CSS class names

Add parameter name in your transition tag.

```vue
<template>
  <transition name="box-animate">
    <div class="box" v-if="isAnimated"></div>
  </transition>
</template>

<style>
.box-animate-enter-active {
  /* transition: all 1s ease-in-out; */
  animation: box-animation 2s ease-out;
}
</style>
```

### Transitioning Between Multiple Elements

```html
<transition name="box-animate" mode="out-in">
  <div class="box" v-if="isAnimated"></div>
  <div class="box2" v-else></div>
</transition>
```

### Animate Multiple Elements

```vue
<template>
  <transition-group tag="ul" name="user">
    <li v-for="user in users" :key="user.id" @click="removeUser(user.id)">
      {{ user.title }}
    </li>
  </transition-group>
</template>

<style scoped>
.user-enter-from {
  opacity: 0;
  transform: translateX(0);
}

.user-enter-active {
  transition: all 0.3s ease-in-out;
}

.user-enter-to {
  opacity: 1;
  transform: translateX(0);
}

.user-leave-from {
  opacity: 1;
  transform: translateX(0);
}

.user-leave-active {
  transition: all 0.3s ease-in-out;
}

.user-leave-to {
  opacity: 0;
  transform: translateX(0);
}
</style>
```

## Fix Vue problems

1. The template root requires exactly on element

```
[vue/no-multiple-template-root]
The template root requires exactly one element
```

This happens because you open multiple projects in one workplace which means you don't open Vue project in the root of the workplace. How this problem occur? - maybe eslint-plugin-vue cannot be used when you open multiple projects or you are still using Vue version 2 not version 3.
