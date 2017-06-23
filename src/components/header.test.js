import React from 'react';
import {shallow} from 'enzyme';

import Header from './header';
import InfoModal from './info-modal'

describe('<Header />', () => {

    it("Render without crashing", () => {
        shallow(<Header />);
    });
    
    it('Should not show modal if it is hidden', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.state('showInfoModal')).toEqual(false);
        expect(wrapper.find(InfoModal).exists()).toEqual(false);
    })
    
    it('Should show modal if its not hidden', () => {
        const wrapper = shallow(<Header />);
        wrapper.instance().toggleInfoModal();
        expect(wrapper.state('showInfoModal')).toEqual(true);
        expect(wrapper.find(InfoModal).exists()).toEqual(true);
    })
});