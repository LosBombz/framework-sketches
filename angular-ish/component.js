import {View, Router} from 'Framework';

const MyFirstComponent = View.create({
    //  local state
    state: {
        isClicked: false
    },
    template: '',
    // props passed to component from element
    // optional model, defaults to an empty object
    init: function(props, model) {
        // setup code here
    },
    // `this` is bound to the component, pass along the even
    // object for onclicks
    onClickHandler: function(event) {
        this.state.set('isClicked', true);

        // route to the url property passed to the element
        this.Router.route(this.props.url);
    }
});

export default MyFirstComponent;
