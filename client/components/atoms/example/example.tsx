import { h, FunctionalComponent } from 'preact'

export type ExampleProps = h.JSX.HTMLAttributes<HTMLButtonElement>

export const Example: FunctionalComponent<ExampleProps > = ({
  children,
  className = '',
  ...rest
}) => {
  return (
    <button className={`${className}`.trim()} {...rest}>
      {children}
    </button>
  )
}
