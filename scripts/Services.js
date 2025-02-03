import { getServices } from './database.js'

// Function to get services for a given area
export const getServicesForArea = (areaId) => {
    const services = getServices(); // Get all services (array)
    let areaServicesHTML = ''

    for (let service of services) {
        // Check if the service is available in this area
        if (service.areaId.includes(areaId)) {
            areaServicesHTML += `<li>${service.name}</li>`
        }
    }
    areaServicesHTML += ''

    return areaServicesHTML
}
