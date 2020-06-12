const options = {
  root: null,
  rootMargin: '20px',
  threshold: 0.01,
};

const observer = new IntersectionObserver((entries) => {
  console.log('Observer event', entries);

  entries.forEach((entry) => {
    if (entry.intersectionRatio) {
      const action = observerEntries.get(entry.target);
      console.log('CALLING ACTION', entry.target);
      if (action) {
        action();
        console.log('ACTION CALLED');
      }
    }
  });
}, options);

const observerEntries = new Map();

export const viewportObserverAPI = {
  observe: (element, action) => {
    observerEntries.set(element, action);

    observer.observe(element);
  },
  unobserve: (element) => {
    observerEntries.delete(element);

    observer.unobserve(element);
  },
};
