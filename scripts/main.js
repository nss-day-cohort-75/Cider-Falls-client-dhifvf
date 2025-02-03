import { areaList } from "./ParkAreas.js"
import { guestList } from "./Guests.js"

const mainContainer = document.querySelector("#container")

const parkHTML = `
<article class="article">
    <section class="areaDetails">
        <h2> Areas</h2>
        ${areaList()}
        </section>
    <section class="guestDetails">
        <h2> Guests</h2>
        ${guestList()}
        </section>
        </article>
        `



        mainContainer.innerHTML = parkHTML






