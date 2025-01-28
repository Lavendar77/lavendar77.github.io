import js from "@eslint/js"
import pluginVue from 'eslint-plugin-vue'

export default [
    ...pluginVue.configs['flat/recommended'],
    js.configs.recommended,
    {
        rules: {
            semi: ["error", "never"],
        },
        languageOptions: {
            ecmaVersion: "latest",
        },
        files: [
            "**/*.js",
            "**/*.jsx",
            "**/*.vue",
            "**/*.cjs",
            "**/*.mjs",
        ],
        ignores: [
            "registerServiceWorker.js",
        ],
    }
]
