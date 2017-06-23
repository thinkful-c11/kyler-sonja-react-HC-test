import React from 'react';
import {shallow} from 'enzyme';

import InfoModal from './info-modal';

describe('<Info Modal />', () => {

    it("Render without crashing", () => {
        shallow(<InfoModal />);
    });
    
    it("Does it diddily-do dah callback????", () => {
        const callback = jest.fn();
        const wrapper = shallow(<InfoModal onClose={callback}/>);
        wrapper.find('.close').simulate('click', {preventDefault: function() {}});
        expect(callback).toHaveBeenCalled();
    })
});
