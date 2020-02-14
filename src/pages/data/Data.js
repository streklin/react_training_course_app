import React, {useState, useEffect} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';

import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {getSailboats} from "../../api/sailboat";

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

const DataContent = (props) => {
    const generateRows = () => {
        return props.state.data.sailboats.map((item) => {
            return <SailbotRow sailboat={item} />
        });
    };

    return (
        <div>
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
            </Table>
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
        informationType: 'BOATS_SIZE',
        data: [],
        isLoading: true
    });

    useEffect(() => {
      getSailboats()
            .then((response) => {
                setState({
                    ...state,
                    data: response.data.payload,
                    isLoading: false
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

    let content = state.isLoading ? <Loader /> : <DataContent state={state} />;

    return (
        <div id={"#data-page"} className={'data-page'}>
            {content}
        </div>
    )
};

export default Data;

