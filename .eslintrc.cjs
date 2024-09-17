// module.exports = {
//   root: true,
//   plugins: ['import'],
//   extends: ['plugin:prettier/recommended', 
//     // 'plugin:import/recommended'
//     "plugin:import/errors",
//     "plugin:import/warnings",
//     "plugin:import/typescript",
//   ],
// };

module.exports = {
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  extends: [
    'eslint:recommended',
    '@nuxtjs/eslint-config-typescript',
    'plugin:prettier/recommended',
  ],
  rules: {
        'no-console': 'off',
        'vue/html-comment-content-newline': ['error', {
      singleline: 'never', // Отключает перенос на новую строку для однострочных комментариев
      multiline: 'never',  // Отключает перенос на новую строку для многострочных комментариев
    }],
    },
};