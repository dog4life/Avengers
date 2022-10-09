import React from 'react'
import {Link} from "react-router-dom"

function Footer() {
  return (
    <div>
      <div class="container">
  <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <p class="col-md-4 mb-0 text-muted">© 2022 Anishka</p>

    <Link to="/" class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
      
    </Link>

    <ul class="nav col-md-4 justify-content-end">
      <li class="nav-item"><Link to="/" class="nav-link px-2 text-muted">Home</Link></li>
      <li class="nav-item"><Link to="/adventures" class="nav-link px-2 text-muted">Adventures</Link></li>

      <li class="nav-item"><Link to="/about" class="nav-link px-2 text-muted">About</Link></li>
    </ul>
  </footer>
</div>
    </div>
  )
}

export default Footer
