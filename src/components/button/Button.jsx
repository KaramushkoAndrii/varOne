
import './Button.scss'

const Button = ({bg, onClick, text}) => {

    const mainClass = 'main_button'
    
    return (
        <button className={bg ? `${mainClass} ${ bg}` : `${mainClass}`} onClick={onClick ? onClick : null}>
            {text}
        </button>
    )
}

export default Button