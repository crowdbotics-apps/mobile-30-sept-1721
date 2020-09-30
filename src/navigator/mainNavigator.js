import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen0319Navigator from '../features/BlankScreen0319/navigator';
import BlankScreen1318Navigator from '../features/BlankScreen1318/navigator';
import BlankScreen1317Navigator from '../features/BlankScreen1317/navigator';
import BlankScreen0316Navigator from '../features/BlankScreen0316/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen0319: { screen: BlankScreen0319Navigator },
BlankScreen1318: { screen: BlankScreen1318Navigator },
BlankScreen1317: { screen: BlankScreen1317Navigator },
BlankScreen0316: { screen: BlankScreen0316Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
