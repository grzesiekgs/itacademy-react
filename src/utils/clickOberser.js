let observers = [];

const globalClickObserver = (event) => {
  const { target } = event;

  observers.forEach(({ element, action }) => {
    if (!element.contains(target)) {
      action();
    }
  });
};

document.body.addEventListener('click', globalClickObserver);

const clickObserver = {
  observe: (action, element) => {
    observers.push({
      element,
      action,
    });
  },
  unobserve: (action) => {
    observers = observers.filter(
      (observer) => observer.action !== action
    );
  },
};

export default clickObserver;
