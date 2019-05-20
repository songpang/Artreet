import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  Container,
  Content,
  Thumbnail,
  Header,
  Form,
  Item,
  Input,
  Label
} from "native-base";
import { ScrollView } from "react-native-gesture-handler";

export default class ProfileComponent extends Component {
  render() {
    return (
      <Container>
        <Content style={style.container}>
          <View style={style.profileHeader}>
            <Thumbnail
              large
              source={{ uri: "https://steemitimages.com/u/anpigon/avatar" }}
              style={{ backgroundColor: "black", marginBottom: 15 }}
            />
            <Text style={{ fontSize: 15 }}>프로필변경</Text>
          </View>
          <View style={style.profileContent}>
            <View style={style.profileContentLeft}>
              <Text style={style.label}>이름</Text>
              <Text style={style.label}>이메일</Text>
              <Text style={style.label}>전화번호</Text>
              <Text style={style.label}>보유금액</Text>
              <Text style={style.label}>보유금액</Text>
              <Text style={style.label}>보유금액</Text>
              <Text style={style.label}>보유금액</Text>
            </View>
            <View style={style.profileContentRight}>
              <Text style={style.label}>김김김</Text>
              <Text style={style.label}>kim@gmail.com</Text>
              <Text style={style.label}>010-1234-5678</Text>
              <Text style={style.label}>10,000원</Text>
              <Text style={style.label}>보유금액</Text>
              <Text style={style.label}>보유금액</Text>
              <Text style={style.label}>보유금액</Text>
            </View>
          </View>
          <View style={style.profileFooter}>
            <View>
              <Text style={style.label}>즐겨찾는 아티스트</Text>
            </View>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <View style={{ flexDirection: "row" }}>
                <Thumbnail
                  source={{ uri: "https://steemitimages.com/u/anpigon/avatar" }}
                  style={{ backgroundColor: "black", margin: 5 }}
                />
                <Thumbnail
                  source={{ uri: "https://steemitimages.com/u/anpigon/avatar" }}
                  style={{ backgroundColor: "black", margin: 5 }}
                />
                <Thumbnail
                  source={{ uri: "https://steemitimages.com/u/anpigon/avatar" }}
                  style={{ backgroundColor: "black", margin: 5 }}
                />
                <Thumbnail
                  source={{ uri: "https://steemitimages.com/u/anpigon/avatar" }}
                  style={{ backgroundColor: "black", margin: 5 }}
                />
                <Thumbnail
                  source={{ uri: "https://steemitimages.com/u/anpigon/avatar" }}
                  style={{ backgroundColor: "black", margin: 5 }}
                />
                <Thumbnail
                  source={{ uri: "https://steemitimages.com/u/anpigon/avatar" }}
                  style={{ backgroundColor: "black", margin: 5 }}
                />
              </View>
            </ScrollView>
          </View>
        </Content>
      </Container>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1
  },
  label: {
    marginTop: 15,
    fontSize: 15
  },
  profileHeader: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 20
  },
  profileContent: {
    flex: 3,
    flexDirection: "row"
  },
  profileContentLeft: {
    paddingLeft: 20,
    flex: 1
  },
  profileContentRight: {
    paddingLeft: 20,
    flex: 3
  },
  profileFooter: {
    flex: 1,
    padding: 20
  }
});
