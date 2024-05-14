import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Col, Row } from "@themesberg/react-bootstrap";
import { Form, Formik } from "formik/dist/index";
import { useDispatch } from "react-redux";
import { InputField } from "../../components/form";
import { Employee } from "./Employee";


const ListFilter = ({ onSubmit, editMode = false }) => {
    const dispatch = useDispatch();
    return (
        <Formik
            initialValues={Employee}
            onSubmit={(values, { resetForm }) => {
                onSubmit(values);
            }}
        >
            {({ values, errors, setFieldValue }) => {
                
                

                return (
                    <Form>
                        <Row>
                            
                               
                                   
                                    <Col xl={3} lg={4} md={6} className="mb-10">
                                        <InputField
                                            label="আবেদনকারীর নাম"
                                            name="applicantName"
                                            type="text"
                                            placeholder="আবেদনকারীর নাম"
                                        />
                                    </Col>
                                    
                                    
                                
                           
                           

                           
                          

                            
                    



                            <Col md={12} className="mb-10 mt-10">
                                <Button
                                    variant="success"
                                    className="f-right m-10 btn btn-white btn-primary"
                                    type="submit"
                                >
                                    <FontAwesomeIcon
                                        icon={faSearch}
                                        className="me-2"
                                    />{" "}
                                    অনুসন্ধান করুন
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                );
            }}
        </Formik>
    );
};

export default ListFilter;
