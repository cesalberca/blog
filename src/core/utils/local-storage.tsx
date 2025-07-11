/**
 * Utility functions for working with localStorage
 */

/**
 * Gets a value from localStorage
 * @param name The key to get from localStorage
 * @returns The value from localStorage or null if not found or if window is undefined
 */
export const getLocalStorage = (name: string): string | null => {
  if (typeof window === 'undefined') return null
  return localStorage.getItem(name)
}

/**
 * Sets a value in localStorage
 * @param name The key to set in localStorage
 * @param value The value to set
 */
export const setLocalStorage = (name: string, value: string): void => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(name, value)
  }
}
