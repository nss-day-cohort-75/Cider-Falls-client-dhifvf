import { getGuests } from "./database"
const guests = getGuests()

export const guestList = () => {
    let guestHTML = ""

    for (const guest of guests) {
        guestHTML += `<li data-type="guest" data-id="${guest.id }">${guest.name}</li>`
    }

    guestHTML += ""

    return guestHTML
}