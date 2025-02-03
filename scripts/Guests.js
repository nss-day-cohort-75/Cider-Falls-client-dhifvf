import { getGuests } from "./database.js"
const guests = getGuests()

export const guestList = () => {
    let guestHTML = ''

    for (const guest of guests) {
        guestHTML += `<li>${guest.name}</li>`
    }

    guestHTML += ''

    return guestHTML
}

