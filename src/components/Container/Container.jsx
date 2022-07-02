import { useEffect, useState } from "react";
import ItemCounter from "../ItemCounter/ItemCounter";
import { ItemDetailList } from "../ItemDetailList/ItemDetailList";


function Container() {

    

    return (
        <main className="text-dark py-5 mt-5 mx-4 row" >

            <ItemDetailList />

        </main>
    )
}

export default Container;