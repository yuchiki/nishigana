export const VowelLetters: [string, string][][] = [
  [['a', 'A'], ['á', 'Á']],
  [['i', 'I'], ['í', 'Í']],
  [['u', 'U'], ['ú', 'Ú']],
  [['e', 'E'], ['é', 'É']],
  [['o', 'O'], ['ó', 'Ó']],
  [['y', 'Y'], ['ů', 'Ů']],
];

export const ConsonantLetters: [string, string][][] = [
  [['k', 'K'], ['ǩ', 'Ǩ']],
  [['g', 'G'], ['ǧ', 'Ǧ']],
  [['s', 'S'], ['š', 'Š']],
  [['z', 'Z'], ['ž', 'Ž']],
  [['t', 'T'], ['ť', 'Ť']],
  [['c', 'C'], ['č', 'Č']],
  [['d', 'D'], ['ď', 'Ď']],
  [['n', 'N'], ['ň', 'Ň']],
  [['x', 'X'], ['x̌', 'X̌']],
  [['m', 'M'], ['m̌','M̌']],
  [['j', 'J']],
  [['r', 'R'], ['ř', 'Ř']],
  [['w', 'W']],
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
