export default function (/** @type {import('plop').NodePlopAPI} */ plop) {
  plop.setGenerator("component", {
    description: "this is a skeleton for components",
    prompts: [{ type: "input", name: "name", message: "Name your component" }], // array of inquirer prompts
    actions: [
      {
        type: "add",
        path: "src/components/{{titleCase name}}/Index.tsx",
        templateFile: "plop/templates/index.tsx.hbs",
      },
      {
        type: "add",
        path: "src/components/{{titleCase name}}/{{titleCase name}}.module.sass",
        templateFile: "plop/templates/styles.module.sass.hbs",
      },
      /* {
        type: "add",
        path: "src/stories/{{titleCase name}}/{{titleCase name}}.stories.tsx",
        templateFile: "plop/templates/stories.tsx.hbs",
      }, */
    ],
  });

  /* plop.setGenerator("test", {
    description: "this is a skeleton for tests",
    prompts: [{ type: "input", name: "name", message: "Name your test" }], // array of inquirer prompts
    actions: [
      {
        type: "add",
        path: "src/tests/{{titleCase name}}/{{titleCase name}}.test.tsx",
        templateFile: "plop/templates/test.tsx.hbs",
      },
    ],
  }); */

  plop.setHelper("titleCase", (str) => {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  });
}
