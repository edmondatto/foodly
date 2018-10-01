import * as React from 'react';
import { connect } from "react-redux";
import { State } from "../../types";
import { searchRequestSent } from "../../actions";
import './SearchBar.css';
import { Request } from "../../../types";

type SearchBarStateProps = {
    requestState: Request;
}

type SearchBarDispatchProps = {
    onSearchRequestSend: (searchString: string) => void;
}

type SearchBarProps = SearchBarDispatchProps & SearchBarStateProps;

type SearchBarState = {
    searchString: string;
};

export class SearchBar extends React.Component<SearchBarProps, SearchBarState>{
    state: SearchBarState = {
        searchString: ''
    };

    static defaultProps: Partial<SearchBarProps> = {
        onSearchRequestSend: () => {}
    };

    handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const searchTerm = this.state.searchString;
        const { onSearchRequestSend } = this.props;
        onSearchRequestSend(searchTerm);
    };

    handleSearchStringChange: React.ChangeEventHandler<HTMLInputElement> = event => {
        this.setState({
            ...this.state,
            searchString: event.target.value
        })
    };

    render(){
        return (
          <form onSubmit={this.handleSubmit} className={'searchForm'}>
              <input
                  type={'search'}
                  name=''
                  placeholder={'Enter search string'}
                  onChange={this.handleSearchStringChange}
                  value={this.state.searchString}
              />
              <button type='submit' >
                  SEARCH
              </button>
          </form>
        )
    }
}

const mapStateToProps = (state: State) => {
    return {
        requestState: state.searchRequest
    }
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        onSearchRequestSend: (searchString: string) => {
            dispatch(searchRequestSent(searchString));
        }
    }
};

export const SearchBarContainer = connect<
    SearchBarStateProps,
    SearchBarDispatchProps
    >(mapStateToProps, mapDispatchToProps)(SearchBar);
