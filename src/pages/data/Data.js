import React, {useState, useEffect} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import {getSailboats} from "../../api/sailboat";

const STATE_BOATS = 'STATE_BOATS';
const STATE_SAILS = "STATE_SAILS";

const Loader = (props) => {
    return (
        <div>Loading Please Wait ...</div>
    );
};

// props.sailboat
/*
{
          "name": "Benetau First 14",
          "size": 14,
          "cost": 18000
}
{
    "byyclic" 190238291
}
 */
const SailbotRow = (props) => {
    return (
        <TableRow>
            <TableCell>{props.sailboat.name}</TableCell>
            <TableCell>{props.sailboat.size}</TableCell>
            <TableCell>{props.sailboat.cost}</TableCell>
        </TableRow>
    )
};

const SailboatList = (props) => {
    const generateRows = () => {
        return props.state.data.sailboats.map((item, index) => {
            return <SailbotRow key={index} sailboat={item}/>
        });
    };

    return (
        <Table>
            <TableHead>
                <TableRow>

                    <TableCell>Name</TableCell>
                    <TableCell>Size</TableCell>
                    <TableCell>Cost</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {generateRows()}
            </TableBody>
        </Table>);
};

// LIST PATTERN
const SailsList = (props) => {

    const generateRows = () => {
        return props.state.data.sailboats.map((item, index) => {
            return (
                <TableRow key={index}>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.cost}</TableCell>
                </TableRow>
            );
        });
    };

    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Cost</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {generateRows()}
            </TableBody>
        </Table>
    );
};

const DataContent = (props) => {

    const handleChange = event => {
        props.update(event.target.value);
    };

    let listComponent = props.state.uxState.informationType === STATE_BOATS ? <SailboatList state={props.state} /> : <SailsList state={props.state} />;

    let conditionRender = null;
    if (props.state.uxState.informationType === STATE_SAILS) {
        conditionRender = (<label>RENDER ME SOME SAILS!</label>);
    }

    return (
        <div>
            <form>
                <FormControl margin={'dense'} fullWidth>
                    <InputLabel id="demo-simple-select-label">Boats or Sails</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        onChange={handleChange}
                        value={props.state.uxState.informationType}
                    >
                        <MenuItem value={STATE_BOATS}>Boats</MenuItem>
                        <MenuItem value={STATE_SAILS}>Sails</MenuItem>
                    </Select>
                </FormControl>

                {listComponent}
                {conditionRender}

            </form>

        </div>
    );
};

/*
map: list of items -> list of other items
reduce: list of items -> single item (typically a number, but can be an array or object)
filter: list of items -> list of items that meet criteria
*/

const Data = (props) => {
    const [state, setState] = useState({
        uxState: {
            informationType: STATE_BOATS,
            isLoading: true,
        },
        data: [],
    });

    useEffect(() => {
        getSailboats()
            .then((response) => {
                setState({
                    ...state,
                    uxState: {
                        ...state.uxState,
                        isLoading: false
                    },
                    data: response.data.payload,
                });
            })
            .catch((error) => {
                // tell the user the world has ended.
            });

        /*
        POST EXAMPLE
        axios.post('myurl', {})
          .then((response) => {

          })
          */

    }, []);

    const update = (informationType) => {

        setState({
            ...state,
            uxState: {
                ...state.uxState,
                informationType: informationType
            }
        });
    };

    let content = state.uxState.isLoading ? <Loader/> : <DataContent update={update} state={state}/>;

    return (
        <div id={"#data-page"} className={'data-page'}>
            {content}
        </div>
    )
};

export default Data;

