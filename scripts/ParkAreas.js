import { getAreas } from "./database.js"
import { getServicesForArea } from "./Services.js"
import { getGuests } from "./database.js"

// Function to generate the HTML for the park areas
export const areaList = () => {
    const areas = getAreas()
    
    let parkHTML = '<div class="areas">'

    // Loop over the areas & display each one
    for (const area of areas) {
        parkHTML += `
            <div class="area-item">
                <h3 class="park-header" data-type="park" data-id="${area.id}">${area.name}</h3>
                <ul>${getServicesForArea(area.id)}</ul>
            </div>
        `
    }

    parkHTML += '</div>'

    return parkHTML
};

document.addEventListener(
    "click",
    (clickEvt) => {
        const itemClicked = clickEvt.target
       
           
           if(itemClicked.dataset.type === "park"){

            
            const areaId = itemClicked.dataset.id
            
            let guestCount = 0
           
            const guests = getGuests();

            for(const guest of guests) {
                if(parseInt(areaId) === guest.locationId){
                    guestCount += 1
                }
            }
            window.alert(`There are ${guestCount} guests in this area`)    
      }
    }
)
