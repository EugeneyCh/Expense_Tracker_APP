import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import RecentExpenses from "./screens/RecentExpenses";
import AllExpenses from "./screens/AllExpenses";
import { NavigationContainer } from "@react-navigation/native";
import ManageExpense from "./screens/ManageExpense";

const Stack = createNativeStackNavigator();
const BottonTabs = createBottomTabNavigator();

function ExpensesOverview() {
  return (
    <BottonTabs.Navigator>
      <BottonTabs.Screen name="RecentExpenses" component={RecentExpenses} />
      <BottonTabs.Screen name="AllExpenses" component={AllExpenses} />
    </BottonTabs.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="ExpensesOverview" component={ExpensesOverview} />
          <Stack.Screen name="ManageExpense" component={ManageExpense} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
