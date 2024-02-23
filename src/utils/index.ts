function formatItemPrice(amount: number) {
  const priceString = amount.toString();

  const mainPart = priceString.slice(0, -2);
  const decimal = priceString.slice(-2);

  const priceFormatted = parseInt(mainPart).toLocaleString('es-AR');

  return { priceFormatted, decimal };
}

export { formatItemPrice };
