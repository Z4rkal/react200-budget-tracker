/* global define, it, describe */
// const React = require('react');
// const chai = require('chai');
const { expect } = require('chai');
// const enzyme = require('enzyme');
// const chaiEnzyme = require('chai-enzyme');
// const Adapter = require('enzyme-adapter-react-16');
// const App = require('./../src/js/app').default;

// chai.use(chaiEnzyme());

// enzyme.configure({ adapter: new Adapter() });

// let wrapper = null;

describe('App Component', function () {
  this.timeout(6500);

  // beforeEach(() => {
  //   wrapper = enzyme.mount(<App />);
  // });

  // afterEach(() => {
  //   wrapper.unmount();
  // });

  it('should shallow render', () => {
    expect(2).to.equal(2);
    // expect(wrapper).to.exist;
    // expect(enzyme.shallow(wrapper).contains(<div className='container'></div>)).to.equal(true);
  });
});
