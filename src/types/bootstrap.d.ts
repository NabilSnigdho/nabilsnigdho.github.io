declare module 'bootstrap/js/dist/util/index' {
	export function isDisabled(x: unknown): boolean
	export function isElement(x: unknown): x is Element
	export function isVisible(x: unknown): boolean
	export function noop(): void
}
