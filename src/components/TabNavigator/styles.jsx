import { StyleSheet } from "react-native";
import {
  fontPercentage,
  horizontalScale,
  verticalScale,
} from "../../helpers/responsiveSize";

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "#fff",
    borderTopColor: "#ccc",
    borderTopWidth: 1,
    height: verticalScale(71), // Customize the tab bar height
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: horizontalScale(20),
  },
  tabBarLabel: {
    opacity: 1,
    fontFamily: "BalooBhaijaan2-Bold", // Customize the font family
    fontSize: fontPercentage(10), // Customize the font size
  },
  tabBarIcon: {
    width: horizontalScale(24), // Customize the icon width
    height: verticalScale(24), // Customize the icon height
  },
  activeTabLabel: {
    color: "#fff", // Customize the active label color
  },
  inactiveTabLabel: {
    color: "#5D0E23", // Customize the inactive label color
  },
  activeTabIcon: {
    tintColor: "fff", // Customize the active icon color
  },
  inactiveTabIcon: {
    tintColor: "#5D0E23", // Customize the inactive icon color
  },

  tabBarItem: {
    height: verticalScale(45),
    width: horizontalScale(75),
    borderRadius: verticalScale(50),
    borderWidth: verticalScale(2),
    alignItems: "center",
    justifyContent: "center",
  },
});

export default styles;
