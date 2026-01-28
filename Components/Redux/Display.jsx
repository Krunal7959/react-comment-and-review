import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { delateAction, editAction } from './Action'


export default function Display() {
    const data = useSelector((store) => { return store })
    // console.log(data)

    const dispatch = useDispatch()

    function handelDelete(i) {

        dispatch(delateAction(i))

    }

    function handelEdit(i) {

        var newvalue = prompt("enter new value")

        if (newvalue) {

            dispatch(editAction(i, newvalue))
        }
    }


    return (
        <div>
            <h1>Display</h1>
            {
                data.map((el, i) => {
                    return <>
                        <li key={i}>{el}
                            <button onClick={() => handelDelete(i)} style={{ margin: '10px 10px' }}>Delete</button>
                            <button onClick={() => handelEdit(i)} style={{ margin: '10px 10px' }}>Edit</button>

                        </li>

                    </>
                })
            }
        </div>
    )
}