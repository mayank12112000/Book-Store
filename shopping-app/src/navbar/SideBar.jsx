import React, { useContext, useState } from 'react'
import { ProductContext } from '../utils/ProductContext'
import Category from '../components/Category'

export default function SideBar() {
    const {uniqueCategories,category} = useContext(ProductContext)
    const [dropDownActive,setDropDownActive] = useState(false)

    console.log(uniqueCategories)

    return (
        <div className="flex-shrink-0 p-3" style={{position:"fixed", width: "13rem",height:"100vh",marginRight:"20px",background:"#FFF9D0",overflow:"auto"}}>
            <button  href="/" className="btn btn-outline-primary " style={{textAlign:"center"}}>
                <span className="fs-5 fw-semibold">Add New Product</span>
            </button>
            <hr />
            <ul className="list-unstyled ps-0">
                <li className="mb-1">
                    <button onClick={()=>setDropDownActive(!dropDownActive)} className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="false">
                        <h6> {dropDownActive?'▽ ':'▷ '}Category Filter </h6>
                    </button>
                    <div className="collapse" id="home-collapse" >
                        <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                        {uniqueCategories && uniqueCategories.map((category,idx)=><Category key={idx} children={category}/>)}   
                        {/* unique categories && validation was required since it will throw map not executable when uniquecategories was not fetched */}
                         </ul>
                    </div>
                </li>
            </ul>
        </div>
    )
}
