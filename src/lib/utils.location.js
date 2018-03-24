const getLocation = () => {
  if (navigator.geolocation) {
    return navigator.geolocation.getCurrentPosition(location => (location));
  }
  return {
    error: 'Geolocation is not supported by this browser.',
  };
};

export default getLocation;
