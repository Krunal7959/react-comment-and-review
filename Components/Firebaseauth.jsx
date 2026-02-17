/* global google */
import React, { useEffect } from 'react'

export default function Autho() {

    const handleCredentialLogin = (response) => {
        console.log(response)
    }

    useEffect(() => {
        google.accounts.id.initialize({
            client_id: "214764851814-7a8k1oru6g6gf8bhafvj3ap2lsdprvli.apps.googleusercontent.com",
            callback: handleCredentialLogin
        })

        google.accounts.id.renderButton(
            document.getElementById("googlesign"),
            { theme: "outline", size: "large" }
        )
    }, [])

    return (
        <div>
            <div id="googlesign"></div>
        </div>
    )
}