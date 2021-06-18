import { h, FunctionalComponent } from 'preact'
import s from './example.css'
export type ExampleProps = h.JSX.HTMLAttributes<HTMLButtonElement>

export const Example: FunctionalComponent<ExampleProps> = ({
  children,
  className = '',
  ...rest
}) => {
  return (
    <button className={`${s.wrap} ${className}`.trim()} {...rest}>
      {children}
    </button>
  )
}
