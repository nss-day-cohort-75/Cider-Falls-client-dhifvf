import { getAreas } from "./database"
const areas = getAreas()

export const areaList = () => {
    let parkHTML = ""

    for (const area of areas) {
        parkHTML += `<li data-type="park" data-id="${area.id }">${area.name}</li>`
    }

    parkHTML += ""

    return parkHTML
}