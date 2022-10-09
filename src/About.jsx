import React from 'react'
import "./About.css"
function About() {
  return (
    <div>
      <div class="row">
      <div class="col-lg-4 box" >
      <img class="bd-placeholder-img rounded-circle" width="140" height="140" src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/004tho_ons_mas_mob_04.jpg" ></img>

        <h2 class="fw-normal">Thor</h2>
        <p>The son of Odin uses his mighty abilities as the God of Thunder to protect his home Asgard and planet Earth alike.</p>
        <p><a class="btn btn-secondary" href="#">View details »</a></p>
      </div>
      <div class="col-lg-4 box">
        <img class="bd-placeholder-img rounded-circle" width="140" height="140" src="https://image.api.playstation.com/vulcan/img/rnd/202011/0714/Cu9fyu6DM41JPekXLf1neF9r.png" ></img>

        <h2 class="fw-normal">Spider-man</h2>
        <p>American teenager Peter Parker, a poor sickly orphan, is bitten by a radioactive spider. As a result of the bite, he gains superhuman strength, speed, and agility, along with the ability to cling to walls, turning him into Spider-Man.</p>
        <p><a class="btn btn-secondary" href="#">View details »</a></p>
      </div>
      <div class="col-lg-4 box">
      <img class="bd-placeholder-img rounded-circle" width="140" height="140" src="https://lumiere-a.akamaihd.net/v1/images/avengers-characterthumbnail-hulk_779919a1.jpeg?region=0%2C0%2C300%2C300" ></img>

        <h2 class="fw-normal">Hulk</h2>
        <p>Exposed to heavy doses of gamma radiation, scientist Bruce Banner transforms into the mean, green rage machine called the Hulk.</p>
        <p><a class="btn btn-secondary" href="#">View details »</a></p>
      </div> 
    </div>
    </div>
  )
}

export default About
