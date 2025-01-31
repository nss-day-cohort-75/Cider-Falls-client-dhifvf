import { getAreas } from "./database.js"
const areas = getAreas()

export const areaList = () => {
    let parkHTML = "<ul>"

    for (const area of areas) {
        parkHTML += `<li data-type="park" data-id="${area.id }">${area.name}</li>`
    }

    parkHTML += "</ul>"

    return parkHTML
}