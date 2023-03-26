export function formatCurrency(value: string) {
  if (value.length === 1 && value !== '$') {
    return '$'.concat(value);
  }
  return value;
}
