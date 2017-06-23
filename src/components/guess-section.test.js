import React from 'react';
import {shallow} from 'enzyme';

import GuessSection from './guess-section';

describe('<Guess Count />', () => {

    it("Render without crashing", () => {
        shallow(<GuessSection />);
    });

});