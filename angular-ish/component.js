import {View, Router} from 'Framework';


/**
*********************************
* View Class structure          *
********************************/
const MyFirstComponent = View.create({
    //  local state
    state: {
        isClicked: false
    },
    template: '<div>yo</div>',
    // props passed to component from element
    // optional model, defaults to an empty object
    init: function(props, model) {
        // setup code here
    },
    // `this` is bound to the component, pass along the even
    // object for onclicks
    onClickHandler: function(event) {
        console.log(this, event);
    }
});

export default MyFirstComponent;

class MySecondComponent extends View {
    super();

    constructor(props) {

    }
}


/**
*********************************
* Model/view relationships      *
********************************/

// request data
var securities = fetch('/securities'); // something like that, get securities from server

// a model definition with property types specified for type vallidation
var Security = new Model({
    name: PropTypes.String,
    description: PropTypes.String
});


// a model definition, PropType of Collection vallidates against internal
//Collection type
var ProductModel = new Model({
    name: PropTypes.String,
    securities: PropTypes.Collection;
});

// define a collection, collections could be useful for vallidation and
// sorting logic pecific to a collection
var SecurityCollection = new Collection({
    // denotes this is a collection of Security models, used for vallidation
    model: Security,

    // inferred to sort alphabettically
    sortByName: function(model) {
        return model.name;
    }
});

var MyProductView = new View({
    model: new ProductModel({  // or [] or new MyModel({}) maybe having model
        name: res.name,
        securities: newSecurityCollection(function() {
            return res.securities.map((security) => {
                return new SecurityModel(security);
            });
        });
    })
});
