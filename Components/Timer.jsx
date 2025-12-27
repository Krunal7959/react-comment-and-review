import React, { useEffect, useRef, useState } from 'react'

export default function TimerSS() {
    const [timer, setTimer] = useState(0)
    const id = useRef(null);
    function start() {
        id.current = setInterval(() => {
            setTimer((prev) => prev + 1)
        }, 1000);
    }
    function stop() {
        clearInterval(id.current);
    }



    return (

        <div>

            <h1>Timer is {timer}</h1>

            <button onClick={start}>start</button>
            <button onClick={stop}>stop</button>

        </div>
    )
}