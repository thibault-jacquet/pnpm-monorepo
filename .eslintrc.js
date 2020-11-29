module.exports = {
  env: {
    node: true,
    jest: true,
    es2017: true
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    project: './tsconfig.eslint.json',
    createDefaultProgram: true,
    ecmaFeatures: {
      jsx: true,
      modules: true
    }
  },
  ignorePatterns: ['**/dist/**', '**/node_modules/**', '**/lib/**', '*.js'],
  overrides: [
    {
      files: ['*.ts', '*.tsx']
    }
  ],
  plugins: ['@typescript-eslint', 'jest'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:import/errors',
    'plugin:jest/recommended',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
    'prettier',
    'prettier/@typescript-eslint'
  ],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'none',
        semi: false
      },
      {
        usePrettierrc: false
      }
    ],
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1,
        maxEOF: 1
      }
    ],
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc'
        },
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index'
        ]
      }
    ],
    'import/no-unresolved': [2, { ignore: ['@mimir'] }],
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-parameter-properties': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      { ignoreRestSiblings: true, argsIgnorePattern: '^_' }
    ],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'default',
        format: ['camelCase']
      },
      {
        selector: 'variable',
        format: ['camelCase', 'UPPER_CASE', 'PascalCase']
      },
      {
        selector: 'property',
        format: ['camelCase', 'PascalCase']
      },
      {
        selector: 'parameter',
        format: ['camelCase'],
        leadingUnderscore: 'allow'
      },
      {
        selector: 'interface',
        format: ['PascalCase'],
        prefix: ['I']
      },
      {
        selector: 'class',
        format: ['PascalCase']
      },
      {
        selector: 'enum',
        format: ['UPPER_CASE']
      },
      {
        selector: 'enumMember',
        format: ['UPPER_CASE']
      },
      {
        selector: 'typeParameter',
        format: ['PascalCase'],
        prefix: ['T']
      }
    ]
  }
}
