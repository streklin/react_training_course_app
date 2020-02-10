import React, {useState} from 'react';

const Data = (props) => {
    const [state, setState] = useState({
        informationType: 'BOATS_SIZE',
        data: [
            {
                'size': 22,
                'name': 'Catalina'
            }
        ]
    });

    return (
        <div id={"#data-page"}>
            {state.informationType}
            <a
                href={'#'}
                onClick={() => setState({
                    ...state,
                    informationType: "SAILS!"
                })}
            >
                CLICK ME
            </a>
        </div>
    )
};

export default Data;

