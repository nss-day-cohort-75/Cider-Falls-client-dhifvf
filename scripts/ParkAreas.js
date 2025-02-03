import { getAreas } from "./database.js"
import { getGuests } from "./database.js"
const areas = getAreas()

export const areaList = () => {
    let parkHTML = "<ul>"

    for (const area of areas) {
        parkHTML += `<li data-type="park" data-id="${area.id }">${area.name}</li>`
    }

    parkHTML += "</ul>"

    return parkHTML
}

document.addEventListener(
    "click",
    (clickEvt) => {
        const itemClicked = clickEvt.target
       
           
           if(itemClicked.dataset.type === "park"){

            
            const areaId = itemClicked.dataset.id
            
            let guestCount = []
           
            const guests = getGuests();

            for(const guest of guests) {
                if(parseInt(areaId) === guest.location){
                    guestCount.push(guest)
                }
            }
            window.alert(`There are  ${guestCount.length} guests in this area`)    
      }
    }
)