# Vue-stasher
> Implement data persistence with ease

### Installation

To install the package, run the follow ing command:

`npm i vue-stasher`

To use package in your component or the entire app, use the code below:

```
import VueStasher from 'vue-stasher'
```

### Usage

To make data of your component persistent, simply add `v-stash` directive to it, here's an example:

```html
<v-toggle-button v-stash="{ properties: ['toggled'] }">
    My state is: {{ toggled }}
</v-toggle-button>
```

Note: `properties` defines fields inside `data()` that are meant to be stored.

### Global components

If you have a component that's meant to retain it's values regardless of the page it's displaying on **(components like menus, search bars, notifications etc.)** - simply add `identifier: "my-unique-name"` to object returned by the directive.

Example:

```html
<v-menu v-stash="{ identifier: 'menu', properties: ['collapsedSections'] }">
    ...
</v-menu>
```
