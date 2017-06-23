import React from 'react';
import {shallow} from 'enzyme';

import GuessCount from './guess-count';

describe('<Guess Count />', () => {

    it("Render without crashing", () => {
        shallow(<GuessCount />);
    });

});