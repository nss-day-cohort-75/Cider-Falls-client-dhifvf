import { getAreas } from "./database.js"
import { getServicesForArea } from "./Services.js"

// Function to generate the HTML for the park areas
export const areaList = () => {
    const areas = getAreas()
    
    let parkHTML = '<div>'

    // Loop over the areas & display each one
    for (const area of areas) {
        parkHTML += `
            <div class="area-item">
                <h3>${area.name}</h3>
                <ul>${getServicesForArea(area.id)}</ul>
            </div>
        `
    }

    parkHTML += '</div>'

    return parkHTML
};