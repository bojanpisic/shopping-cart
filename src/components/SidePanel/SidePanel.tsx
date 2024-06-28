import { ReactNode } from "react"
import styles from './SidePanel.module.scss';

type Props = {
  children: ReactNode,
  isOpened?: boolean
}

const SidePanel = ({ children, isOpened = false }: Props) => {
  return (
    <div className={`${styles['side-panel']} ${isOpened ? styles.active : ''}`}>
      {children}
    </div>
  )
}

export default SidePanel