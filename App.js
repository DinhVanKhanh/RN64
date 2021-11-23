// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */

// import React from 'react';
// import type {Node} from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// const Section = ({children, title}): Node => {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// };

// const App: () => Node = () => {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   return (
//     <SafeAreaView style={backgroundStyle}>
//       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
//       <ScrollView
//         contentInsetAdjustmentBehavior="automatic"
//         style={backgroundStyle}>
//         <Header />
//         <View
//           style={{
//             backgroundColor: isDarkMode ? Colors.black : Colors.white,
//           }}>
//           <Section title="Step One">
//             Edit <Text style={styles.highlight}>App.js</Text> to change this
//             screen and then come back to see your edits.
//           </Section>
//           <Section title="See Your Changes">
//             <ReloadInstructions />
//           </Section>
//           <Section title="Debug">
//             <DebugInstructions />
//           </Section>
//           <Section title="Learn More">
//             Read the docs to discover what to do next:
//           </Section>
//           <LearnMoreLinks />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

// export default App;

// import React from 'react';
// import { Text, View } from 'react-native';
// import { Body } from './layouts/Body';
// const YourApp = () => {
//   return (
//     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//       <Text>
//         Try editing me!
//       </Text>
//       <Body></Body>
//     </View>
//   );
// }

// export default YourApp;

import React, {Component, useState} from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet,
    ScrollView,
    FlatList,
    RefreshControl,
    TextInput,
    Keyboard,
} from 'react-native';
import Button from './layouts/Button'; // Import a component from another file
import CategoryListItem from './components/CategoryListItem'; // Import a component from another file
import ImgAnket from './assets/girl.png';
import axios from 'axios';
import Input from './Input';
import {Auth} from './src/components/Auth/Auth.js';
import {ChangeInfo} from './src/components/ChangeInfo/ChangeInfo.js';
import {History} from './src/components/History/History.js';
import Main from './src/components/Main/Main';
class App extends Component {
    // const App = () => {
    constructor(props) {
        super(props);
        this.state = {
            categories: [
                {id: 1, name: '1a'},
                {id: 2, name: '2b'},
                {id: 3, name: '3c'},
            ],
            refreshing: false,
            page: 1,
            name: 'ten',
        };
    }

    handleNameChange(name) {
        this.setState({name});
    }

    LoadData = async () => {
        try {
            const response = await axios.get(
                'http://192.168.90.49:8383/Contain/test/json/?trang=' + page,
            );
            //   alert(response.data);
            // console.log(response.data.categories);
            let categoriesPage = this.state.categories.concat(
                response.data.categories,
            );
            this.setState({
                categories: categoriesPage,
                page: this.state.page + 1,
                refreshing: false,
            });
        } catch (error) {
            // handle error
            console.log(error.message);
        }
    };

    render() {
        const {categories} = this.state;
        // return <Button color="red" />;
        return (
            // <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            /* {categories.map(category => (
			<CategoryListItem key={category.id} category = {category}></CategoryListItem>
			))} */
            // <View>
            //   {/* <FlatList
            //     refreshControl={
            //       <RefreshControl
            //         refreshing={this.state.refreshing}
            //         onRefresh={this.LoadData.bind(this)}
            //       />
            //     }
            //     data={categories}
            //     renderItem={({item}) => <CategoryListItem category={item} />}
            //     keyExtractor={item => `${item.id}`}
            //     contentContainerStyle={{paddingLeft: 16, paddingRight: 16}}
            //   /> */}
            // </View>
            // <Input />
            <Main />
            // </ScrollView>
        );
    }

    // async componentDidMount() {
    //   try {
    //     const response = await axios.get(
    //       'http://192.168.90.49:8383/Contain/test/json/?trang=0',
    //     );
    //     //   alert(response.data);
    //     console.log(response.data.categories);
    //     this.setState({
    //       categories: response.data.categories,
    //     });
    //   } catch (error) {
    //     // handle error
    //     alert(error.message);
    //   }
    // }
}

const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
    img: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    textInput: {
        borderColor: '#CCCCCC',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        height: 50,
        fontSize: 25,
        paddingLeft: 20,
        paddingRight: 20,
    },
});
export default App;
