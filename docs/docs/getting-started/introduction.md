# Introduction

Elements is a component library for Vue.js version 3. The project is primarily developed and maintained by the [Larmbox](https://larmbox.com) team. New components and features are considered and implemented as required by the Larmbox team.

Elements is designed to be fully customizeable with support for custom themes and configurations.

## Documentation

This documentation aims to give you an overview of available components of Elements and instructions on how to use them. Each component has a _Component Reference_ section that lists all available props, events and slots for the component.

Each example includes a code snippet. Each snippet can be edited by clicking the **Edit** button inside the snippet. Once you make changes, they will be reflected instantly in the preview.

## Contributing

Even though the project is primarily developed by Larmbox, feel free to contribute anyway! Here are some ways you can contribute:

- Open bug reports
- Open feature requests
- Propose improvements to the documentation

Please refer to the [Larmbox Open Source Community Guidelines](https://github.com/larmbox/elements/blob/HEAD/CODE_OF_CONDUCT.md).

### Development

```bash
git clone https://github.com/larmbox/elements

cd elements

# Install dependencies
npm install

# Run tests
npm run test
npm run test:watch

# Lint
npm run lint
npm run lint:fix
```

#### Documentation

To run the documentation pages locally:

```bash
cd docs

# Install dependencies
npm install

# Run Vitepress
npm run start:dev
```

## License

Elements is licensed under the [MIT
License](https://github.com/larmbox/elements/blob/HEAD/LICENSE).
