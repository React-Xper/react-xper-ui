import React, { createContext } from "react";

interface ITranslatable {
  text: string;
  language: string;
}

interface ITranslateProvider {
  src: any;
}

const TranslateContext = createContext({});
const { Provider, Consumer } = TranslateContext;

/**
 * @name  TranslateProvider
 * @description Context provider to use translatable texts
 * @usedBy Translatable
 */
export const TranslateProvider: React.FunctionComponent<ITranslateProvider> = ({
  src,
  children,
}) => {
  return <Provider value={src}>{children}</Provider>;
};

/**
 * @name  Translatable
 * @description Context consumer to use translatable texts
 * @reliesOn TranslateProvider
 */
export const Translatable: React.FunctionComponent<ITranslatable> = ({
  text,
  language,
}) => {
  return (
    <Consumer>
      {(value: any) => {
        const localizedText = value?.[language]?.[text];
        if (!localizedText) {
          console.error(
            `Unable to translate the keyword ${text} for ${language} language. Please check the source of provider.`
          );
          return <></>;
        }

        return <>{localizedText}</>;
      }}
    </Consumer>
  );
};
