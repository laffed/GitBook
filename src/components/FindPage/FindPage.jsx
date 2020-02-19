import React from 'react';
import Atom from '../img/atom.png';
import './styles.css';
//add componentDidMount to clear dataresponse data

let dataResponse;

function FindPage(props) {
    // let reply;
    // const searchNode = document.getElementById("searchInput");
    // searchNode.addEventListener("keyup", event => {
    //     if (event.key === "Enter") {
    //         inputUserName = searchNode.value;
    //         const searchURL = `https://api.github.com/users/${inputUserName}`;
    //         fetch(searchURL)
    //             .then(response => {
    //                 if (response.status !== 200) {
    //                     document.getElementById("searchInput").value =
    //                         "Profile Doesn't Exist";
    //                     return;
    //                 } else {
    //                     reply = response.json()
    //                         .then(data => {
    //                             dataResponse = data;
    //                         })
    //                 }
    //             })
    //             .catch(() => {
    //                 return;
    //             });
    //         console.log(dataResponse)
    //     }
    // }


    return (

        <div className="find-wrapper">
            <div className="search-logo">
                <img src={Atom} alt="" srcSet="" />
            </div>
            <div className="search-text">Find Your Profile</div>
            <div className="search-input">
                <input id="searchInput" name="username" type="text" spellCheck="false" autoComplete="off" defaultValue="" />
            </div>
        </div>

    )
}




export { FindPage, dataResponse };