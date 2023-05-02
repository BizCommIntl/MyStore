import React, { createRef, useRef } from "react";
import { useReactToPrint } from "react-to-print";

export default function MyTestPrinting() {


    // START   ==================[  Handle Printing  ]=====================
    const compRefX = useRef();
    // const compRef = useRef();
    // const handlePrint = useReactToPrint({
    //     content: () => compRefX.current,
    //     // content: () => 'Bismillah',
    //     onAfterPrint: () => alert('Print succeeded')
    // })

    const localPrinting = useReactToPrint({
        // content: () => compRef.current,
        //content: () => compRefX.current,
        content: () => compRefX.current,
        onAfterPrint: () => alert('Print succeeded')
    })
    // END   ==================[  Handle Printing  ]=====================


    return (
        <>
            <h2>MyTestPrinting</h2>
            <button onClick={() => localPrinting()}> start print </button>

            <div ref={compRefX} className="d-none text-black">
                <h3>Title Page </h3>
                <p>para1</p>
                <p>para2</p>
            </div>



        </>
    )
}
