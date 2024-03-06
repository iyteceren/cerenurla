import React from 'react'
import "./left.scss"
import { FaMapMarkerAlt } from 'react-icons/fa';
import { useState } from 'react';


function LeftSide() {
    const [state, setState] = useState(false);

    return (
        <section className='LeftSide'>
            <button onBlur={() => setState(!state)} onClick={() => setState(!state)} className='leftSide__mapIcon'><FaMapMarkerAlt /></button>
            <article className={state ? 'leftSide__transportation leftSide__transportation2' : 'leftSide__transportation'}>
                <h6 className='leftSide__header'>Otele Ulaşım</h6>
                <article className='leftSide__article'>
                    <p className='leftSide__address'>Gülbahçe, İzmir Yüksek Teknoloji Enstitüsü, 35433 Urla/İzmir</p>
                    <iframe className='leftSide__map' src= "https://maps.app.goo.gl/UzcDfvsTHPH9MXug7" width="400" height="300" style={{ border: "none" }} loading="lazy" referrerpolicy="no-referrer-when-downgrade"> </iframe>
                    <a rel='noreferrer' target={"_blank"} href="https://www.google.com/maps?ll=36.886809,30.672536&z=15&t=m&hl=tr&gl=TR&mapclient=embed&q=Sak%C4%B1p+Sabanc%C4%B1+Blv.+Meltem+07030+Muratpa%C5%9Fa/Antalya"><button className='leftSide__btn' type='button'>Haritada Göster</button></a>
                </article>
            </article>
        </section >
    )
}

export default LeftSide;