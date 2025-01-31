import { getServices } from './database.js'

const services = getServices(); // array of service objects

export const serviceList = () => {
    let html = '<ul>'

    // Generate the list of all services
    for (let service of services) {
        html += `<li>${service.name}</li>`
    }

    html += '<ul>'
    return html
}