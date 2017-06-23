// prop types

const PropTypeNames = {
    Collection: 'Collection',
    Model: 'Model',
    Array: 'Array',
    Object: 'Object',
    Function: 'Function',
    String: 'String',
    Boolean: 'Boolean'
    Number: 'Number'
};

const PropTypes = {};

PropTypes.Number = () => {
    return Number;
};

PropTypes.String = () => {
    return String;
};

PropTypes.Array = () => {
    return Array;
};

export default PropTypes
