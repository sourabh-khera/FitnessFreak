/**
 * Created by sourabh on 1/8/17.
 */
import React, { Component } from 'react'
import { Modal ,Button} from "react-bootstrap"
const ReactModal = (Component1, props) => {
    const { showModal, closeModal} = props;
    return class Hoc extends Component {
        render() {
            return (
                <div>
                    <Modal show={showModal} onHide={closeModal} bsSize="lg">
                        <Modal.Header closeButton>
                            <Modal.Title>
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                             <Component1/>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button bsStyle="danger" onClick={closeModal}>Close</Button>
                            <Button bsStyle="primary">Submit</Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            )
        }
    }
};
export default ReactModal