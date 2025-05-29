"use client"

import { useReducer } from "react"

export default function ModalBackDrop(){
    const router = useReducer();

    return <div className="modal-backdrop" onClick={router.back}/>
}