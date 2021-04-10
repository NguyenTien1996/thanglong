import React from 'react';
import MyContext from './my-context';
import { api } from '../service/contentApi';

class ApiProvider extends React.Component {
  constructor() {
    super();
    this.state = {
      dataNews: []
    }
  }

  setStateAsync = (state) => {
    return new Promise(resolve => {
      this.setState(state, resolve);
    })
  }
  // partials
  async componentDidMount(){
    const data = await api.getDataListNews();
    console.log(data)
    await this.setStateAsync({...this.state, dataNews: data});
  }

  render() {
    return(
      <MyContext.Provider value={this.state.dataNews}>
        {this.props.children}
      </MyContext.Provider>
    );
  }
}
export default ApiProvider;