import React from 'react';
import {shallow} from 'enzyme';

import TopNav from './top-nav';

describe('<Top Nav />', () => {

    it("Render without crashing", () => {
        shallow(<TopNav />);
    });

});