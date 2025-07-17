import pluginVue from 'eslint-plugin-vue'
import globals from 'globals'

export default [
  ...pluginVue.configs['flat/vue2-recommended'],
  {
    rules: {
      'vue/multi-word-component-names': 'off'
    },
    languageOptions: {
      sourceType: 'module',
      globals: {
        ...globals.browser
      }
    }
  }
]