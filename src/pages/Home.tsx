import React from 'react';
import './Home.css'; // Arquivo de estilos

function Home() {
    return (
        <div className="landing-page">
            <header>
                {/* Logotipo e menu de navegação */}
                <img src="logo.svg" alt="Landingo Logo" />
                <nav>
                    <ul>
                        <li><a href="#how-it-works">How It Works</a></li>
                        <li><a href="#features">Features</a></li>
                        <li><a href="#plans">Plans</a></li>
                        <li><a href="#our-team">Our Team</a></li>
                        <li><a href="#faq">FAQ</a></li>
                    </ul>
                </nav>
                <button className="join-now">Join Now</button>
            </header>

            <main>
                <section className="hero">
                    <div className="hero-content">
                        <img src="phone-mockup.png" alt="Phone Mockup" />
                        <div className="text-content">
                            <h2>Make every moment matter</h2>
                            <p>
                                Duis at iaculis ipsum, vel blandit lacus. Nulla facilisi. Quisque
                                volutpat erat ut porttitor euismod. Phasellus in tortor pulvinar,
                                rhoncus nisl eu, cursus leo.
                            </p>
                            <button>Learn More</button>
                        </div>
                    </div>
                </section>

                {/* Outras seções: How It Works, Features, Plans, Our Team, FAQ */}
            </main>

            <footer>
                {/* Rodapé */}
            </footer>
        </div>
    );
}

export default Home;
