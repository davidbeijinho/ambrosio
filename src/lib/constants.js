export const BASE_NAME_START = 'START';
export const BASE_NAME_SUCCESS = 'SUCCESS';
export const BASE_NAME_ERROR = 'ERROR';

const generateActionNames = baseName => ({
  [BASE_NAME_START]: `${baseName}_${BASE_NAME_START}`,
  [BASE_NAME_SUCCESS]: `${baseName}_${BASE_NAME_SUCCESS}`,
  [BASE_NAME_ERROR]: `${baseName}_${BASE_NAME_ERROR}`,
});

export const LOAD_TRACKER = generateActionNames('LOAD_TRACKER');
export const LOAD_TRACKERS = generateActionNames('LOAD_TRACKERS');
export const LOAD_TRACKINGS = generateActionNames('LOAD_TRACKINGS');
export const ADD_TRACKER = generateActionNames('ADD_TRACKER');
export const ADD_TRACKING = generateActionNames('ADD_TRACKING');
export const UPDATE_TRACKER = generateActionNames('UPDATE_TRACKER');
export const DELETE_TRACKER = generateActionNames('DELETE_TRACKER');

