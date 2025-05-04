# **List command untuk server**

### **IP ES2**
13.236.137.153

### **Untuk upload file yang dirubah ke server dari local machine**
rsync -avz --exclude 'node_modules' --exclude '.git' --exclude '.env' \
-e "ssh -i ~/.ssh/sea-siriel-windows.pem" \
. ubuntu@ec2-13-236-137-153.ap-southeast-2.compute.amazonaws.com:~/Notes-app/Backend

### **Untuk connect ke cloud vm aws**
ssh -i "~/.ssh/sea-siriel-windows.pem" ubuntu@ec2-13-236-137-153.ap-southeast-2.compute.amazonaws.com

### **Untuk mongodb**
sirielfahri - Profesor31

### **Untuk mongodb**
mongodb+srv://sirielfahri:Profesor31@cluster0.td6raz5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

### **Install eslint**
npm install eslint @eslint/js --save-dev
W
### **initialized eslint locally**
npx eslint --init
npm install --save-dev @stylistic/eslint-plugin-js

### **added rules to eslint**
import globals from 'globals'
import js from '@eslint/js'
import stylisticJs from '@stylistic/eslint-plugin-js'

export default [
  js.configs.recommended,
  {
    files: ['**/*.js'],
    languageOptions: {
      sourceType: 'commonjs',
      globals: { ...globals.node },
      ecmaVersion: 'latest',
    },
    plugins: {
      '@stylistic/js': stylisticJs,
    },
    rules: {
      '@stylistic/js/indent': ['error', 2],
      '@stylistic/js/linebreak-style': ['error', 'unix'],
      '@stylistic/js/quotes': ['error', 'single'],
      '@stylistic/js/semi': ['error', 'never'],
      eqeqeq: 'error',
      'no-trailing-spaces': 'error',
      'object-curly-spacing': ['error', 'always'],
      'arrow-spacing': ['error', { before: true, after: true }],
      'no-console': 'off',
    },
  },
  {
    ignores: ['dist/**'],
  },
]