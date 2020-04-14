import env from '@env'

export const template = (head = '', html: string): string =>
  `
    <head>
      ${head}
    </head>
    <body>
      ${html}
      ${env.BODY_ASSETS}
    </body>
  `
