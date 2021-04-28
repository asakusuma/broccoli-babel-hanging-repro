const babel = require('broccoli-babel-transpiler');
const { createBuilder } = require('broccoli-test-helper');

async function run() {
  let tree = new babel('src', { unknownOption: true });
  let output = createBuilder(tree);
  try {
    await output.build();
  } finally {
    await output.dispose();
  }
}

run();