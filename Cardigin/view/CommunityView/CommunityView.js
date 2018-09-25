import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import events from "../../fakeData/events";
import EventDetail from './EventDetail';

class CommunityView extends Component {

    // a class-level property; initial empty state of the component
    // so when the component first renders, it uses this empty state
    state = { events: [] };

    // executed right before the component is about to be rendered
    // to the screen
    componentWillMount() {
        // update the component state
        this.setState({ events: events });
    }

    // helper method to generate list of event details
    renderEvents() {
        // id as key since it doesn't change over renders.
        // pass each event down to eventdetail as a prop
        console.log("Rendering events.");
        return this.state.events.map(event =>
            <EventDetail key={event.id} event={event} />
        );
    }


    render() {
        console.log(this.state);

        return (
            <ScrollView>
                {this.renderEvents()}
            </ScrollView>
        );
    }
}

export default CommunityView;
