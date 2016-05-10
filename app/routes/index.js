import Ember from 'ember';

var rentals = [{
  id: 1,
  title: 'Fluffy',
  owner: 'Veruca Salt',
  type: 'hairless',
  legs: 4,
  image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg'
}, {
  id: 2,
  title: 'Killer',
  owner: 'Mike TV',
  type: 'fat',
  legs: 1,
  image: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Alfonso_13_Highrise_Tegucigalpa.jpg'
}, {
  id: 3,
  title: 'Attila the Hun',
  owner: 'Violet Beauregarde',
  type: 'large kitten',
  legs: 3,
  image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg'
}];

export default Ember.Route.extend({
	model(){
		return rentals;
	}
});
