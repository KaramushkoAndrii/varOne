
import './imgContainer.scss'


const ImgContainer = ({src, alt, classes = null}) => {
    return (
        <>
            <div className={classes ? `img__container ${classes}` : `img__container`}>
                <img src={src} alt={alt} />
            </div>
        </>
    )
}

export default ImgContainer