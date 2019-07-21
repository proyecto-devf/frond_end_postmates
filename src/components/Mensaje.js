import React from 'react';
import imagen1 from '../images/resource/welcome-note-img.png';
import imagen2 from '../images/close-icon.png';

function Mensaje() {
    return (
        <section>
            <div class="welcome-note yellow-bg brd-rd5">
                <h4 itemprop="headline">Mensaje</h4>
                <p>información</p>
                <img src={imagen1} alt="welcome-note-img.png" />
                <a class="remove-noti">
                    <img src={imagen2} alt="close-icon.png" />
                </a>
            </div>
        </section>
    )
}

export default Mensaje;