import { getAreas } from "./database.js"
import { getGuests } from "./database.js"
const areas = getAreas()

export const areaList = () => {
    let parkHTML = ""

    for (const area of areas) {
        parkHTML += `<li data-type="park" data-id="${area.id }">${area.name}</li>`
    }

    parkHTML += ""

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
                    guestCount.push = 
                }
            }
            window.alert(`There are  ${guestCount} guests in this area`)    
      }
    }
)