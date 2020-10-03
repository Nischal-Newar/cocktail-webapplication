import App from '../App'
import Navigation from '../components/Navigation'

//check if the application renders correctly
it("Renders Without Crashing", () => {
    shallow(<App />);
  });

//check if the Navigation Bar contains the Cocktail text
it("Navigation Contains Cocktail Text", () => {
    const wrapper = shallow(<Navigation />);
    const welcome = "Cocktail";
    expect(wrapper.contains(welcome)).toEqual(true);
});