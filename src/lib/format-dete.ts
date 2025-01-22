export const formatDate = (date: any, locale: string = "tr-TR") => {
  date && (date = new Date(date));

  const options: any = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  };

  const toLocaleDateString = () => {
    return new Intl.DateTimeFormat(locale, options).format(date);
  };

  const toLocaleDateTimeString = () => {
    const utcPlus3Date = new Date(date.getTime());

    return new Intl.DateTimeFormat(locale, {
      ...options,
      hour: "2-digit",
      minute: "2-digit",
    }).format(utcPlus3Date);
  };

  return {
    toLocaleDateString,
    toLocaleDateTimeString,
  };
};