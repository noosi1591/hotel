import React from 'react'

function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg ">
            
                <a class="navbar-brand" href="#"><h1>Poolvillas</h1></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item active" >
                            <a class="nav-link" href="#">Configuration!! Hello! Jerome Bell</a>
                        </li>
                        
                       
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
