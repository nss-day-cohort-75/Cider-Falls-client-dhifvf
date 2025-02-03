import { getServices } from './database.js'
import { getAreas } from './database.js';

// Function to get services for a given area
export const getServicesForArea = (areaId) => {
    const services = getServices(); // Get all services (array)
    let areaServicesHTML = ''

    for (let service of services) {
        // Check if the service is available in this area
        if (service.areaId.includes(areaId)) {
            areaServicesHTML += `<li data-type="service" data-name="${service.name}"  data-areaid="${service.areaId}" >${service.name}</li>`
        }
    }

    return areaServicesHTML
}

document.addEventListener(
    "click",
    (clickEvt) => {
        const itemClicked = clickEvt.target
       
           
           if(itemClicked.dataset.type === "service"){

            const serviceName = itemClicked.dataset.name
            
            const areas = getAreas()
           const newArray = []
            const services = getServices();
            for(const service of services) {
                if(serviceName === service.name) {
                for (const element of service.areaId) {
                    
                    for (const area of areas){
                        if(element === area.id){
                        newArray.push(area.name)
                        }
                     
                    }     
                }
            }
            }
            window.alert(`${serviceName} is avaliable in ${newArray.join(", ")}`) 
      }
    }
)
