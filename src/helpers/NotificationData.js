import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { io } from "socket.io-client";
import { callApi, selectApi } from "../reducers/apiSlice";
import { setToastAlert } from "../reducers/toastAlertSlice";
import { AuthUser } from "./AuthUser";
import { UrlBuilder } from "./UrlBuilder";

const socket = io("http://103.4.145.250:5000");
// http://192.168.1.234:5000

const NotificationData = () => {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [socketId, setSocketId] = useState("0");
  //const [socket, setSocket] = useState(null);
  const [notifyCount, setNotifyCount] = useState(0);

  const dispatch = useDispatch();
  const { loading, notifyData = { data: {} } } = useSelector(selectApi);

  // console.log("notifyCount", notifyCount);

  useEffect(() => {
    if (AuthUser.isLoggedIn()) {
      dispatch(
        callApi({
          operationId: UrlBuilder.notificationClientApi(
            `notification-event/notifications/${AuthUser?.getUserId()}?appModuleId=24`
          ),
          output: "notifyData",
        })
      );
    }
  }, [notifyCount]);

  useEffect(() => {
    // if (socket === null) {
    //   setSocket(io("http://103.4.145.250:5000"));
    // }

    socket.on("connect", () => {
      setIsConnected(true);
      // console.log(socketId, "sokitid");
    });

    socket.on("disconnect", () => {
      setIsConnected(false);
    });

    // subscribe to socket events

    socket.on("MESSAGE_REQUEST_ACCEPTED", async (data) => {
      // NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
      if (JSON.parse(data).isPushNotification) {
        let notificationMessageData = await JSON.parse(data);

        let eventLen = notificationMessageData?.notificationEventForList.length;
        for (let i = 0; i < eventLen; i++) {
          if (
            AuthUser.getUserId() ==
            notificationMessageData?.notificationEventForList[i]
              ?.notifyForKcUserId
          ) {
            dispatch(
              setToastAlert({
                type: "info",
                message: notificationMessageData.notificationEventMessage,
                //JSON.parse(data).notificationMessageEvent,
              })
            );
          }
        }

        // <ToastContainer />
        setNotifyCount(data.id);
      }
    });

    socket.on("SEND_NOTIFICATION", (data) => {
      setSocketId(data.id);

      // toast("⛄ Wow so easy!", {
      //   position: "top-right",
      //   autoClose: 2000,
      //   hideProgressBar: false,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: undefined,
      //   type: "info",
      //   theme: "light",
      // });
    });
    return () => {
      socket.off("connect");
      socket.off("disconnect");
      socket.off("MESSAGE_REQUEST_ACCEPTED");
      socket.off("SEND_NOTIFICATION");
    };

    //socket.off("SEND_NOTIFICATION");
  }, []);

  return <>{/* <ToastContainer /> */}</>;
};

export default NotificationData;
