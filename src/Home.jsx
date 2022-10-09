import React from 'react'

function Home() {
  return (
    <div>
      <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://ichef.bbci.co.uk/news/640/cpsprodpb/BF0D/production/_106090984_2e39b218-c369-452e-b5be-d2476f9d8728.jpg" class="d-block w-100" alt="..." height="400px"/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Avengers - Endgame</h5>
        <p>Avengers: Endgame is a 2019 American superhero film based on the Marvel Comics superhero team the Avengers.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://assets1.ignimgs.com/2019/04/23/endgame-blogroll-01-1556040699314_160w.jpg?width=1280" class="d-block w-100" alt="..." height="400px"/>
      <div class="carousel-caption d-none d-md-block">
        <h5></h5>
        <p></p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/32BF5941765B045734A8DE2CDEF30EF5F940F26119A94BA4677414A4406ACFC9/scale?width=1200&aspectRatio=1.78&format=jpeg" class="d-block w-100" alt="..." height="400px"/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Avengers in 2012</h5>
        <p>Avengers - Age of Ultron</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default Home
