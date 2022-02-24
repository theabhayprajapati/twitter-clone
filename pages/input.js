import TextareaAutosize from 'react-textarea-autosize';

import React, { useEffect, useRef, useState } from 'react'

const Input = () => {
    const fileinputRef = useRef()
    const [inputimage, setinputimage] = useState()
    const [preview, setpreview] = useState()
    useEffect(() => {


        if (inputimage) {
            const reader = new FileReader()
            reader.onloadend = () => {
                setpreview(reader.result)

            }
            reader.readAsDataURL(inputimage)

        }

        else {
            setpreview(null)
        }
    }, [inputimage])


    return (
        <div className="max-w-5xl mx-auto mt-10">
            <TextareaAutosize />
            <img src={preview} alt="" />
            <button onClick={(event) => {
                event.preventDefault();
                fileinputRef.current.click()
            }}>
                Add image
            </button>
            <input type="file" name="" id="" accept='image/*' onChange={(event) => {
                const file = event.target.files[0]
                if (file) {
                    setinputimage(file)
                } else {
                    setinputimage(null)
                }
            }} className="hidden" ref={fileinputRef} />
        </div>
    )
}

export default Input