import React, { Component } from 'react';
import { connect } from 'react-redux';
import Converter from '../helpers/Converter';
import { changeColorParameter } from '../actions';
import { selectColor } from '../selectors';

class ColorConverter extends Component {
    handleChange = event => {
        const { name, value } = event.target;

        this.props.changeColorParameter({
            value,
            scale: name
        });
    };

    tryConvert = () => {
        const { value, scale } = this.props.color;

        switch (scale) {
            case 'rgb':
                return {
                    hex: Converter.rgbToHEX(value),
                    rgb: value
                };
            case 'hex':
                return {
                    hex: value,
                    rgb: Converter.hexToRGB(value)
                };
            default:
                return {
                    hex: '',
                    rgb: ''
                }
        }
    }

    render() {
        const { hex, rgb } = this.tryConvert();

        return (
            <div className="card">
                <div className="card-header">
                    Convert: HEX &amp; RGB
                </div>
                <div className="card-body">
                    <form>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label" htmlFor="hex">HEX</label>
                            <div className="col-sm-10">
                                <input className="form-control" type="text" name="hex" id="hex" value={hex} onChange={this.handleChange} />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label" htmlFor="inputPassword">RGB</label>
                            <div className="col-sm-10">
                                <input className="form-control" type="text" name="rgb" id="rgb" value={rgb} onChange={this.handleChange} />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    };
}

const mapStateToProps = state => ({
    color: {
        ...selectColor(state)
    }
});

const mapDispatchToProps = dispatch => ({
    changeColorParameter: (parameter) => {
        dispatch(changeColorParameter(parameter))
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ColorConverter);