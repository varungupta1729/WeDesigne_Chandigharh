import React from 'react'
import white_front from '../../Assests/tshirt/white/front.png'
import white_back from '../../Assests/tshirt/white/back.png'
import black_front from '../../Assests/tshirt/black/front.png'
import black_back from '../../Assests/tshirt/black/back.png'

export const tshirts = [white_front, white_back, black_front, black_back]

export default function TshirtView({ color, direction }) {

    switch (color) {
        case 'black':
            if (direction === 'front') {
                return <img src={black_front} alt="tshirt" />
            }
            return <img src={black_back} alt="tshirt" />
        default:
            if (direction === 'front') {
                return <img src={white_front} alt="tshirt" />
            }
            return <img src={white_back} alt="tshirt" />
    }
}

