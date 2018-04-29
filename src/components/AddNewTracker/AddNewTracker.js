import PropTypes from 'prop-types';
import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import fontawesome from '@fortawesome/fontawesome';
import { faCheck, faExclamationTriangle } from '@fortawesome/fontawesome-free-solid';
import Loader from '../Loader/Loader';

fontawesome.library.add(faCheck, faExclamationTriangle);

class AddNewTracker extends React.Component {
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('AAAAAA', nextProps, prevState);
  }

  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      name: '',
      description: '',
      geolocation: true,
    };

    this.handleInputChange = this.handleInputChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps, prevState) {
    console.log('BBBBBB', nextProps, prevState);
    // return nextProps;
  }

  handleInputChange(event) {
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;

    this.setState({
      [event.target.name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addTracker({
      name: this.state.name,
      description: this.state.description,
      geolocation: this.state.geolocation,
    });
  }

  render() {
    return (
      <div className="columns is-mobile">
        <div className="column is-one-third-desktop is-half-tablet">
          <form onSubmit={this.handleSubmit}>

            <div className="field">
              <label className="label" htmlFor="name">Name
                <div className="control has-icons-right">
                  <input
                    required
                    className="input is-success"
                    type="text"
                    placeholder="Tracker name"
                    id="name"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleInputChange}
                    disabled={this.props.submiting}
                  />
                  <span className="icon is-small is-right">
                    <FontAwesomeIcon icon="check" />
                  </span>
                </div>
              </label>
              <p className="help">The name of the new tracker</p>
            </div>

            <div className="field">
              <label className="label" htmlFor="description">Description
                <div className="control has-icons-right">
                  <textarea
                    required
                    className="textarea is-danger"
                    placeholder="Info about the new tracker"
                    id="description"
                    name="description"
                    value={this.state.description}
                    onChange={this.handleInputChange}
                    disabled={this.props.submiting}
                  />
                  <span className="icon is-small is-right">
                    <FontAwesomeIcon icon="exclamation-triangle" />
                  </span>
                </div>
              </label>
              <p className="help">Add some description of the tracker</p>
            </div>

            <div className="field">
              <span className="label">Geolocation</span>
              <div className="control" >
                <label className="radio" htmlFor="geolocation">
                  <input
                    type="checkbox"
                    name="geolocation"
                    id="geolocation"
                    checked={this.state.geolocation}
                    onChange={this.handleInputChange}
                    disabled={this.props.submiting}
                  />
                  Yes
                </label>
              </div>
              <p className="help">Should tracking geolocation?</p>
            </div>

            <div className="field">
              <div className="control">
                <button className="button is-primary" disabled={this.props.submiting} >Submit</button>
              </div>
            </div>
            <Loader visible={this.props.submiting} />

          </form>
        </div>
      </div>
    );
  }
}

AddNewTracker.propTypes = {
  addTracker: PropTypes.func.isRequired,
  submiting: PropTypes.bool.isRequired,
};

export default AddNewTracker;
