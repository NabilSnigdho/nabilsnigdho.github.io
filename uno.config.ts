import transformerVariantGroup from '@unocss/transformer-variant-group'
import { defineConfig, presetTypography, presetUno } from 'unocss'

export default defineConfig({
	presets: [presetUno(), presetTypography()],
	transformers: [transformerVariantGroup()],
})
