module.exports = {
  'env': {
    'es2021': true,
    'node': true,
    'mocha': true,
  },
  'extends': [
    'eslint:recommended',
  ],
  'rules': {
    'indent': [ 'error', 2, { 'SwitchCase': 1 } ],
    'quotes': [ 'error', 'single' ],
    'semi': [ 'error', 'always' ],
    'no-trailing-spaces': [ 'error' ],
    'no-unused-vars': [ 'warn' ],
    'no-var': [ 'error' ],
  }
};
