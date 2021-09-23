declare namespace ExampleCssNamespace {
  export interface IExampleCss {
    wrap: string
  }
}

declare const ExampleCssModule: ExampleCssNamespace.IExampleCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: ExampleCssNamespace.IExampleCss
}

export = ExampleCssModule
