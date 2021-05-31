import React, {  useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Grid from "@material-ui/core/Grid";
import Signature from "./Signature";
import InputAdornment from "@material-ui/core/InputAdornment";
// import CargarEvidencia from "./CargarEvidencia";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
// import axios from "axios";
import Button from '@material-ui/core/Button';
const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));


function Form() {
  const classes = useStyles();
  const [loader, setLoader] = useState(null);
  const [setBtnDisable] = useState(true);
  const [state, setState] = useState({
    cedis: "",
    unidad: "",
    odoIni: "",
    odoFin: "",
    varOdo: "",
    inicialRi: "",
    finalRi: "",
    magnaInicial: "",
    magnaFinal: "",
    carburaInicial: "",
    carburaFinal: "",
    gasCarburaFinal: "",
    gasCarburaInicial: "",
    tempMole: "",
    presMole: "",
    selectedFile: []
  });

  const unidadesAPI = [
    "unidad 1","unidad 2","unidad 3", "unidad 4","unidad 5","unidad 6"
  ]
  

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  const submitForm = () => {
    let formData = new FormData();
    // formData.append("cedis", state.cedis);
    // formData.append("unidad", state.unidad);
    formData.append("odoIni", state.odoIni);
    // formData.append("odoFin", state.odoFin);
    // formData.append("varOdo", state.varOdo);
    // formData.append("inicialRi", state.inicialRi);
    // formData.append("finalRi", state.finalRi);
    // formData.append("magnaInicial", state.magnaInicial);
    // formData.append("magnaFinal", state.magnaFinal);
    // formData.append("carburaInicial", state.carburaInicial);
    // formData.append("carburaFinal", state.carburaFinal);
    // formData.append("imagenes", state.selectedFile);

    console.log(formData);

  //   const resultado = await axios.post(`${process.env.REACT_APP_API_URL}api/`, formData, {
  //     headers: {
  //         // 'Authorization': `Basic ${token}`,
  //         'Content-Type': 'multipart/form-data'
  //     },
  // });
  };

  const uploadImages = (e) =>{
    e.preventDefault();
    setState({selectedFile: e.target.files })
  }



  return (
    <Grid
      container
      spacing={1}
      style={{ display: "flex", justifyContent: "center" }}
    >
      <Grid
        container
        spacing={1}
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Grid item xs={12} sm={6}>
          <h4>Por favor llene los campos</h4>
        </Grid>
      </Grid>

      <Grid item xs={12} sm={4} style={{ marginBottom: 20 }}>
        <FormControl
          variant="outlined"
          className={classes.formControl}
          style={{ width: "100%" }}
        >
          <InputLabel htmlFor="outlined-age-native-simple">CEDIS</InputLabel>
          <Select
            native
            value={state.cedis}
            onChange={handleChange}
            label="UNIDAD"
            inputProps={{
              name: "cedis",
              id: "outlined-age-native-simple",
            }}
          >
            <option aria-label="None" value="" />
            <option value="jrz">Juarez</option>
            <option value="mty">Monterrey</option>
            <option value="chih">Chihuahua</option>
            <option value="vah">Villa Ahumada</option>
            <option value="slp">San Luis Potosi</option>
            <option value="cg">Casas Grandes</option>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={4} style={{ marginBottom: 20 }}>
        <FormControl
          variant="outlined"
          className={classes.formControl}
          style={{ width: "100%" }}
        >
          <InputLabel htmlFor="outlined-age-native-simple">Unidad</InputLabel>
          <Select
            native
            value={state.unidad}
            onChange={handleChange}
            label="UNIDAD"
            inputProps={{
              name: "unidad",
              id: "outlined-age-native-simple",
            }}
          >
            <option aria-label="None" value="" />
            {unidadesAPI.length > 0
              ? unidadesAPI.map((u, i) => (
                  <option value={u.id} key={i}>
                    {u}
                  </option>
                ))
              : null}
          </Select>
        </FormControl>
      </Grid>
      <Grid
        item
        xs={12}
        sm={4}
        style={{ display: "flex", justifyContent: "flex-end" }}
      >
        <TextField
          label="Fecha de registro"
          disabled
          width="100%"
          InputLabelProps={{ shrink: true }}
          type="date"
          defaultValue={new Date().toISOString().slice(0, 10)}
        />
      </Grid>
      <Grid item xs={12} sm={4} style={{ marginBottom: 20 }}>
        <TextField
          style={{ width: "100%" }}
          required
          disabled
          label="Capacidad de la unidad"
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12} sm={4} style={{ marginBottom: 20 }}>
        <TextField
          style={{ width: "100%" }}
          required
          label="Temperatura molecula"
          variant="outlined"
          onChange={handleChange}
          name={"tempMole"}
          value={state.tempMole}
          type="number"
        />
      </Grid>
      <Grid item xs={12} sm={4} style={{ marginBottom: 20 }}>
        <TextField
          style={{ width: "100%" }}
          required
          label="Presion molecula"
          variant="outlined"
          onChange={handleChange}
          name={"presMole"}
          value={state.presMole}
          type="number"
        />
      </Grid>

      <Grid
        container
        spacing={1}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          marginBottom: 20,
        }}
      >
        <Grid item sm={2} xs={12}>
          <InputLabel
            htmlFor="outlined-age-native-simple"
            style={{ width: "100%" }}
          >
            Odometro de la unidad
          </InputLabel>
        </Grid>
        <Grid item sm={4} xs={12}>
          <TextField
            style={{ width: "100%" }}
            required
            label="Odometro inicial de la unidad"
            value={state.odoIni}
            name={"odoIni"}
            variant="outlined"
            onChange={handleChange}
            type="number"
          />
        </Grid>
        <Grid item sm={4} xs={12}>
          <TextField
            style={{ width: "100%" }}
            required
            label="Odometro final de la unidad"
            value={state.odoFin}
            name={"odoFin"}
            variant="outlined"
            onChange={handleChange}
            type="number"
          />
        </Grid>
        <Grid item sm={2} xs={12}>
          <TextField
            style={{ width: "100%" }}
            required
            label="Variacion"
            name={"varOdo"}
            value={state.odoFin - state.odoIni}
            disabled
            variant="outlined"
            type="number"
            // onChange={handleChange}
          />
        </Grid>
      </Grid>

      <Grid
        container
        spacing={1}
        style={{ display: "flex", alignItems: "center", marginBottom: 20 }}
      >
        <Grid item sm={2} xs={12}>
          <InputLabel
            htmlFor="outlined-age-native-simple"
            style={{ width: "100%" }}
          >
            Lectura del sistema RI
          </InputLabel>
        </Grid>

        <Grid item sm={4} xs={12}>
          <TextField
            style={{ width: "100%" }}
            required
            value={state.inicialRi}
            name={"inicialRi"}
            label="Porcentaje Inicial"
            variant="outlined"
            onChange={handleChange}
            type="number"
          />
        </Grid>

        <Grid item sm={4} xs={12}>
          <TextField
            style={{ width: "100%" }}
            required
            value={state.finalRi}
            name={"finalRi"}
            label="Porcentaje Final"
            variant="outlined"
            onChange={handleChange}
            type="number"
          />
        </Grid>
        <Grid item sm={2} xs={12}>
          <TextField
            style={{ width: "100%" }}
            required
            label="Variacion Ri"
            value={state.finalRi - state.inicialRi}
            variant="outlined"
            type="number"
          />
        </Grid>

        <Grid
          container
          spacing={1}
          style={{ display: "flex", alignItems: "center", marginTop: 20 }}
        >
          <Grid item sm={2} xs={12}>
            <InputLabel
              htmlFor="outlined-age-native-simple"
              style={{ width: "100%" }}
            >
              Lectura de Magnatel Tanque %
            </InputLabel>
          </Grid>
          <Grid item sm={4} xs={12}>
            <TextField
              style={{ width: "100%" }}
              required
              label="Porcentaje Inicial"
              InputProps={{
                endAdornment: <InputAdornment position="end">%</InputAdornment>,
              }}
              value={state.magnaInicial}
              variant="outlined"
              name="magnaInicial"
              onChange={handleChange}
              type="number"
            />
          </Grid>
          <Grid item sm={4} xs={12}>
            <TextField
              style={{ width: "100%" }}
              required
              label="Porcentaje Final"
              InputProps={{
                endAdornment: <InputAdornment position="end">%</InputAdornment>,
              }}
              onChange={handleChange}
              value={state.magnaFinal}
              variant="outlined"
              name="magnaFinal"
              type="number"
            />
          </Grid>
          <Grid item sm={2} xs={12}>
            <TextField
              style={{ width: "100%" }}
              required
              label="Variacion"
              InputProps={{
                endAdornment: <InputAdornment position="end">%</InputAdornment>,
              }}
              value={state.magnaFinal - state.magnaInicial}
              variant="outlined"
              type="number"
            />
          </Grid>
        </Grid>
        <Grid
          container
          spacing={1}
          style={{ display: "flex", alignItems: "center", marginTop: 20 }}
        >
          <Grid item sm={2} xs={12}>
            <InputLabel
              htmlFor="outlined-age-native-simple"
              style={{ width: "100%" }}
            >
              Lectura medidor de carburacion %
            </InputLabel>
          </Grid>
          <Grid item sm={4} xs={12}>
            <TextField
              style={{ width: "100%" }}
              required
              label="Porcentaje Inicial"
              InputProps={{
                endAdornment: <InputAdornment position="end">%</InputAdornment>,
              }}
              value={state.carburaInicial}
              variant="outlined"
              name="carburaInicial"
              onChange={handleChange}
            />
          </Grid>
          <Grid item sm={4} xs={12}>
            <TextField
              style={{ width: "100%" }}
              required
              label="Porcentaje Final"
              InputProps={{
                endAdornment: <InputAdornment position="end">%</InputAdornment>,
              }}
              onChange={handleChange}
              value={state.carburaFinal}
              variant="outlined"
              name="carburaFinal"
            />
          </Grid>
          <Grid item sm={2} xs={12}>
            <TextField
              style={{ width: "100%" }}
              required
              label="Variacion"
              InputProps={{
                endAdornment: <InputAdornment position="end">%</InputAdornment>,
              }}
              value={state.carburaFinal - state.carburaInicial}
              variant="outlined"
            />
          </Grid>
        </Grid>
        <Grid
          container
          spacing={1}
          style={{ display: "flex", alignItems: "center", marginTop: 20 }}
        >
          <Grid item sm={2} xs={12}>
            <InputLabel
              htmlFor="outlined-age-native-simple"
              style={{ width: "100%" }}
            >
              Lectura gas liquido tanque carburacion %
            </InputLabel>
          </Grid>
          <Grid item sm={4} xs={12}>
            <TextField
              style={{ width: "100%" }}
              required
              label="Porcentaje Inicial"
              InputProps={{
                endAdornment: <InputAdornment position="end">%</InputAdornment>,
              }}
              value={state.gasCarburaInicial}
              variant="outlined"
              name="carburaInicial"
              onChange={handleChange}
            />
          </Grid>
          <Grid item sm={4} xs={12}>
            <TextField
              style={{ width: "100%" }}
              required
              label="Porcentaje Final"
              InputProps={{
                endAdornment: <InputAdornment position="end">%</InputAdornment>,
              }}
              onChange={handleChange}
              value={state.gasCarburaFinal}
              variant="outlined"
              name="carburaFinal"
            />
          </Grid>
          <Grid item sm={2} xs={12}>
            <TextField
              style={{ width: "100%" }}
              required
              label="Variacion"
              InputProps={{
                endAdornment: <InputAdornment position="end">%</InputAdornment>,
              }}
              value={state.gasCarburaFinal - state.gasCarburaInicial}
              variant="outlined"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item sm={4} xs={12}>
        <p>Evidencia:</p>
        <input
          accept="image/*"
          multiple
          
          onChange={(e) => uploadImages(e)}
          id="icon-button-file"
          style={{ display: "none" }}
          type="file"
        />
        <label className="mt-4" htmlFor="icon-button-file">
          {" "}
          <i>
            Adjunta las fotografias que verifiquen la informacion que
            capturaste.
          </i>
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="span"
          >
            <PhotoCamera />
          </IconButton>
        </label>
        {state.selectedFile.length > 0 ?(
          
          <p>Se cargaron {state.selectedFile.length} imagenes.</p> ) : (null)
        } 
      </Grid>
      <Grid item sm={4} xs={12}>
        <p>Autorizar:</p>
        <Signature />
      </Grid>
      <Grid
        item
        sm={4}
        xs={12}
        style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
         <Button variant="contained" color="primary"
        onClick={e => submitForm(e)}>Guardar</Button>
      </Grid>
    </Grid>
  );
}

export default Form;
