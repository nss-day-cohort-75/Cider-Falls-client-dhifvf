const database = {
    guests: [{
        id: 1,
        name: "Ethan Mercer"
    },{
        id: 2,
        name: "Olivia Caldwell"
    },{
        id: 3,
        name: "Liam Sterling"
    },{
        id: 4,
        name: "Sophia Monroe"
    },{
        id: 5,
        name: "Noah Harrington"
    },{
        id: 6,
        name: "Ava Sinclair"
    },{
        id: 7,
        name: "Mason Whitaker"
    },{
        id: 8,
        name: "Emma Winslow"
    },{
        id: 9,
        name: "Benjamin Carrington"
    },{
        id: 10,
        name: "Charlotte Davenport"
    },{
        id: 11,
        name: "Lucas Calloway"
    },{
        id: 12,
        name: "Amelia Prescott"
    },{
        id: 13,
        name: "Henry Thornton"
    },{
        id: 14,
        name: "Scarlett Ellington"
    },{
        id: 15,
        name: "Jack Holloway"
    },{
        id: 16,
        name: "Isabella Kensington"
    },{
        id: 17,
        name: "Samuel Worthington"
    },{
        id: 18,
        name: "Grace Abernathy"
    },{
        id: 19,
        name: "Nathaniel Montgomery"
    },{
        id: 20,
        name: "Eleanor Bradford"
    }],
    services: [{
        id: 1,
        name: "hiking",
        areaId: [2, 5, 6]
    },{
        id: 2,
        name: "canoeing",
        areaId: [3, 4]
    },{
        id: 3,
        name: "picknicking",
        areaId: [1, 2, 3, 4]
    },{
        id: 4,
        name: "parking",
        areaId: [1, 5]
    },{
        id: 5,
        name: "lodging",
        areaId: [1]
    },{
        id: 6,
        name: "wall climbing",
        areaId: [1, 6]
    },{
        id: 7,
        name: "rafting",
        areaId: [3, 4]
    },{
        id: 8,
        name: "fishing",
        areaId: [3, 4, 5]
    }],
    areas: [
        {
            id: 1,
            name: "Lodge"
        },{
            id: 2,
            name: "Lost Wolf Hiking Trail"
        },{
            id: 3,
            name: "Chamfort River"
        }, {
            id: 4,
            name: "Gander River"
        }, {
            id: 5,
            name: "Campgrounds"
        }, {
            id: 6,
            name: "Pine Bluffs"
        }
    ]
}

export const getGuests = () => {
    return database.guests.map(guest => ({...guest}))
}

export const getAreas = () => {
    return database.areas.map(area => ({...area}))
}

export const getServices = () => {
    return database.services.map(service => ({...service}))
}