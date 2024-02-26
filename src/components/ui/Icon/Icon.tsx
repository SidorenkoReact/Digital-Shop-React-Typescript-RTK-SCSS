import sprite from "../../../assets/icons/sprite.svg"
import React, {SVGProps} from "react";

interface IIconProps extends SVGProps<SVGSVGElement> {
    iconId: string;
}

const Icon: React.FC<IIconProps> = ({iconId, ...rest}) => {
    return (
        <svg {...rest}>
            <use href={`${sprite}#${iconId}`} />
        </svg>
    )
}


export {Icon}
