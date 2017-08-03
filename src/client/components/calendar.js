import React from 'react'
import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import ReactModal from './HOC/reactModel'
import ScheduleWrapper from './ScheduleWrapper'


let events = [];
BigCalendar.setLocalizer(
    BigCalendar.momentLocalizer(moment)
);
export default class ScheduleCalendar extends React.Component {
    constructor() {
        super();
        this.state = {
            eventsTitle: "",
            showModal: false
        }
    }

    closeModal = () => {
        this.setState({showModal: false})
    };
    onDateSelection = (slot) => {
        const date = slot.start.getMonth() + 1 + '/' + slot.start.getDate() + '/' + slot.start.getFullYear();
        events.push({
            title: this.state.eventsTitle,
            start: new Date(date),
            end: new Date(date)
        });
        this.setState({showModal: true});
    };

    render() {
        const {showModal} = this.state;
        const Modal = ReactModal(ScheduleWrapper, {
            showModal,
            closeModal: this.closeModal,
        });
        return (
            <div className='wrapper-container'>
                <BigCalendar
                    views={ ['month'] }
                    events={ events }
                    selectable
                    onSelectSlot={this.onDateSelection}
                />
                <Modal />
            </div>
        )
    }
}