import { createPortal } from "react-dom"
import styles from "./Portal.module.css"

type ModuleTypes = {
    isOpen: boolean
    onClose?: () => void
    children: React.ReactNode
}

const Portal = ({ isOpen, children }: ModuleTypes) => {
    if (!isOpen) return null
    return createPortal(
        <div className={styles.portalContainer}>
            <div className={styles.childContainer} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>,
        document.body
    )
}

export default Portal