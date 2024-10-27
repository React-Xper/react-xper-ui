import React, { useEffect } from "react";
import styles from "./Toast.module.css";
import toastEvent from "./ToastEvent";
import ToastClose from "./ToastClose";

interface IToast
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  open?: boolean;
  position?:
    | "top-right"
    | "top-left"
    | "top-center"
    | "bottom-right"
    | "bottom-left"
    | "bottom-center";
  autoClear?: boolean;
  autoClearDuration?: number;
}

interface ToastEvent {
  eventId: string;
  type: string;
  message: string;
}

interface IToastProps {
  evt: ToastEvent;
  handleCloseToast: Function;
  autoClear?: Boolean;
  autoClearDuration?: number;
}

function ToastItem({
  evt,
  handleCloseToast,
  autoClear,
  autoClearDuration,
}: IToastProps) {
  useEffect(() => {
    if (autoClear && autoClearDuration) {
      setTimeout(() => {
        handleCloseToast(evt?.eventId).call();
      }, autoClearDuration || 0);
    }
  }, [autoClear, evt?.eventId, autoClearDuration, handleCloseToast]);

  return (
    <div
      key={evt?.eventId}
      className={`${styles["toast-component"]} ${styles[`--${evt.type}`]}`}
    >
      <ToastClose
        className={`${styles["toast-close"]} ${styles[`--${evt.type}`]}`}
        onClick={handleCloseToast(evt?.eventId)}
      />
      {evt.message}
    </div>
  );
}

/**
 * @name  Toast
 * @description Toast JSX element
 */
export function ToastContainer({
  position = "top-right",
  autoClear = true,
  autoClearDuration = 3000,
  className = "",
  ...props
}: IToast) {
  const [events, setEvents] = React.useState<any[]>([]);

  const createEventType = React.useCallback(
    (type: string) => (message: string) => {
      const eventId = events?.length + 1;
      const newEvents = events.concat({ eventId, type, message });
      setEvents(newEvents);
    },
    [events]
  );

  React.useEffect(() => {
    toastEvent.on("normal", createEventType("normal"));
    toastEvent.on("success", createEventType("success"));
    toastEvent.on("error", createEventType("error"));
    toastEvent.on("info", createEventType("info"));
    toastEvent.on("warn", createEventType("warn"));

    return () => {
      toastEvent.off("normal");
      toastEvent.off("success");
      toastEvent.off("error");
      toastEvent.off("info");
      toastEvent.off("warn");
    };
  }, [createEventType]);

  const handleCloseToast = (id: number) => () => {
    const filteredEvents = events.filter((evt) => evt?.eventId !== id);
    setEvents(filteredEvents);
  };

  return (
    <div>
      {!!events?.length && (
        <div
          className={`${className} ${styles["rxp-ui__toast"]} ${
            styles[`toast--${position}`]
          }`.trim()}
          {...props}
        >
          {events.map((evt) => {
            return (
              <ToastItem
                key={evt?.eventId}
                evt={evt}
                handleCloseToast={handleCloseToast}
                autoClear={autoClear}
                autoClearDuration={autoClearDuration}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
