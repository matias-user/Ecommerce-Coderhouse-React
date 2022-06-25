import ItemCount from "../itemCount/ItemCount";


function ItemListContainer(){

    const onAdd = ( counter) =>{

        // Si el valor es 0 salir.
        if( counter !== 0) {
            alert(`El valor es: ${counter}`);
        }
        
    };

    return (
        <main className="text-white py-5 mt-5 mx-4 row" >
            <div className="col-md-4">
            <ItemCount 
                initial={0} 
                stock={20} 
                onAdd={ onAdd }
                 />

            </div>
            <div className="col-md-4">
            <ItemCount 
                initial={0} 
                stock={5}
                onAdd={ onAdd } />

            </div>
            <div className="col-md-4">
            <ItemCount 
                initial={0} 
                stock={ 3 }
                onAdd={ onAdd } />

            </div>
        </main>
    )
}

export default ItemListContainer;