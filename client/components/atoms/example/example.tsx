import { h, FunctionalComponent } from 'preact'
import { useStyles } from './example.styles'

export type ExampleProps = h.JSX.HTMLAttributes<HTMLButtonElement>

export const Example: FunctionalComponent<ExampleProps> = ({
  children,
  className,
  ...rest
}) => {
  const { wrap } = useStyles()
  return (
    <button className={`${wrap} ${className}`.trim()} {...rest}>
      {children}
    </button>
  )
}
