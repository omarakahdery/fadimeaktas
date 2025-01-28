export type TCurrencyOptions = {
  lang?: string;
  currency?: string;
  showFraction?: boolean;

};
export const formatCurrency = (
  value?: number,
  options: TCurrencyOptions = {
    lang: "tr-TR",
    currency: "TRY",
    showFraction: false,
  },
) => {
  const formattedValue = Math.abs(value || 0).toLocaleString(options.lang, {
    style: "currency",
    currency: options.currency,
    minimumFractionDigits: options.showFraction ? 2 : 0,
    maximumFractionDigits: options.showFraction ? 2 : 0,
  });
  if (!!value && value < 0) {
    return `-${formattedValue}`;
  }
  return formattedValue;
};