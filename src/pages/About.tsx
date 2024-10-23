import MapBox from "../components/MapBox"
import '../styles/About.css'

function About() {

    return (
        <div className="container">

            <section className="nosotros">
                <h1>Acerca de nosotros</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas, ipsum ac lobortis commodo, est velit pellentesque nisi, vitae elementum felis velit vel velit. Donec tempus velit non ipsum consectetur, ut facilisis metus gravida.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas, ipsum ac lobortis commodo, est velit pellentesque nisi, vitae elementum felis velit vel velit. Donec tempus velit non ipsum consectetur, ut facilisis metus gravida.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas, ipsum ac lobortis commodo, est velit pellentesque nisi, vitae elementum felis velit vel velit. Donec tempus velit non ipsum consectetur, ut facilisis metus gravida.</p>
            </section>

            <section className="mapa">
                <h2>Encuéntranos</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas, ipsum ac lobortis commodo, est velit pellentesque nisi, vitae elementum felis velit vel velit. Donec tempus velit non ipsum consectetur, ut facilisis metus gravida.</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt, beatae corporis expedita tempora aliquam nemo? Possimus consequuntur vel repellat, iusto placeat porro adipisci maxime molestiae rerum quas nesciunt eum provident?</p>
                
                <div className="establecimientos">
                    <div>
                        <h5>Plaza Las Américas</h5>
                        <p>Dirección: Av. Tulum, 1, 77500 Cancún, Q.R., México</p>
                        <p>Teléfono: (000) 000-0000</p>
                    </div>
                    <div>
                        <h5>Plaza Comercial Puerto Cancún</h5>
                        <p>Dirección: Blvd. Kukulcan, Km 1.5, 77500 Cancún, Q.R., México</p>
                        <p>Teléfono: (000) 000-0000</p>
                    </div>
                    <div>
                        <h5>La Gran Plaza</h5>
                        <p>Dirección: Av. Tulum, 233, 77500 Cancún, Q.R., México</p>
                        <p>Teléfono: (000) 000-0000</p>
                    </div>
                </div>

                <MapBox />
            </section>

        </div>
    )
}

export default About