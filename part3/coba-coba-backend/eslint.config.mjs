import globals from "globals";
import { defineConfig } from "eslint/config";
import js from '@eslint/js'
import sytlisticJs from '@stylistic/eslint-plugin-js'

const lineEndingValue = process.platform === 'win32' ? 'windows' : 'unix';

export default defineConfig([
  js.configs.recommended,
  { 
    files: ["**/*.js"], 
    languageOptions: { sourceType: "commonjs" },
    plugins: {       
      '@stylistic/js': sytlisticJs,    
    },    
    rules: {       
      '@stylistic/js/indent': ['error', 2],      
      '@stylistic/js/linebreak-style': ['error', lineEndingValue],      
      '@stylistic/js/quotes': ['error', 'single'],      
      '@stylistic/js/semi': ['error', 'never'],    
      eqeqeq: 'error',
      'no-trailing-spaces': 'error',    
      'object-curly-spacing': ['error', 'always'],    
      'arrow-spacing': ['error', { before: true, after: true }],
    }, 
   },

  { 
    files: ["**/*.{js,mjs,cjs}"], 
    languageOptions: { globals: globals.node } 
  },

  {
    ignores: ['dist/**']
  },
]) 