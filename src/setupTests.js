import React from 'react';

import Adapter from 'enzyme-adapter-react-16';
import Enzyme, {
  configure,
  shallow,
  mount,
  render,
} from 'enzyme';

// React 16 Enzyme adapter
configure({ adapter: new Adapter() });

// Make Enzyme functions available in all test files without importing
global.React = React;
global.Enzyme = Enzyme;
global.shallow = shallow;
global.render = render;
global.mount = mount;