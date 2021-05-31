import React, { Component } from "react";
import ReactDOM from "react-dom";
import SignaturePad from "react-signature-canvas";
import Button from "@material-ui/core/Button";
import styles from "./style.module.css";

export default class Signature extends Component {
  state = { trimmedDataURL: null };
  sigPad = {};
  clear = () => {
    this.sigPad.clear();
  };
  trim = () => {
    this.setState({
      trimmedDataURL: this.sigPad.getTrimmedCanvas().toDataURL("image/png"),
    });
  };
  render() {
    let { trimmedDataURL } = this.state;
    return (
      <div className={styles.container} style={{border: "1px solid"}}>
        <div className={styles.sigContainer}>
          <SignaturePad
            canvasProps={{ className: styles.sigPad }}
            ref={(ref) => {
              this.sigPad = ref;
            }}
          />
        </div>
        
        {trimmedDataURL ? (
          <img className={styles.sigImage} src={trimmedDataURL} />
        ) : null}

<div style={{display: "flex", justifyContent: "center"}}>
          <Button variant="contained" color="primary" onClick={this.clear}>
            Limpiar
          </Button>
          <Button variant="contained" color="primary" onClick={this.trim}>
            Guardar
          </Button>
        </div>
      </div>
    );
  }
}

// ReactDOM.render(<App />, document.getElementById('root'))
