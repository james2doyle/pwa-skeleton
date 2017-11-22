console.log('PWA working!');

const initialize = () => {
  const networkStatus = () => {
    if (navigator.onLine) {
      document.body.classList.remove('is-offline');
    } else {
      document.body.classList.add('is-offline');
    }
  };

  window.addEventListener('online', networkStatus);
  window.addEventListener('offline', networkStatus);

  networkStatus();
};

window.addEventListener('load', initialize);
