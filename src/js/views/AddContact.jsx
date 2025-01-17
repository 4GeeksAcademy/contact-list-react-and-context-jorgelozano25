import React, { useState, useEffect, useRef, useContext } from "react";
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Context } from "../store/appContext.js";


const AddContact = () => {

    const { store, actions } = useContext(Context)
    let navigate = useNavigate();
    const { id } = useParams(); //se obtine el id colocado en el layout

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");

    function guardarContacto(e) {
        e.preventDefault()
        if (name.trim() == "" || phone.trim() == "" || email.trim() == "" || address.trim() == "") {
            alert("Campo incompleto")
            return null
        }
        const payload = {
            name: name,
            phone: phone,
            email: email,
            address: address
        };
        if (!id) {
            actions.createContact(payload)
        } else {
            actions.editContact(id, payload)
        }
        alert("Se grabaron los datos del contacto");
        navigate("/");
        setName("");
        setPhone("");
        setEmail(""),
        setAddress("");

    }

    useEffect(() => {
        if (id && store.listContacts.length > 0) {
            const currentContact = store.listContacts.find(contact => contact.id == id)
            setName(currentContact.name)
            setPhone(currentContact.phone)
            setEmail(currentContact.email)
            setAddress(currentContact.address)
        }
    }, [id, store.listContacts])

    return (
        <div className="container">
            <h1 className="text-center">{!id ? "Añadir nuevo contacto" : `Editando contacto: ${name}`}</h1>

            <form className="container" onSubmit={guardarContacto}>

                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput1" className="form-label">Nombre y apellidos</label>
                    <input type="text" className="form-control" id="formGroupExampleInput1" placeholder="Nombre y apellidos" onChange={(e) => setName(e.target.value)} value={name} required />

                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput2" className="form-label">Email</label>
                    <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput3" className="form-label">Telefono</label>
                    <input type="text" className="form-control" id="formGroupExampleInput3" placeholder="Telefono" onChange={(e) => setPhone(e.target.value)} value={phone} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput4" className="form-label">Dirección</label>
                    <input type="text" className="form-control" id="formGroupExampleInput4" placeholder="Dirección" onChange={(e) => setAddress(e.target.value)} value={address} required />
                </div>
                <div className="mb-3">
                    <button type="submit" className="btn btn-primary" >Guardar</button>
                </div>
            </form>

            <Link to="/">Volver a contactos</Link>
        </div>
    );


};
export default AddContact;