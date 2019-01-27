import React, { Component } from 'react';
import Converter from '../helpers/Converter';

class ColorConverter extends Component {
    state = {
        color: '#000',
        scale: 'hex'
    };

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({
            color: value,
            scale: name
        });
    };

    // const hex = scale === 'rgb' 
    //     ? Converter.rgbToHEX(color) 
    //     : color;

    // const rgb = scale === 'hex' 
    //     ? Converter.hexToRGB(color) 
    //     : color;

    // return { hex, rgb };
    tryConvert = () => {
        const { color, scale } = this.state;

        switch (scale) {
            case 'rgb':
                return {
                    hex: Converter.rgbToHEX(color),
                    rgb: color
                };
            case 'hex':
                return {
                    hex: color,
                    rgb: Converter.hexToRGB(color)
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
                <div class="card-header">
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

export default ColorConverter;