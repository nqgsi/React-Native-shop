import { Image, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
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
        style={{ width: 100, height: 100 }}
      />
      <View style={styles.imageRow}>
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
        <Text style={{ color: "red" }}>Limttid edittion!!!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image2: {
    width: 40,
    height: 40,
    padding: 50,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  imageRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "60%",
    paddingHorizontal: 40,
    marginTop: 40,
  },
  fontC: {
    color: "blue",
  },
});
