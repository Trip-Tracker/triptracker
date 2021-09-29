//Package imports
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

//Component imports
import IndividualTrip from '../client/components/containers/IndividualTrip.jsx';

configure({ adapter: new Adapter() });

describe('React unit tests', () => {

  describe('IndividualTrip.jsx', () => {
    let wrapper;
    
    beforeAll(() => {wrapper = shallow(<IndividualTrip />)});
    
    it('Renders two <Button> tags', () => {
      // console.log("Shallow copy:", wrapper.debug());
      expect(wrapper.find("WithStyles(ForwardRef(Button))")).toHaveLength(2);
    });

  });//closes SignIn describe block
  
});//closes main React describe block