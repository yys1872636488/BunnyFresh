import { globalIgnores } from 'eslint/config'
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'
import pluginVue from 'eslint-plugin-vue'

export default defineConfigWithVueTs(
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}'],
  },

  globalIgnores(['**/dist/**', '**/dist-ssr/**', '**/coverage/**']),

  // Vue 官方规则
  pluginVue.configs['flat/essential'],
  vueTsConfigs.recommended,

  // ✅ 一定要放在“最后”
  {
    rules: {
      'vue/multi-word-component-names': 'off'
    }
  }
)
