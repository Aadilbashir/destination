import React from 'react'
import { Link } from 'react-router-dom'
const Navigation = () => {
    return (
        <>

        
            <nav class="navbar navbar-expand-lg bg-white">
                <div class="container">
                    <a class="navbar-brand" href="index-2.html">
                        <img src="assets/img/dest.png" alt="Logo" style={{width:'160px', height:'30px'}} />
                    </a>
                    <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#main-nav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="main-nav">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item active">
                              <Link to={"/"}>  <a class="nav-link" >Home</a></Link>
                            </li>
                            <li class="nav-item">
                              <Link to={"/about"}> <a class="nav-link" style={{cursor:"hand"}} >About</a></Link> 
                            </li>
                            <li class="nav-item">
                               <Link to={"/services"}><a class="nav-link">Services</a></Link> 
                            </li>
                          
                         
                            <li class="nav-item">
                            <Link to={"/contact"}>   <a class="nav-link" >Contact</a></Link> 
                            </li>
                            <li class="nav-item">
					<Link to={"/careers"}> <a class="nav-link" >Careers</a>		</Link>				
					</li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navigation