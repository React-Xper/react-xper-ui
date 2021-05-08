const toastEvent = {
  eventManager: {} as any,
  on: function (eventName: string, callback: Function) {
    this.eventManager[eventName] = callback;
  },

  off: function (eventName: string) {
    delete this.eventManager?.[eventName];
  },

  emit: function (eventName: string, message: string) {
    const eventCallback = this.eventManager[eventName];

    if (typeof eventCallback === "function") {
      eventCallback(message);
    }
  },
};

export default toastEvent;
