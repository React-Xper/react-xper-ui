import React from "react";
import "./Toast.scss";
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

/**
 * @name  Toast
 * @description Toast JSX element
 * @details https://bit.dev/m3yevn/reacthesis-ui/toast
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
          className={`${className} rts-ui__toast toast--${position}`.trim()}
          {...props}>
          {events.map((evt) => {
            return (
              <div className={`toast-component toast-component--${evt.type}`}>
                <ToastClose
                  className={`toast-close toast-close--${evt.type}`}
                  style={{ height: "12px" }}
                  onClick={handleCloseToast(evt?.eventId)}
                />
                {evt.message}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
