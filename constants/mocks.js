const categories = [
    {
        id: 'plants',
        name: 'Plants',
        tags: ['products', 'inspiration', 'shop'],
        count: 3838,
        // image: require('../assets/images/plants.png')
    },
    {
        id: 'seeds',
        name: 'Seeds',
        tags: ['products', 'inspiration', 'shop'],
        count: 3838,
        // image: require('../assets/images/seeds.png')
    },
];

const products = [
    {
        id: 1,
        name: 'Test name with description',
        tags: ['Interior', '27m', 'Ideas'],
        description: 'Lorem ipsum',
        // gallery: [
        //     require('../assets/images/plants_1.png'),
        //     require('../assets/images/plants_2.png'),
        //     require('../assets/images/plants_3.png'),
        //     require('../assets/images/plants_4.png'),
        //     require('../assets/images/plants_5.png'),
        //     require('../assets/images/plants_6.png'),
        // ]
    }
];

const explore = [
    //images
    // require('../assets/images/explore_1.png'),
    // require('../assets/images/explore_2.png'),
    // require('../assets/images/explore_3.png'),
    // require('../assets/images/explore_4.png'),
    // require('../assets/images/explore_5.png'),
    // require('../assets/images/explore_6.png'),
];

const profile = {
    username: 'sikitown',
    location: 'Europe',
    email: 'sikitown@baco.de',
    // avatar: require('../assets/images/avatar.png'),
    budget: 1000,
    monthly_cap: 5000,
    notification: true,
    newsletter: false,
};

export{
    categories,
    profile,
    products,
}