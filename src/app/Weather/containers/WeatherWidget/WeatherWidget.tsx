import * as React from 'react';
import { connect } from "react-redux";
import { State } from "../../../types";
import { weatherDataRequestSent } from "../../actions";
import { Weather } from "../../types";
import { getMainWeatherData } from "../../selectors";

export type WeatherWidgetStateProps = {
    weatherData: Weather | undefined;
};

export type WeatherWidgetDispatchProps = {
    onMount: () => void;
};

export type WeatherWidgetProps = WeatherWidgetDispatchProps & WeatherWidgetStateProps;

class WeatherWidget extends React.Component<WeatherWidgetProps> {
    componentDidMount() {
        const { onMount } = this.props;
        onMount();
    };

    render(){
        const { weatherData } = this.props;

        return(
            <>
                Weather Data: { weatherData && weatherData.main }, { weatherData && weatherData.description }
            </>

        );
    }
}

const mapStateToProps = (state: State) => {
    return {
        weatherData: getMainWeatherData(state)
    }
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        onMount: () => {
            dispatch(weatherDataRequestSent())
        }
    }
};

export const WeatherWidgetContainer = connect<
    WeatherWidgetStateProps,
    WeatherWidgetDispatchProps
    >(mapStateToProps, mapDispatchToProps)(WeatherWidget);
