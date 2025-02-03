import { getServices } from './database.js'

// Function to get services for a given area
export const getServicesForArea = (areaId) => {
    const services = getServices(); // Get all services (array)
    let areaServicesHTML = ''

    for (let service of services) {
        // Check if the service is available in this area
        if (service.areaId.includes(areaId)) {
            areaServicesHTML += `<li data-type="service">${service.name}</li>`
        }
    }
    areaServicesHTML += ''

    return areaServicesHTML
}

document.addEventListener(
    "click",
    (clickEvt) => {
        const itemClicked = clickEvt.target
            if (itemClicked.dataset.type === "service") {
                const serviceName = itemClicked.dataset.name
                const newArray = []
                const services = getServices()
                for (const service of services) {
                    for (element of service.areaId) {
                        if (element === areaList.id) {
                            newArray.push(element)
                        }
                    }
                }
                window.alert(`${serviceName} is available in ${area.name}`)
            }
    }
)