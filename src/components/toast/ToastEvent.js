const toastEvent = {
  eventManager: {},
  on: function (eventName, callback) {
    this.eventManager[eventName] = callback;
  },

  off: function (eventName) {
    delete this.eventManager?.[eventName];
  },

  emit: function (eventName, message) {
    const eventCallback = this.eventManager[eventName];

    if (typeof eventCallback === "function") {
      eventCallback(message);
    }
  },
};

export default toastEvent;
