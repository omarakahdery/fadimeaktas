export function stringHaveCharacter(value?: string) {
  if (value === undefined) return false
  return value.length > 0
}