import configData from "./config.json";

const config = configData as {
  brand: {
    name: string;
    tagline: string;
    cuisine: string;
    location: string;
  };
  colors: {
    primary: Record<string, string>;
    gradient: {
      from: string;
      via: string;
      to: string;
    };
    background: Record<string, string>;
    text: Record<string, string>;
  };
  theme: {
    style: string;
    accentColor: string;
    buttonStyle: string;
    borderRadius: string;
  };
  customization: Record<string, boolean>;
};

export const theme = {
  colors: config.colors,
  brand: config.brand,
  theme: config.theme,
  customization: config.customization,
};

export const getGradientClasses = () => {
  return `from-[${theme.colors.gradient.from}] via-[${theme.colors.gradient.via}] to-[${theme.colors.gradient.to}]`;
};

export const getPrimaryColor = (shade: keyof typeof theme.colors.primary = "500") => {
  return theme.colors.primary[shade];
};
