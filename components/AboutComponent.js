import React, { Component } from 'react';
import { ScrollView, Text, FlatList } from 'react-native';
import { Card, ListItem } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';

//connecting redux stored state to props. Only connecting stored state we need--parnters

const mapStateToProps = state => {
    return {
        partners: state.partners
    };
}

function Mission() {
        return (
                <Card
                    title='Our Mission'>
                    <Text>
                        We present a curated database of the best campsites in the vast woods and backcountry of the World Wide Web Wilderness. We increase access to adventure for the public while promoting safe and respectful use of resources. The expert wilderness trekkers on our staff personally verify each campsite to make sure that they are up to our standards. We also present a platform for campers to share reviews on campsites they have visited with each other.
                    </Text>
                </Card>
        );
}

class About extends Component {

    static navigationOptions = {
        title: 'About Us'
    }

    render() {
        const renderPartner = ({ item }) => {
            return (
                <ListItem
                    title={item.name}
                    subtitle={item.description}
                    leftAvatar={{ source: {uri: baseUrl + item.image}}}
                />
            );
        };

        return (
            <ScrollView>
                <Mission />
                <Card
                    title='Community Partners'>
                        <FlatList
                            data={this.props.partners.partners}  //first partner refers to entire state and the second partners refers to the partners data array
                            renderItem={renderPartner}
                            keyExtractor={item => item.id.toString()}
                        />
                </Card>
            </ScrollView>
        );
    }
}

export default connect(mapStateToProps)(About); //this connects the About component to the partners state section we defined in the mapstatetoprops function