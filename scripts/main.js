import { areaList } from "./ParkAreas.js"
import { guestList } from "./Guests.js"

// Get the main container
const mainContainer = document.querySelector("#container")

// Putting it all together in the main container
const parkHTML = `
    <article class="article">
        <section class="areaDetails">
            <h2>Areas</h2>
            ${areaList()}
        </section>
        <section class="guestDetails">
            <h2>Guests</h2>
            <ul class="guest-list">${guestList()}</ul>
        </section>
    </article>
`

mainContainer.innerHTML = parkHTML