import React from 'react'
import InstagramIcon from '@material-ui/icons/Instagram'
import '../../src/App.css'

export default function ImageList(props) {

    return (

        <div className="center">
            {props.image.map((url, i) => {
                return (
                    <div>
                        <div>
                            <img src={url.urls.full} alt={url.alt_description} />
                            {/* <p className="center">
                                <InstagramIcon style={{ color: "#4c68d7" }} />
                                {url.user.instagram_username}</p> */}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
