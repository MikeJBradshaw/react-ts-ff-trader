import { useEffect } from 'react';
import { connect } from 'react-redux';
import { init } from '../actions/leagues';
import type { FunctionComponent } from 'react';
import type { ConnectedProps } from 'react-redux';
import type { RootState } from '../store';


const connector = connect(
    ({leagues: { leagues, error, loading }}: RootState) => ({ leagues, error, loading }),
    { init }
);


const Leagues: FunctionComponent<ConnectedProps<typeof connector>> = ({ leagues, error, loading }) => {
    useEffect(() => {
        init();
    }, []);

    return (
        <div>{leagues}</div>
    );
};


export default connector(Leagues);
