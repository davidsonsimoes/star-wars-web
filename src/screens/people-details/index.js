import React, {Component} from 'react';
import Header from '../../components/header';
import PeopleDetailsComponent from '../../components/people-details';

export class PeopleDetails extends Component {
  render() {
    const {
      location: {
        state: {
          people
        }
      }
    } = this.props;
    return (
      <>
        <Header />
        <PeopleDetailsComponent people={people} />
      </>
    )
  }
}

export default PeopleDetails;