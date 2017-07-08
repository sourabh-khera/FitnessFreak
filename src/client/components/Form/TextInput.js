import React, {Component} from 'react'
import {setValidationState} from '../../actions/validation'
import {connect} from 'react-redux'
import Alert from "react-alert";


class TextInput extends Component {
    componentDidMount() {
        this.props.setValidationState('pristine', this.props.name, true);
        this.validate(this.props.value);
        this.alertOptions = {
            theme: 'dark',
            time: 3000,
            position: 'top right',
        }
    };

    validate = (value) => {
        const errors = this.props.validators.map((validators) => (
            validators(value)
        ));
        const error = errors.filter((error) => !!error)[0] || null;
        this.props.setValidationState('errors', this.props.name, error);
    };

    handleChange = (e) => {
        const value = e.target.value;
        this.validate(value);
        this.props.onChange(e);
    };

    handleBlur = (e) => {
        if (this.props.error && !this.props.pristine) {
            this.alert.show(this.props.error, {
                type: 'error'
            })
        }
        this.props.onBlur(e);
    };

    handleFocus = (e) => {
        this.props.setValidationState('pristine', this.props.name, 'false');
        this.props.onFocus(e);
    };

    render() {
        const {name, className, placeholder, type}=this.props;
        return (
            <div>
                <Alert ref={ele => this.alert = ele} {...this.alertOptions}/>
                <input
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    className={className}
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                    onFocus={this.handleFocus}
                />

            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => ({
    error: state.formValidation.errors[ownProps.name] || null,
    pristine: state.formValidation[ownProps.name]
});

const mapDispatchToProps = (dispatch) => ({
    setValidationState: (type, field, value) => {
        dispatch(setValidationState(type, field, value))
    }
});

TextInput.defaultProps = {
    validators: [],
    onChange: () => {},
    onBlur: () => {},
    onFocus: () => {},
};


export default connect(mapStateToProps, mapDispatchToProps)(TextInput)