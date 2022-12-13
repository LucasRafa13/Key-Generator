module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'standard-with-typescript',
    'next/core-web-vitals',
            "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier/@typescript-eslint",
        "prettier/react"
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json']
  },
  plugins: [
    'react',
    "prettier",
  ],
  rules: {
    "prettier/prettier": "error",
    'react/jsx-filename-extension': [2, { 'extensions': [ '.ts', '.tsx'] }],
  }
}
