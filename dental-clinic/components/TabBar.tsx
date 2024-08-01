import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import AntDesign from "@expo/vector-icons/AntDesign";
import { MaterialIcons } from "@expo/vector-icons";

type IconProps = {
  color: string;
};

const icons: Record<string, (props: IconProps) => JSX.Element> = {
  home: (props: IconProps) => <AntDesign name="home" size={26} {...props} />,
  inventory: (props: IconProps) => (
    <MaterialIcons name="inventory" size={26} {...props} />
  ), // Example icon for inventory
  addUser: (props: IconProps) => (
    <AntDesign name="adduser" size={26} {...props} />
  ),
};
const primaryColor = "#2D9596";
const greyColor = "gray";

const TabBar: React.FC<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  return (
    <View style={styles.tabbar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        console.log("route name: ", route.name);
        if (["index", "register"].includes(route.name)) return null;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        const IconComponent = icons[route.name as keyof typeof icons];

        return (
          <TouchableOpacity
            key={route.name}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tabbarItem}
          >
            {IconComponent ? (
              <IconComponent color={isFocused ? primaryColor : "black"} />
            ) : typeof label === "string" ? (
              <Text style={{ color: isFocused ? primaryColor : "black" }}>
                {label}
              </Text>
            ) : (
              label({
                focused: isFocused,
                color: isFocused ? primaryColor : greyColor,
                position: "below-icon",
                children: route.name,
              })
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  tabbar: {
    position: "absolute",
    bottom: 25,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    marginHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 25,
    borderCurve: "continuous",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 10,
    shadowOpacity: 0.1,
  },
  tabbarItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default TabBar;
