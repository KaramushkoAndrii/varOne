
import { lazy } from 'react'
import './imgContainer.scss'


const ImgContainer = ({src, alt, classes = null}) => {
    return (
        <>
            <div className={classes ? `img__container ${classes}` : `img__container`}>
                <img loading={lazy} src={src} alt={alt} />
            </div>
        </>
    )
}

export default ImgContainer