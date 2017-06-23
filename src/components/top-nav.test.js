import React from 'react';
import {shallow, mount} from 'enzyme';

import TopNav from './top-nav';

describe('<Top Nav />', () => {

    it("Render without crashing", () => {
        shallow(<TopNav />);
    });

    it("Takes callback for what", () =>{
        const callback = jest.fn();
        const wrapper = mount(<TopNav onInfo={callback}/>);
        wrapper.find('.what').simulate('click');
        expect(callback).toHaveBeenCalled();
    });

    it("Takes callback for new", () => {
        const callback = jest.fn();
        const wrapper = mount(<TopNav onNewGame={callback}/>);
        wrapper.find('.new').simulate('click');
        expect(callback).toHaveBeenCalled();
    });


});