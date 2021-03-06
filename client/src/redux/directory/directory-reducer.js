
const initialState = {
    sections: [
        {
            title: 'hats',
            imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
            id: 1,
            linkUrl: 'shop/hats'
        },
        {
            title: 'jackets',
            imageUrl: 'https://i.ibb.co/C6b2XCq/cold-2557513-1920.jpg',
            id: 2,
            linkUrl: 'shop/jackets'
        },
        {
            title: 'sneakers',
            imageUrl: 'https://i.ibb.co/Hgzr5Tw/max-bender-Btu-Npf-M3vws-unsplash.jpg',
            id: 3,
            linkUrl: 'shop/sneakers'
        },
        {
            title: 'womens',
            imageUrl: 'https://i.ibb.co/K2dZBz5/engin-akyurt-wm-YUTcb-Cs3g-unsplash.jpg',
            size: 'large',
            id: 4,
            linkUrl: 'shop/womens'
        },
        {
            title: 'mens',
            imageUrl: 'https://i.ibb.co/QdLfWVY/nirmal-rajendharkumar-q-Uh-Ti-Dk-Im5c-unsplash.jpg',
            size: 'large',
            id: 5,
            linkUrl: 'shop/mens'
        }
    ]
}

const directoryReducer = (state = initialState, action) => {
    switch (action.type) {

        default:
            return state;

    }
}

export default directoryReducer;