import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export function deepClone<T>(obj: T): T {
	if (obj === null || typeof obj !== 'object') {
		return obj
	}

	if (Array.isArray(obj)) {
		return obj.map(deepClone) as any
	}

	return Object.fromEntries(
		Object.entries(obj).map(([key, value]) => [key, deepClone(value)])
	) as any
}

// Helper function to check if an object is nested
export function isNestedObject(obj: any): boolean {
	return (
		typeof obj === 'object' &&
		obj !== null &&
		!Array.isArray(obj) &&
		Object.keys(obj).some((key) => typeof obj[key] === 'object' && obj[key] !== null)
	)
}