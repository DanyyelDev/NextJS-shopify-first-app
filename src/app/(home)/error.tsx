"use client"

import { useEffect } from "react";
import 'app/sass/globals.sass'
import { ErrorPageProrps } from "../../../types";


export default function Error({error, reset}: ErrorPageProrps){

    useEffect(() => {
        //Puedo implementar el envio de mi error a un servicio que guarde los errores
        //para no mostrarlo en el front
        //console.log(error);
    })

    return(
        <div className="errors">
            <h1>Ha ocurrido un error ▶</h1>
            <button onClick={reset}>↻</button>
        </div>
    )
}