import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import fontawesome from '@fortawesome/fontawesome';
import { faCheck, faExclamationTriangle } from '@fortawesome/fontawesome-free-solid';

fontawesome.library.add(faCheck, faExclamationTriangle);

const AddNewTracker = () => (
  <div>
    <div className="field">
      <label className="label" htmlFor="name">Name
        <div className="control has-icons-right">
          <input className="input is-success" type="text" placeholder="Tracker name input" id="name" />
          <span className="icon is-small is-right">
            <FontAwesomeIcon icon="check" />
          </span>
        </div>
      </label>
      <p className="help">This username is available</p>
    </div>

    <div className="field">
      <label className="label" htmlFor="description">Description
        <div className="control has-icons-right">
          <textarea className="textarea is-danger" placeholder="Textarea" id="description" />
          <span className="icon is-small is-right">
            <FontAwesomeIcon icon="exclamation-triangle" />
          </span>
        </div>
      </label>
      <p className="help">Should tracking geolocation?</p>
    </div>

    <div className="field">
      <span className="label">Geolocation</span>
      <div className="control has-icons-right">
        <label className="radio" htmlFor="geolocationYes">
          <input type="radio" value="true" name="geolocation" id="geolocationYes" />
          Yes
        </label>
        <label className="radio" htmlFor="geolocationNo">
          <input type="radio" value="false" name="geolocation" id="geolocationNo" />
          No
        </label>
        <span className="icon is-small is-right">
          <FontAwesomeIcon icon="check" />
        </span>
      </div>
      <p className="help">Should tracking geolocation?</p>
    </div>

    <div className="field">
      <div className="control">
        <button className="button is-primary">Submit</button>
      </div>
    </div>
  </div>
);

export default AddNewTracker;
