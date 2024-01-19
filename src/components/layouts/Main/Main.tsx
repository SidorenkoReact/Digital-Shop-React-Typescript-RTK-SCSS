import React, {HTMLAttributes} from "react";
interface IMainProps extends HTMLAttributes<HTMLElement> {
    children: React.ReactNode
}

const Main: React.FC<IMainProps> = ({className, children, ...rest}) => {
    const mainClassName = `main ${className || ''}`

    return (
        <main {...rest} className={mainClassName}>
            <div  className="main__container">
                {children}
            </div>
        </main>
    )
}


export {Main}
