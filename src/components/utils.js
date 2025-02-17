

const ExteriorColors = [
    {
        name: "Signal White",
        value: "#ecece7"
    },
    {
        name: "Black Grey",
        value: "#2f3234"
    },
    {
        name: "Light Grey",
        value: "#c5c7c4"
    },
    {
        name: "Traffic Grey",
        value: "#4f5250"
    },
    {
        name: "Sage Green",
        value: "#46877f"
    },
    {
        name: "Navy Blue",
        value: "#191e28"
    },
    {
        name: "Soft Beige",
        value: "#d0b084"
    },
    {
        name: "Deep Burgundy",
        value: "#59191f"
    },
]

const ExteriorTextures = [
    {
        name: "",
        color: "textures/Exterior/ST-01.png",
    },
    {
        name: "",
        color: "textures/Exterior/ST-02.png",
    },
    {
        name: "",
        color: "textures/Exterior/ST-04.png",
    },
    {
        name: "",
        color: "textures/Exterior/ST-05.png",
    },
    {
        name: "",
        color: "textures/Exterior/ST-07.png",
    },
    {
        name: "",
        color: "textures/Exterior/ST-09.png",
    },

]

const InteriorColors = [
    {
        name: "Signal White",
        value: "#ecece7"
    },
    {
        name: "Pure White",
        value: "#f1f0ea"
    },
    {
        name: "Blue lilac",
        value: "#76689a"
    },
    {
        name: "Light Blue",
        value: "#0089b6"
    },
    {
        name: "Stone Grey",
        value: "#928e85"
    },
    {
        name: "Pure Orange",
        value: "#e25303"
    },
    {
        name: "Light Ivory",
        value: "#e6d2b5"
    },
    {
        name: "Telegrey 4",
        value: "#c8c8c7"
    },
    {
        name: "Yellow Green",
        value: "#61993b"
    },
]

const InteriorTextures = [
    {
        name: "",
        color: "textures/INTERIOR/DK-12.png",
    },
    {
        name: "",
        color: "textures/INTERIOR/DK-22.png",
    },
    {
        name: "",
        color: "textures/INTERIOR/DK-40.png",
    },
    {
        name: "",
        color: "textures/INTERIOR/DK-43.png",
    },
    {
        name: "",
        color: "textures/INTERIOR/DK-48.png",
    },
    {
        name: "",
        color: "textures/INTERIOR/DK-53.png",
    },
    ////
    {
        name: "",
        color: "textures/INTERIOR/DK-58.png",
    },
    {
        name: "",
        color: "textures/INTERIOR/DK-63.png",
    },
    {
        name: "",
        color: "textures/INTERIOR/DK-68.png",
    },
    {
        name: "",
        color: "textures/INTERIOR/DK-82.png",
    },
    {
        name: "",
        color: "textures/INTERIOR/DK-86.png",
    },
    {
        name: "",
        color: "textures/INTERIOR/DK-88.png",
    },

    {
        name: "",
        color: "textures/INTERIOR/HY-5003.png",
    },
    {
        name: "",
        color: "textures/INTERIOR/HY-5005.png",
    },
    {
        name: "",
        color: "textures/INTERIOR/HY-5012.png",
    },
    {
        name: "",
        color: "textures/INTERIOR/HY-5014.png",
    },


    {
        name: "",
        color: "textures/INTERIOR/HY-5019.png",
    },
    {
        name: "",
        color: "textures/INTERIOR/HY-5021.png",
    },
    {
        name: "",
        color: "textures/INTERIOR/HY-5028.png",
    },
    {
        name: "",
        color: "textures/INTERIOR/HY-5032.png",
    },
]


const SeatingColors = [
    {
        name: "Light grey",
        value: "#c5c7c4"
    },
    {
        name: "Beige Grey",
        value: "#766a5e"
    },
    {
        name: "Grey Beige",
        value: "#a48f7a"
    },
    {
        name: "Wine Red",
        value: "#59191f"
    },
    {
        name: "Signal Blue",
        value: "#005387"
    },
    {
        name: "Blue Lilac",
        value: "#76689a"
    },
    {
        name: "Moss Green",
        value: "#114232"
    },
]

const SeatingTextures = [
    {
        name: "",
        color: "textures/Carpet/PC2002.png",
    },
    {
        name: "",
        color: "textures/Carpet/PC2024.png",
    },

    {
        name: "",
        color: "textures/Carpet/YL_803.png",
    },
    {
        name: "",
        color: "textures/Carpet/YL_817.png",
    },
]

export const colorList = {
    exterior: ExteriorColors,
    interior: InteriorColors,
    seating: SeatingColors
}


export const POD_TYPE = {
    A: "AuraFocus",
    B: "AuraGather",
    C: "AuraHuddle",
    D: "AuraSolo",
    E: "AuraMeet",
    F: "Elemetsolo",
    G: "ElemetMeet",
    H: "ElemetHuddel",
    I: "Elemetfocus",
}

export const texturelist = {
    exterior: ExteriorTextures,
    interior: InteriorTextures,
    seating: SeatingTextures
}


export const MAT_TYPE = {
    A: "exterior",
    B: "interior",
    C: "seating",
}



