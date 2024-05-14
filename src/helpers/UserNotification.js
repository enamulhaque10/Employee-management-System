import React, { useState, useEffect } from "react";
import { callApi, selectApi } from "../reducers/apiSlice";
import {
  Col,
  Container,
  Dropdown,
  Image,
  ListGroup,
  Nav,
  Navbar,
  Row,
} from "@themesberg/react-bootstrap";
import { AuthUser } from "../helpers/AuthUser";
import { useDispatch, useSelector } from "react-redux";
import { UrlBuilder } from "../helpers/UrlBuilder";
import { useHistory } from "react-router-dom";

const Notification = (props) => {
  const {
    id,
    link,
    notificationEventMessage,
    actionName,
    read,
    notificationEventFor,
    createdAt,
    actionRequestId,
  } = props;
  const readClassName = read ? "" : "text-danger";
  const dispatch = useDispatch();
  const history = useHistory();
  const { loading, notificationUpdate } = useSelector(selectApi);
  const [routeConnect, setRouteConnect] = useState(false);

  useEffect(() => {
    if (routeConnect == true) {
      if (
        actionName == "MPO_TEACHER_JOINING" ||
        actionName == "MPO_EMPLOYEE_JOINING"
      ) {
        history.push(`/portal/application/joining/${actionRequestId}`);
      } else if (
        actionName == "MPO_EMPLOYEE_JOINING_APPROVE" ||
        actionName == "MPO_EMPLOYEE_JOINING_REJECT"
      ) {
        history.push(`/portal/joining/details/${actionRequestId}/approval`);
      }

      // else if (actionName == "FS_SCHOLARSHIP_APPLICATION_APPLY") {
      //   history.push(`/applicant-application-detail/${actionRequestId}`);
      // } else if (actionName == "FS_SCHOLARSHIP_MULTIPLE_APPLICATIONS_REVIEW") {
      //   history.push(`/applicant-application-detail/${actionRequestId}`);
      // }
      //setRouteConnect(false)
    }
  }, [routeConnect, notificationUpdate]);

  return (
    <ListGroup.Item action href={link} className="border-bottom border-light">
      <Row
        className="align-items-center"
        style={
          read == true
            ? {
                fontWeight: "bold",
                backgroundColor: "#80808047",
                textAlign: "center",
              }
            : {}
        }
      >
        <Col
          className="ps-0 ms--2"
          onClick={() => {
            if (read == false) {
              dispatch(
                callApi({
                  operationId: UrlBuilder.notificationClientApi(
                    `notification-event/update/${id}?kcUserId=${AuthUser.getUserId()}&notificationEventForId=${
                      notificationEventFor.id
                    }&appModuleId=24`
                  ),
                  output: "notificationUpdate",
                  storeName: "notificationUpdate",
                  parameters: {
                    method: "PUT",
                    header: {
                      "Content-type": "application/json",
                    },
                  },
                })
              );
            }
            setRouteConnect(true);
          }}
        >
          <div className="">
            <div>
              <h4
                className="h6 mb-0 text-small"
                style={
                  read == false
                    ? { fontWeight: "bold", textAlign: "center" }
                    : {}
                }
              >
                {actionName.replace(/_/g, " ")}
              </h4>
            </div>
            {/* <div className="text-end">
                <small className={readClassName}>{time}</small>
              </div> */}
          </div>
          <h4 className="font-small mt-1 mb-0" style={{ textAlign: "center" }}>
            {notificationEventMessage}
          </h4>
          <h6 style={{ textAlign: "center" }}>{createdAt}</h6>
        </Col>
      </Row>
    </ListGroup.Item>
  );
};

export default Notification;
