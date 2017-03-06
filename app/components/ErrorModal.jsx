var React = require('react');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');

var ErrorModal = React.createClass({
  propTypes: {
      title: React.PropTypes.string,
      message: React.PropTypes.string.isRequired
  },

  getDefaultProps: function() {
    return {
      title: 'Error'
    }
  },

  componentDidMount: function() {
    //
    // We need to
    var {title, message} = this.props;

    var modalMarkup = (
      <div id='error-modal' className='reveal tiny text-center' data-reveal=''>
        <h4>{title}</h4>
        <p>{message}</p>
        <button className='button hollow' data-close=''>
          Okay
        </button>
      </div>
    )

    // ReactDOMServer.renderToString() takes JSX code and returns the string version
    // which allows us to take the JSX elements and render them
    var $modal = $(ReactDOMServer.renderToString(modalMarkup));

    // $(ReactDOM.findDOMNode(this)) returns the DOM node where this component lives
    // use the .html method to pass the modal markup
    $(ReactDOM.findDOMNode(this)).html($modal);
    var modal = new Foundation.Reveal($('#error-modal'))
    // Foundation makes changes to the DOM, and React doesn't work well with
    // changing the DOM like that.
    modal.open();
  },

  render: function(props) {
    // we don't want to update and remove DOM nodes with this Foundation component
    // so we just return an empty div
    return (
      <div></div>
    )
  }
})

module.exports = ErrorModal;
