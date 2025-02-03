import { getGuests } from "./database.js"
import { getAreas } from './database.js';

const guests = getGuests()

// Function to get area for a given guest
export const getAreaForGuest = (locationId) => {
    const areas = getAreas(); // Get all areas (array)
    let guestArea = ''
    for (let area of areas) {
        if (area.id === locationId) {
            guestArea += area.name
        }
    }
    return guestArea
}

export const guestList = () => {
    let guestHTML = ''

    for (const guest of guests) {
        guestHTML += `<li>${guest.name} (${getAreaForGuest(guest.locationId)})</li>`
    }

    return guestHTML
}

