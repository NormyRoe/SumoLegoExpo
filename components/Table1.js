import React, { useState } from "react";
import { FlatList, StyleProp, ViewStyle, StyleSheet } from "react-native";
import Table from "./Table";

const Table1 = ({ style }) => {
  const [table1FlatListData, setTable1FlatListData] = useState([<Table />]);

  return (
    <FlatList
      style={[styles.table1, style]}
      data={table1FlatListData}
      renderItem={({ item }) => item}
      contentContainerStyle={styles.table1FlatListContent}
    />
  );
};

const styles = StyleSheet.create({
  table1FlatListContent: {
    flexDirection: "column",
  },
  table1: {
    alignSelf: "stretch",
    flex: 1,
  },
});

export default Table1;
