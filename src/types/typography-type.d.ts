export type fontBaseType = 'heading' | 'body';
export type fontVariantType =
  | 'light'
  | 'medium'
  | 'semibold'
  | 'bold'
  | 'extrabold'
  | 'italic'
  | 'bolditalic';

export type FontThemeType = {
  [K in fontBaseType]: {[T in fontVariantType]: string}
};