import { h, FunctionalComponent } from 'preact'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  wrap: {
    background: 'red',
  },
})
export const Example: FunctionalComponent<{ onChange?: () => void }> = ({
  children,
  ...rest
}) => {
  const { wrap } = useStyles()
  return (
    <button className={wrap} {...rest}>
      {children}
    </button>
  )
}
