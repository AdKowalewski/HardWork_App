import React from 'react'
import Sidebar_style from '../style/Sidebar_style.css'
import { SidebarData } from './SidebarData';

export default function Sidebar() {
    return (
        <>
            <div className='Sidebar'>
                <div className='User'>
                    <h3 className='title'>{localStorage.getItem('user')}</h3>
                </div>
                <hr />
                <div className='title'>🌐═══๑۩ Task ۩๑═══🌐</div>
                <ul className='List'>
                    <li className='row'> <div id='title'>Task1 </div></li>
                    <li className='row'> <div id='title'>Task1 </div></li>
                    <li className='row'> <div id='title'>Task1 </div></li>
                    <li className='row'> <div id='title'>Task1 </div></li>
                </ul>
                <h3 className='title'></h3>
                <div className='title'>🌐═══๑۩ Room ۩๑═══🌐</div>
                <ul className='List'>
                    {SidebarData.map((val, key) => {
                        return (
                            <li
                                key={key}
                                className='row'
                                id={window.location.pathname == val.link ? "active" : ""}
                                onClick={() => { window.location.pathname = val.link }}>

                                <div id='title'>{val.title}</div>
                            </li>)
                    })
                    }
                </ul>


            </div>


        </>



    )
}