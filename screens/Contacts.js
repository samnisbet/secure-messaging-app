import React, { useState, useEffect } from "react";
import {StyleSheet,Text, SafeAreaView,
  ActivityIndicator,
} from "react-native";
import List from "../components/List.js";
import SearchBar from "../components/SearchBar.js";

const Contacts = () => {
  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);
  const [fakeData, setFakeData] = useState();

  // get data from the fake api endpoint
  useEffect(() => {
    const getData = async () => {
      const apiResponse = await fetch(
        "https://raw.githubusercontent.com/samnisbet/secure-messaging-app/main/db.json"
      );
      const data = await apiResponse.json();
      setFakeData(data);
    };
    getData();
  }, []);

  return (
    <SafeAreaView style={styles.root}>
      {!clicked && <Text style={styles.title}></Text>}
      <SearchBar
        searchPhrase={searchPhrase}
        setSearchPhrase={setSearchPhrase}
       
      />
      { (

          <List
            searchPhrase={searchPhrase}
            data={fakeData}
          />

      )}
    </SafeAreaView>
  );
};

export default Contacts;

const styles = StyleSheet.create({
  root: {
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    width: "100%",
    marginTop: 3,
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: "10%",
  },
});