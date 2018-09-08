import * as React from 'react';
const styles = require('./Root.scss');

export class Root extends React.Component {
    public render() {
        return (
            <h1 className={styles.root}>
                Welcome to Foodly
            </h1>
        );
    }
}

export default Root;