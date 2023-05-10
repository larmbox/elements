# Theme Configuration

Elements includes a default theme named `default`. To override the default theme, add an `$e-themes` Sass variable to your Sass file:

::: warning
$e-themes variable has to be created before importing any elements stylesheets.
:::

Each variant should have 15 shades of the variant, number 8 being the reference color and three opacity levels.

- 1-7 are lighter shades of the reference color, 1 being the lightest.
- 9-15 are darker shades of the reference color, 15 being the darkest.
- T25, T50, T75 should be the reference color at different opacity levels (0.25, 0.5, 0.75).

You can also use the create-palette function to automatically create variations of your reference color:

<div class="theme-palette">
  <div v-for="t in ['primary', 'secondary', 'success', 'error', 'brown']" :key="t">
    <div v-for="i in [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,'T25','T50','T75']" :key="i" :style="'background-color:' + `var(--e-${t}-${i})`">
      {{i}}
    </div>
  </div>
</div>

<button @click="o">Change</button>

<div style="background-color: var(--e-body-color-two); width: 32px; height: 32px;"></div>

<script>
export default {
  data() {
    return {
    b: false

    }
  },
  methods: {
    o() {
      this.b = !this.b
    }
  }
}
  </script>

```scss
@import '@larmbox/elements/dist/theme/create-palette';

$e-themes: (
  'default': (
    // Define each color separately:
    'primary':
      (
        1: #f3f8fd; 2: #d2e3f8; 3: #b0cff3; 4: #8fbbee; 5: #6da6e9; 6: #4c92e4;
          7: #2a7ddf; 8: #0969da; 9: #085bbc; 10: #074c9f; 11: #053e81; 12:
          #043063; 13: #032246; 14: #021328; 15: #00050a; T25: rgba(
            9,
            105,
            218,
            0.25
          ) ; T50: rgba(9, 105, 218, 0.5) ; T75: rgba(9, 105, 218, 0.75) ;,
      ),
    // Or, use create-palette function:
    'secondary': create-palette(#0969da),
  ),
  'dark': (
    // Add variants for a dark theme here.
  ),
);

// Then, import the elements.scss stylesheet:
@import '@larmbox/elements/dist/theme/elements';
```
