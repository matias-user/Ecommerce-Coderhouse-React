import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { CartContext } from "../../context/CartContext";

export const Form = (   ) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const { addUser } = useContext(CartContext);

    useEffect(()=>{
        addUser(name, phone, email);
    }, [name, phone, email])

    return (
        <>
            <form className="m-auto mt-2 card" >
                <div className="card-header">
                    <span>Contact details</span>
                </div>
                <div className="card-body">
                    <label htmlFor="name" className="form-label">Name:</label>
                    <input 
                        onInput={ e => setName( e.target.value ) } 
                        className="form-control mb-2" 
                        refname="name" 
                        type="text" 
                        placeholder="Name" />

                    <label  htmlFor="tel" className="form-label">Phone:</label>
                    <input 
                        onInput={ e => setPhone(e.target.value) } 
                        className="form-control mb-2" 
                        refname="tel" 
                        type="number" 
                        placeholder="99999999" />

                    <label htmlFor="email" className="form-label">Email:</label>
                    <input 
                        refname='email' 
                        onInput={ e => setEmail(e.target.value) } 
                        className="form-control mb-2" 
                        type="email" 
                        placeholder="email@example.com"
                         />

                </div>

            </form>
        </>
    )
}
