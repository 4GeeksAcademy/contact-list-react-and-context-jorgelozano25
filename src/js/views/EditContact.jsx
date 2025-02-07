import React, { useState, useRef, useEffect, useContext } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { Context } from "../store/appContext.js";

const EditContact = () => {
    const { store, actions } = useContext(Context)
    let navigate = useNavigate();

    return (

        <div className="container">
            <h1 className="text-center">Actualizar contacto</h1>

            <form className="container">
                <div className="mb-3">
                    <label for="formGroupExampleInput1" className="form-label">Nombre y apellidos</label>
                    <input type="text" className="form-control" id="formGroupExampleInput1" placeholder="Nombre y apellidos" onChange={(e) => setName(e.target.value)} value={name} />
                </div>
                <div className="mb-3">
                    <label for="formGroupExampleInput2" className="form-label">Email</label>
                    <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email} />
                </div>
                <div className="mb-3">
                    <label for="formGroupExampleInput3" className="form-label">Telefono</label>
                    <input type="text" className="form-control" id="formGroupExampleInput3" placeholder="Telefono" onChange={(e) => setPhone(e.target.value)} value={phone} />
                </div>
                <div className="mb-3">
                    <label for="formGroupExampleInput4" className="form-label">Dirección</label>
                    <input type="text" className="form-control" id="formGroupExampleInput4" placeholder="Dirección" onChange={(e) => setAddress(e.target.value)} value={address} />
                </div>
                <div className="mb-3">
                    <button type="button" className="btn btn-primary">Actualizar contacto</button>
                </div>
            </form>

            <Link to="/"><a>Volver a contactos</a></Link>
        </div>
    )
}
export default EditContact;