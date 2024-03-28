export function toCurrencySymbol(currency?: string): string {
  if (!currency) return "";
  return currencySymbols[currency.toLowerCase()] || currency;
}

const currencySymbols: { [key: string]: string } = {
  usd: "$",
  eur: "€",
  gbp: "£",
  aud: "$",
  cad: "$",
  chf: "Fr",
  cny: "¥",
  jpy: "¥",
  nzd: "$",
  rub: "₽",
  brl: "R$",
  czk: "Kč",
  dkk: "kr",
  hkd: "$",
  krw: "₩",
  nok: "kr",
  pln: "zł",
  sek: "kr",
  sgd: "$",
  thb: "฿",
  try: "₺",
  twd: "$",
  zar: "R",
  inr: "₹",
  idr: "Rp",
  ils: "₪",
  php: "₱",
  aed: "د.إ",
};
