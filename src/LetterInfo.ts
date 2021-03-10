export const VowelLetters: [string, string][][] = [
  [['a', 'A'], ['á', 'Á']],
  [['i', 'I'], ['í', 'Í']]
];

export const ConsonantLetters: [string, string][][] = [
  [['k', 'K']],
  [['s', 'S'], ['š', 'Š']]
];

const AllLetters: [string, string][][] = VowelLetters.concat(ConsonantLetters);

export const LetterSelector = (key: string, isCapitalized: boolean, isDiacritized: boolean): string => {
  const serieses = AllLetters.filter(series=> series[0][0] === key.toLowerCase());
  if (serieses.length === 0) return "";

  const series = serieses[0];
  const pair =
    isDiacritized && series.length >= 2 ? series[1] : series[0];

  return isCapitalized ? pair[1] : pair[0];
}
