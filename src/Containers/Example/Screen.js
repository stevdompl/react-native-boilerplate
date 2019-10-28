import React from 'react'
import { Platform, Text, View, Button, ActivityIndicator, Image } from 'react-native'
import { connect } from 'react-redux'
import ExampleActions from 'src/Stores/Example/Actions'
import { liveInEurope } from 'src/Stores/Example/Selectors'
import styles from './Styles'
import { Images } from 'src/Theme'
import PropTypes from 'prop-types'

/**
 * This is an example of a container component.
 *
 * This screen displays a little help message and informations about a fake user.
 * Feel free to remove it.
 */

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\nCmd+D or shake for dev menu.',
  android: 'Double tap R on your keyboard to reload,\nShake or press menu button for dev menu.',
})

class ExampleScreen extends React.Component {
  componentDidMount() {
    this._fetchUser()
  }

  render() {
    return (
<<<<<<< HEAD:src/Containers/Example/Screen.js
      <View style={styles.container}>
=======
      <View
        style={[Helpers.fillColMain, Metrics.mediumHorizontalMargin, Metrics.mediumVerticalMargin]}
      >
>>>>>>> b8ddc3dda4cc8c86d0ab81121884a3cdb132e522:App/Containers/Example/ExampleScreen.js
        {this.props.userIsLoading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <View>
<<<<<<< HEAD:src/Containers/Example/Screen.js
            <View style={styles.logoContainer}>
              <Image style={styles.logo} source={Images.logo} resizeMode={'contain'} />
=======
            <View style={Style.logoContainer}>
              <Image style={Helpers.fullSize} source={Images.logo} resizeMode={'contain'} />
>>>>>>> b8ddc3dda4cc8c86d0ab81121884a3cdb132e522:App/Containers/Example/ExampleScreen.js
            </View>
            <Text style={styles.text}>To get started, edit App.js</Text>
            <Text style={styles.instructions}>{instructions}</Text>
            {this.props.userErrorMessage ? (
              <Text style={styles.error}>{this.props.userErrorMessage}</Text>
            ) : (
              <View>
                <Text style={styles.result}>
                  {"I'm a fake user, my name is "}
                  {this.props.user.name}
                </Text>
                <Text style={styles.result}>
                  {this.props.liveInEurope ? 'I live in Europe !' : "I don't live in Europe."}
                </Text>
              </View>
            )}
            <Button onPress={() => this._fetchUser()} title="Refresh" />
          </View>
        )}
      </View>
    )
  }

  _fetchUser() {
    this.props.fetchUser()
  }
}

ExampleScreen.propTypes = {
  user: PropTypes.object,
  userIsLoading: PropTypes.bool,
  userErrorMessage: PropTypes.string,
  fetchUser: PropTypes.func,
  liveInEurope: PropTypes.bool,
}

const mapStateToProps = (state) => ({
  user: state.example.user,
  userIsLoading: state.example.userIsLoading,
  userErrorMessage: state.example.userErrorMessage,
  liveInEurope: liveInEurope(state),
})

const mapDispatchToProps = (dispatch) => ({
  fetchUser: () => dispatch(ExampleActions.fetchUser()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExampleScreen)
