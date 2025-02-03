const database = {
    guests: [{
        id: 1,
        name: "Ethan Mercer",
        locationId: 1
    },{
        id: 2,
        name: "Olivia Caldwell",
        locationId: 2
    },{
        id: 3,
        name: "Liam Sterling",
        locationId: 3
    },{
        id: 4,
        name: "Sophia Monroe",
        locationId: 4
    },{
        id: 5,
        name: "Noah Harrington",
        locationId: 5
    },{
        id: 6,
        name: "Ava Sinclair",
        locationId: 6
    },{
        id: 7,
        name: "Mason Whitaker",
        locationId: 1
    },{
        id: 8,
        name: "Emma Winslow",
        locationId: 5
    },{
        id: 9,
        name: "Benjamin Carrington",
        locationId: 1
    },{
        id: 10,
        name: "Charlotte Davenport",
        locationId: 1
    },{
        id: 11,
        name: "Lucas Calloway",
        locationId: 3
    },{
        id: 12,
        name: "Amelia Prescott",
        locationId: 3
    },{
        id: 13,
        name: "Henry Thornton",
        locationId: 6
    },{
        id: 14,
        name: "Scarlett Ellington",
        locationId: 5
    },{
        id: 15,
        name: "Jack Holloway",
        locationId: 1
    },{
        id: 16,
        name: "Isabella Kensington",
        locationId: 4
    },{
        id: 17,
        name: "Samuel Worthington",
        locationId: 1
    },{
        id: 18,
        name: "Grace Abernathy",
        locationId: 2
    },{
        id: 19,
        name: "Nathaniel Montgomery",
        locationId: 3
    },{
        id: 20,
        name: "Eleanor Bradford",
        locationId: 6
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
