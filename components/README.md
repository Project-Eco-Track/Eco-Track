- When creating components, it is recommended to follow a self-contained approach by organizing the code into separate files such as index.ts, Component.tsx, and Component.scss. Additionally, consider creating folders within the component directory to store local dependencies like images or other assets, ensuring a more organized and maintainable codebase

- Start the first letter of the component name with an uppercase letter, and use the same name for creating the SCSS file. This naming convention helps maintain consistency and clarity when referencing and importing components, ensuring a standardized approach throughout the project.

ie

```shell
/components
├── Component
│   ├── index.ts
│   ├── Component.tsx
│   ├── Component.scss
│   └── assets
│       ├── image.png
│       └── ...
├── AnotherComponent
│   ├── index.ts
│   ├── AnotherComponent.tsx
│   ├── AnotherComponent.scss
│   └── assets
│       ├── image.png
│       └── ...
└── ...
```
