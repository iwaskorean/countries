export const lightTheme = {
  color: 'hsl(200, 15%, 8%)',
  boxShadow: '3px 3px 7px rgba(210, 210, 210, 0.7)',
  inputBackground: 'hsl(209, 23%, 22%)',
  backgroundColor: 'hsl(0, 0%, 97%)',
  elementBackgroundColor: 'hsl(0, 0%, 100%)',
};

export const darkTheme = {
  color: 'hsl(0, 0%, 100%)',
  boxShadow: '3px 3px 7px rgba(0, 0, 0, 0.7)',
  inputBackground: 'hsl(209, 23%, 22%)',
  backgroundColor: 'hsl(207, 26%, 17%)',
  elementBackgroundColor: 'hsl(209, 23%, 22%)',
};

export type ThemeType = {
  color: string;
  boxShadow: string;
  inputBackground: string;
  backgroundColor: string;
  elementBackgroundColor: string;
};
