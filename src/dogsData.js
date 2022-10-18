import hazel from './images/hazel.jpg';
import tubby from './images/tubby.jpg';
import whiskey from './images/whiskey.jpg'

const dogs = [
    {
        name: 'Whiskey',
        id:0,
        image: whiskey,
        age: 4,
        characteristics: [
            'Whiskey loves eating popcorn!',
            'Whiskey is a wonderful guard dogs.',
            'Whiskey wants to cuddle with you!'
        ]
    },
    {
        name: 'Hazel',
        id:1,
        image: hazel,
        age: 0,
        characteristics: [
            'Hazel has so much energy.',
            'Hazel is highly intelligent.',
            'Hazel loves people more than dogs.'
        ]
    },
    {
        name: 'Tubby',
        id:2,
        image: tubby,
        age: 4,
        characteristics: [
            'Tubby is really smart.',
            'Tubby does not like walks.',
            'Angelina like Tubby.'
        ]
    }
];

const getDogsArray = function () {
    return dogs;
}

const getDog = function (name) {
    return dogs.find(dog => dog.name === name)
}

export {getDog, getDogsArray};