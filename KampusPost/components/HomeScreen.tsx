import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const HomeScreen = () => {
  const [postlar, setPostlar] = useState<Post[]>([]);
  const [yukleniyor, setYukleniyor] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => {
        setPostlar(data);
        console.log("Gelen Postlar:", data.length);
        setYukleniyor(false);
      })
      .catch((err) => {
        console.error(err);
        setYukleniyor(false);
      });
  }, []);

  if (yukleniyor) {
    return <ActivityIndicator size="large" style={{flex: 1}} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={postlar}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.listeElemani}>
            <Text style={styles.baslik}>{item.title}</Text>
            <Text style={styles.icerik}>{item.body}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#003af8ff',
  },
  listeElemani: {
    padding: 15,
    borderBottomWidth: 1, 
    borderBottomColor: '#f0e11bff',
  },
  baslik: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    textTransform: 'capitalize',
  },
  icerik: {
    fontSize: 14,
    color: '#fdd804ff',
  }
});

export default HomeScreen;
