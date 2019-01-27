import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { selectBoxShadow } from '../selectors';
import { changeBoxShadow } from '../actions';

class BoxShadowGenerator extends Component {
    static propTypes = {
        boxShadow: PropTypes.object.isRequired
    };

    handleChange = event => {
        const { name, value, checked, type } = event.target;

        this.props.changeBoxShadow({
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

        console.log(boxShadowStyle);

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
                                    <div className="form-group form-check">
                                        <input type="checkbox" className="form-check-input" name="inset" id="inset" checked={inset} onChange={this.handleChange} />
                                        <label className="form-check-label" htmlFor="inset">Inset</label>
                                    </div>
                                </div>
                                <div className="group">
                                    <div className="form-group">
                                        <label htmlFor="offsetX">Horizontal Length</label>
                                        <input type="range" className="form-control-range" name="offsetX" id="offsetX" value={offsetX} onChange={this.handleChange} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="offsetY">Vertical Length</label>
                                        <input type="range" className="form-control-range" name="offsetY" id="offsetY" value={offsetY} onChange={this.handleChange} />
                                    </div>
                                </div>
                                <div className="group">
                                    <div className="form-group">
                                        <label htmlFor="blurRadius">Blur Radius</label>
                                        <input type="range" className="form-control-range" name="blurRadius" id="blurRadius" value={blurRadius} onChange={this.handleChange} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="spreadRedius">Spread Radius</label>
                                        <input type="range" className="form-control-range" name="spreadRedius" id="spreadRedius" value={spreadRedius} onChange={this.handleChange} />
                                    </div>
                                </div>
                                <div className="group">
                                    <div className="form-group">
                                        <label htmlFor="shadowColor">Shadow Color</label>
                                        <input type="color" className="form-control" name="shadowColor" id="shadowColor" value={shadowColor} onChange={this.handleChange} />
                                    </div>
                                </div>
                                <div className="group">
                                    <div className="form-group">
                                        <label htmlFor="backgroundColor">Background Color</label>
                                        <input type="color" className="form-control" name="backgroundColor" id="backgroundColor" value={backgroundColor} onChange={this.handleChange} />
                                    </div>
                                </div>
                                <div className="group">
                                    <div className="form-group">
                                        <label htmlFor="boxColor">Box Color</label>
                                        <input type="color" className="form-control" name="boxColor" id="boxColor" value={boxColor} onChange={this.handleChange} />
                                    </div>
                                </div>
                                <div className="group">
                                    <div className="form-group">
                                        <label htmlFor="opacity">Opacity</label>
                                        <input type="range" className="form-control-range" name="opacity" id="opacity" value={opacity} onChange={this.handleChange} />
                                    </div>
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
                                    width: '50%',
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
                                                resize: 'none'
                                            }}
                                            value={`box-shadow: ${boxShadowStyle};`}
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
    changeBoxShadow: (rule) => {
        dispatch(changeBoxShadow(rule))
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BoxShadowGenerator);