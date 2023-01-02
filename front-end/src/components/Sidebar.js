/* eslint-disable-next-line */
import React from 'react'
import logo from '../images/logo.png'
import './sidebar.css'

const Sidebar = () => {
    return (
        <div className='bg-white col-auto col-md-2 min-vh-100 d-flex justify-content-between flex-column border'>
            <div>
                <a href='/user/dashboard' className='text-decoration-none text-black d-flex align-itemcenter mt-4'>
                    <span className='ms-1 fs-4'><img src={logo} /></span>
                </a>
                <button type="button" class="btn btn-primary my-4 px-4 m-3">Create New Tour +</button>
                <ul className='nav nav-pills flex-column'>
                    <li className='nav-item text-white fs-4'>
                        <a href='/user/dashboard' className='nav-link text-black fs-5' aria-current="page">
                            <i className='bi bi-speedometer'></i>
                            <span className='ms-2'>Dashboard</span>
                        </a>
                    </li>
                    <li className='nav-item text-white fs-4'>
                        <a href='/user/hello' className='nav-link text-black fs-5' aria-current="page">
                            <i class="bi bi-search"></i>
                            <span className='ms-2'>Search</span>
                        </a>
                    </li>
                    <li className='nav-item text-white fs-4'>
                        <a href='#' className='nav-link text-black fs-5' aria-current="page">
                            <i class="bi bi-calendar"></i>
                            <span className='ms-2'>Calendar</span>
                        </a>
                    </li>
                    <li className='nav-item text-white fs-4'>
                        <a href='#' className='nav-link text-black fs-5' aria-current="page">
                            <i class="bi bi-people"></i>
                            <span className='ms-2'>My Clients</span>
                        </a>
                    </li>
                    <li className='nav-item text-white fs-4'>
                        <a href='#' className='nav-link text-black fs-5' aria-current="page">
                            <i class="bi bi-cart-dash"></i>
                            <span className='ms-2'>MLS Lists</span>
                        </a>
                    </li>
                    <li className='nav-item text-white fs-4'>
                        <a href='#' className='nav-link text-black fs-5' aria-current="page">
                            <i class="bi bi-bell"></i>
                            <span className='ms-2'>Notifications</span>
                        </a>
                    </li>
                    <li className='nav-item text-white fs-4'>
                        <a href='#' className='nav-link text-black fs-5' aria-current="page">
                            <i class="bi bi-person-add"></i>
                            <span className='ms-2'>Invite & Earn</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div>
                <li className='nav-item text-white fs-4 m-4'>
                    <span>Need Help?</span>
                    <a href='#' className='nav-link text-black fs-5' aria-current="page">
                        <i class="bi bi-chat-square"></i>
                        <span className='ms-2'>Help Desk</span>
                    </a>
                </li>
            </div>
        </div>
    )
}

export default Sidebar;