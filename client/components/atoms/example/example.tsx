import { h, FunctionalComponent } from 'preact'
import s from './example.css'
import cn from 'classnames'
export type ExampleProps = h.JSX.HTMLAttributes<HTMLButtonElement>

export const Example: FunctionalComponent<ExampleProps> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <button className={cn(s.wrap, className)} {...rest}>
      {children}
    </button>
  )
}
