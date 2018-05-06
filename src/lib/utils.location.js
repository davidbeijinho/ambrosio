const getLocation = options => new Promise(((resolve, reject) => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(resolve, reject, options);
  } else {
    reject(new Error('Geolocation is not supported by this browser.'));
  }
}));

export default getLocation;
