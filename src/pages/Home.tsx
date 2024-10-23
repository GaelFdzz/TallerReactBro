import { useEffect, useState } from "react";
import '../styles/Home.css';

function Home() {
    const [data, setData] = useState([]); // Este almacena los datos de la API
    const [loading, setLoading] = useState(true); // Estado para controlar la carga

    const getProducts = async () => {
        setLoading(true); // Mostrar el spinner al iniciar la carga
        try {
            const response = await fetch("https://fakestoreapi.com/products/");
            if (!response.ok) {
                throw new Error('Error en la respuesta de la API'); // Detecta si la respuesta no es exitosa
            }
            const json = await response.json();
            setData(json);
            console.log(json);
        } catch (error) {
            console.error("Error al cargar la API: ", error); 
        } finally {
            setLoading(false); // Ocultar el spinner después de cargar
        }
    };

    // Detecta cuando algo cambia en la app e invoca getProducts
    useEffect(() => {
        getProducts();
        console.log(data);
    }, []);

    return (
        <>
            <div className="container mt-4">
                <h1>Lo más vendido</h1>
                {loading ? ( // Mostrar el spinner mientras loading es true
                    <div className="text-center">
                    </div>
                ) : (
                    <div className="row row-cols-1 row-cols-md-4 g-4">
                        {data.map((product) => (
                            <div className="col" key={product.id}>
                                <div className="card h-100 mb-3">
                                    <img src={product.image} className="card-img-top img-fluid" alt={product.title} />
                                    <div className="card-body">
                                        <h5 className="card-title">{product.title}</h5>
                                        <p className="card-text">Descripción</p>
                                        <p className="card-text"><small className="text-body-secondary">$ {product.price}</small></p>
                                        <div className="rafita">
                                            <button className="btn btn-primary">Agregar a Carrito</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
}

export default Home;
