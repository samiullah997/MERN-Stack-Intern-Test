import React from 'react'
import profileLogo from '../images/profile.png'

const Header = () => {
    return (
        <nav class="navbar bg-body-tertiary bg-opacity-10">
            <div class="container-fluid">
                <div>
                    <a class="bg-white rounded p-2 navbar-brand"><i class="bi bi-chevron-left"></i></a>
                    <span>2218 Thornridge Cir..</span>
                </div>
                <div class="d-flex">
                    <a class="navbar-brand"><i class="bi bi-bell"></i></a>
                    <a class="navbar-brand"><i class="bi bi-search"></i></a>
                    <a class="navbar-brand"><i class="bi bi-gear"></i></a>
                    <a class="navbar-brand"><i class="bi bi-arrow-right-circle"></i></a>
                    <div className='row'>
                        <img className='img rounded' src={profileLogo} />
                        <div className='col-sm-2'>
                            <i className='pro-name'>samiullah</i><br/>
                            <i className='pro-email'>sami@berkayerdinc.com</i>
                        </div>
                    </div>
                    <a class="navbar-brand mt-4"><i class="bi bi-chevron-down"></i></a>
                </div>
            </div>
        </nav>
    )
}

export default Header