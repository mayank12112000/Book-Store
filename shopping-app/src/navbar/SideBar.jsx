import React, { useContext } from 'react'

export default function SideBar() {

    return (
        <div className="flex-shrink-0 p-3" style={{position:"fixed", width: "13rem",height:"100vh",marginRight:"20px",background:"#FFF9D0",overflow:"auto"}}>
            <button  href="/" className="btn btn-outline-primary " style={{textAlign:"center"}}>
                <span className="fs-5 fw-semibold">Add New Product</span>
            </button>
            <hr />
            <ul className="list-unstyled ps-0">
                <li className="mb-1">
                    <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="false">
                       <h6>Category Filter </h6>
                    </button>
                    <div className="collapse" id="home-collapse" >
                        <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                            <li style={{ marginLeft: "20px", padding: "3px 8px" }}><a href="/" className="link-body-emphasis d-inline-flex text-decoration-none rounded">cat 1</a></li>
                            <li style={{ marginLeft: "20px", padding: "3px 8px" }}><a href="/" className="link-body-emphasis d-inline-flex text-decoration-none rounded">cat 2</a></li>
                            <li style={{ marginLeft: "20px", padding: "3px 8px" }}><a href="/" className="link-body-emphasis d-inline-flex text-decoration-none rounded">cat 3</a></li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    )
}
