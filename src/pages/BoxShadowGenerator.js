import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { selectBoxShadow } from '../selectors';
import { changeBoxShadowParameter } from '../actions';
import Converter from '../helpers/Converter';
import CheckboxGroup from '../components/CheckboxGroup';
import RangeGroup from '../components/RangeGroup';
import ColorGroup from '../components/ColorGroup';

class BoxShadowGenerator extends Component {
    static propTypes = {
        boxShadow: PropTypes.object.isRequired
    };

    handleChange = event => {
        const { name, value, checked, type } = event.target;

        this.props.changeBoxShadowParameter({
            [name]: type === 'checkbox' ? checked : value
        });
    };

    makeBoxShadowStyle = () => {
        const order = [ 'inset', 'offsetX', 'offsetY', 'blurRadius', 'spreadRedius', 'shadowColor' ];
        const { boxShadow } = this.props;

        return order
            .map(item => {
                if (item === 'inset') {
                    return boxShadow[item] === true ? 'inset' : '';
                }
                if (item === 'shadowColor') {
                    return Converter.hexToRGBA(boxShadow[item], boxShadow['opacity']);
                }
                if ( ! isNaN(parseInt(boxShadow[item], 10))) {
                    return boxShadow[item] + 'px';
                }
                return boxShadow[item];
            })
            .join(' ');
    };

    render() {
        const {
            inset,
            offsetX,
            offsetY,
            blurRadius,
            spreadRedius,
            shadowColor,
            backgroundColor,
            boxColor,
            opacity,
        } = this.props.boxShadow;

        const boxShadowStyle = this.makeBoxShadowStyle();

        return (
            <div className="card">
                <div className="card-header">
                    Box Shadow
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-5 col-sm-6">
                            <form>
                                <div className="group">
                                    <CheckboxGroup label="Inset" name="inset" checked={inset} handleChange={this.handleChange} />
                                </div>
                                <div className="group">
                                    <RangeGroup label="Horizontal Length" name="offsetX" min="-100" step="1" max="100" value={offsetX} handleChange={this.handleChange} />
                                    <RangeGroup label="Vertical Length" name="offsetY" min="-100" step="1" max="100" value={offsetY} handleChange={this.handleChange} />
                                </div>
                                <div className="group">
                                    <RangeGroup label="Blur Radius" name="blurRadius" min="0" step="1" max="100" value={blurRadius} handleChange={this.handleChange} />
                                    <RangeGroup label="Spread Radius" name="spreadRedius" min="-100" step="1" max="100" value={spreadRedius} handleChange={this.handleChange} />
                                </div>
                                <div className="group">
                                    <ColorGroup label="Shadow Color" name="shadowColor" value={shadowColor} handleChange={this.handleChange} />
                                </div>
                                <div className="group">
                                    <ColorGroup label="Background Color" name="backgroundColor" value={backgroundColor} handleChange={this.handleChange} />
                                </div>
                                <div className="group">
                                    <ColorGroup label="Box Color" name="boxColor" value={boxColor} handleChange={this.handleChange} />
                                </div>
                                <div className="group">
                                    <RangeGroup label="Opacity" name="opacity" min="0" step="0.01" max="1" value={opacity} handleChange={this.handleChange} />
                                </div>
                            </form>
                        </div>
                        <div 
                            className="col-md-7 col-sm-6 d-flex align-items-center"
                            style={{
                                backgroundColor: backgroundColor
                            }}   
                        >
                            <div 
                                className="card" 
                                style={{
                                    width: '70%',
                                    height: '70%',
                                    margin: '0 auto',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    backgroundColor: boxColor,
                                    boxShadow: boxShadowStyle
                                }}
                            >
                                <form
                                    style={{
                                        width: '75%',
                                        margin: '0 auto'
                                    }}
                                >
                                    <div className="form-group">
                                        <textarea 
                                            className="form-control" 
                                            rows="3"
                                            style={{
                                                resize: 'none',
                                                fontSize: '14px',
                                            }}
                                            value={boxShadowStyle}
                                            readOnly
                                        ></textarea>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}

const mapStateToProps = state => ({
    boxShadow: {
        ...selectBoxShadow(state)
    }
});

const mapDispatchToProps = dispatch => ({
    changeBoxShadowParameter: (parameter) => {
        dispatch(changeBoxShadowParameter(parameter))
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BoxShadowGenerator);