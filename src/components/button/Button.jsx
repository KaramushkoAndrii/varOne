
import './Button.scss'

const Button = (props) => {

    const mainClass = 'main_button'
    
    return (
        <button className={props.bg ? `${mainClass} ${ props.bg}` : `${mainClass}`} >
            {props.text}
        </button>
    )
}

export default Button