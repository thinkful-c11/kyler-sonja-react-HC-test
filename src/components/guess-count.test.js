import React from 'react';
import {shallow} from 'enzyme';

import GuessCount from './guess-count';

describe('<Guess Count />', () => {
    
    it("Render without crashing", () => {
        shallow(<GuessCount />);
    });
    
    it('Renders the correct prop it is passed', () => {
        const count = 1000;
        const wrapper = shallow(<GuessCount count={count} />);
        expect(wrapper.find('span').children().node).toEqual(count);
    });
});