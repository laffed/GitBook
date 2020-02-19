import React from 'react'
import { dataResponse } from '../FindPage/FindPage'
//need an componentDidMount function 
function ProfilePage(props) {


    return (
        <div>
            Profile Page
            <p>{dataResponse}</p>
        </div>
    )
}


export default ProfilePage;