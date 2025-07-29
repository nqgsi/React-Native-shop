import ProductItem from "@/components/ProductItem";
import { prod } from "@/data/product";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
export default function Index() {
  return (
    <ScrollView>
      {" "}
      <View style={{ backgroundColor: "lightblue" }}>
        <View
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
            }}
          >
            cookies & beyond
          </Text>
          <Text>where cookies maniacs gather</Text>
          <Image
            source={{
              uri: "https://img.ankorstore.com/products/images/2111674-47e8e94fff1fc3.jpg?auto=format%2Ccompress&fm=pjpg&dpr=2&h=200&w=200&fit=crop&crop=faces&force_format=webp",
            }}
            style={{ width: 150, height: 150 }}
          />
          <View style={styles.row}>
            <ProductItem
              cookieName={prod[0].pname}
              cookiePrice={prod[0].price}
              cookieUrl={prod[0].image}
            />
            <ProductItem
              cookieName={prod[1].pname}
              cookiePrice={prod[1].price}
              cookieUrl={prod[1].image}
            />
          </View>
          <View style={styles.row}>
            <ProductItem
              cookieName={prod[2].pname}
              cookiePrice={prod[2].price}
              cookieUrl={prod[2].image}
            ></ProductItem>
            <ProductItem
              cookieName={prod[3].pname}
              cookiePrice={prod[3].price}
              cookieUrl={prod[3].image}
            ></ProductItem>
          </View>

          {/* <View style={styles.imageRow}>
        <Image
          source={{
            uri: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ6XxzWY7xzhMmyWCzDCmtmCjTjWR-tvJoxQ&s",
          }}
          style={styles.image2}
        />
        <Image
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrbFD5sfPys6WJqOzYQnS_kKaZI0JqIMBJZQ&s",
          }}
          style={styles.image2}
        />
      </View>

      <View style={styles.imageRow}>
        <Text style={styles.fontC}>Regualar cookies</Text>
        <Text style={styles.fontC}>Rainbow cookies</Text>
      </View>
      <View style={styles.imageRow}>
        <Text style={styles.fontC}>Price:2.99</Text>
        <Text style={styles.fontC}>Price:4.99</Text>
      </View>
      <View style={styles.imageRow}>
        <Text style={{ color: "red" }}>Limited edition!!!</Text>
      </View> */}
        </View>
      </View>
    </ScrollView>
  );
}

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
    justifyContent: "space-around",
    alignItems: "center",
  },
});
