import React, { useEffect, useState } from 'react';

interface SpinnerCargaProps {
    onProductsLoaded: (products: any[]) => void; // Definimos la prop para recibir los productos
}

const SpinnerCarga: React.FC<SpinnerCargaProps> = ({ onProductsLoaded }) => {
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const getProducts = async () => {
        setLoading(true); // Mostrar el spinner al cargar
        try {
            const response = await fetch("https://fakestoreapi.com/products/");
            if (!response.ok) {
                throw new Error('Error en la respuesta de la API');
            }
            const json = await response.json();
            onProductsLoaded(json); // Notificar que los productos han sido cargados
        } catch (error) {
            console.error("Error al cargar la API: ", error);
            setError(error.message);
        } finally {
            setLoading(false); // Ocultar el spinner después de cargar
        }
    };

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <div className="text-center">
            {loading && (
                <div>
                    <div className="spinner-border" role="status">
                        <span className="sr-only"></span>
                    </div>
                    <p>Cargando productos...</p>
                </div>
            )}
        </div>
    );
};

export default SpinnerCarga;
