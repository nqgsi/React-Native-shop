import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
interface prp {
  cookieName: string;
  cookiePrice: number;
  cookieUrl: string;
}
export const ProductItem = (prop: prp) => {
  return (
    <View style={styles.imageRow}>
      <Image
        source={{
          uri: prop.cookieUrl,
        }}
        style={styles.image2}
      />
      <Text style={styles.fontC}>{prop.cookieName}</Text>
      <Text style={styles.fontC}>{prop.cookiePrice}</Text>
    </View>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  image2: {
    width: 150,
    height: 150,
    padding: 50,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  imageRow: {
    flexDirection: "column",
    justifyContent: "space-around",
    width: "60%",

    marginTop: 40,
  },
  fontC: {
    color: "blue",
    fontFamily: "monospace",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});
