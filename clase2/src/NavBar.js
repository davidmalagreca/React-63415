import React from 'react';
import CardWidget from './CartWidget';
import ItemListContainer from './ItemListContainer';
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"></link>
const NavBar = () => {
    return (
        <ul className="nav nav-pills">
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Remeras</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Pantalon</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Short</a>
            </li>
            <div>
                <CardWidget/>
            </div>
            <div><ItemListContainer greeting={"Bienvenidos"} /></div>
        </ul>
    );
};

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>

export default NavBar;