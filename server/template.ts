import env from '@env'

export const template = (head = '', html: string): string =>
  `
    <head>
      ${head}
      ${env.STYLES}
    </head>
    <body>
      ${html}
      ${env.SCRIPTS}
    </body>
  `
