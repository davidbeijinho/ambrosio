import PropTypes from 'prop-types';
import React from 'react';
import { withRouter } from 'react-router';
import Loader from '../../components/Loader/Loader';
import ButtonPrimary from '../../components/Buttons/ButtonPrimary';
import InputFieldText from '../../components/InputFields/InputFieldText';
import InputFieldTextArea from '../../components/InputFields/InputFieldTextArea';
import InputFieldCheckBox from '../../components/InputFields/InputFieldCheckBox';

class AddNewTracker extends React.Component {
  static getDerivedStateFromProps(nextProps, prevState) {
    // TODO on error ?
    if (prevState.submiting === true && nextProps.submiting === false) {
      nextProps.history.push(`/tracker/${nextProps.newTracker.id}`);
    }
    return {
      submiting: nextProps.submiting,
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      geolocation: true,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;

    this.setState({
      [event.target.name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.name && this.state.description) {
      this.props.addTracker({
        name: this.state.name,
        description: this.state.description,
        geolocation: this.state.geolocation,
      });
    }
    // TODO add error classes to fields
  }

  render() {
    return (
      <div className="columns is-mobile">
        <div className="column is-one-third-desktop is-half-tablet">
          <form >
            <InputFieldText
              help="The name of the new tracker"
              label="Name"
              id="name"
              name="name"
              placeHolder="Tracker name"
              disabled={this.props.submiting}
              value={this.state.name}
              onChange={this.handleInputChange}
            />

            <InputFieldTextArea
              help="Add some description of the tracker"
              label="Description"
              id="description"
              name="description"
              placeHolder="Info about the new tracker"
              disabled={this.props.submiting}
              value={this.state.description}
              onChange={this.handleInputChange}
            />

            <InputFieldCheckBox
              help="Should track geolocation?"
              label="Geolocation"
              id="geolocation"
              name="geolocation"
              disabled={this.props.submiting}
              checked={this.state.geolocation}
              onChange={this.handleInputChange}
              placeHolder="Yes"
            />

            <div className="field">
              <div className="control">
                <ButtonPrimary
                  handleClick={this.handleSubmit}
                  disabled={this.props.submiting}
                >Submit
                </ButtonPrimary>
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

export default withRouter(AddNewTracker);
