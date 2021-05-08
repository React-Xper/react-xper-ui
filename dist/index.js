import toastEvent from "./ToastEvent";



/**

 * @name Toast

 * @consists {ToastContainer}

 * @consists {toast}

 * @description ToastContainer and toast() function for displaying messages

 */

export * from "./Toast";



const toast = (message) => {

  toastEvent.emit("normal", message);

};



toast.error = (message) => {

  toastEvent.emit("error", message);

};



toast.success = (message) => {

  toastEvent.emit("success", message);

};



toast.warn = (message) => {

  toastEvent.emit("warn", message);

};



toast.info = (message) => {

  toastEvent.emit("info", message);

};



export default toast;

