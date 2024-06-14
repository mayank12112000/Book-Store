import React, { useContext, useState } from 'react'
import Category from '../components/Category'
import { Link, NavLink } from 'react-router-dom'

export default function SideBar() {
    const { uniqueCategories, category } = null
    const [dropDownActive, setDropDownActive] = useState(false)
    return (
        <div className="flex-shrink-0 p-3" style={{ position: "fixed", width: "13rem", height: "100vh", marginRight: "20px", background: "#FFF9D0", overflow: "auto" }}>
            <Link to="/createProduct" className="btn btn-outline-primary " style={{ textAlign: "center" }}>
                <span className="fs-5 fw-semibold">Add New Product</span>
            </Link>
            <hr />
            <ul className="list-unstyled ps-0">
                <li className="mb-1">
                    <button onClick={() => setDropDownActive(!dropDownActive)} className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="false">
                        <h6> {dropDownActive ? '▽ ' : '▷ '}Category Filter </h6>
                    </button>
                    <div className="collapse" id="home-collapse" >
                        <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                            {uniqueCategories && uniqueCategories.map((category, idx) =>
                                <Category key={idx} children={category} />
                            )}
                            <li>
                                <NavLink activestyle={{ color: "blue" }} to={`/`} className="link-body-emphasis d-inline-flex text-decoration-none rounded">◈ clear all filter</NavLink>
                            </li>

                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    )
}
