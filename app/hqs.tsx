import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { ScrollView } from "react-native";
import styled from "styled-components/native";

export default function HQsScreen() {
  const hqs = [
    {
      id: 1,
      titulo: "Batman: A Piada Mortal- Vol. 1",
      autor: "por Alan Moore",
      preco: "R$ 53.92",
      imagem: require("../assets/images/hqPiadaMortal.png"),
    },
    {
      id: 2,
      titulo: "Watchmen (DC de Bolso)",
      autor: "por Dave Gibbons",
      preco: "R$ 60.90",
      imagem: require("../assets/images/hqWatchmen.png"),
    },
    {
      id: 3,
      titulo: "Milênio (grandes Eventos dc)",
      autor: "por Steve Englehart",
      preco: "R$ 47.50",
      imagem: require("../assets/images/hqMilenio.png"),
    },
    {
      id: 4,
      titulo: "Batman: Veneno",
      autor: "por Denny O'Neil...",
      preco: "R$ 42.80",
      imagem: require("../assets/images/hqBatmanVeneno.png"),
    },
  ];

  return (
    <Container>
      {/* Topo */}
      <Header>
        <Ionicons name="menu-outline" size={28} color="#000" />
        <HeaderTitle>HQ'S</HeaderTitle>
        <Ionicons name="cart-outline" size={26} color="#000" />
        <Ionicons name="search-outline" size={26} color="#000" />
      </Header>

      {/* Filtros */}
      <FilterContainer horizontal showsHorizontalScrollIndicator={false}>
        <FilterButton>
          <FilterText>Todos</FilterText>
        </FilterButton>
        <FilterButton>
          <FilterText>Boxes</FilterText>
        </FilterButton>
        <FilterButtonActive>
          <FilterTextActive>DC Comics</FilterTextActive>
        </FilterButtonActive>
        <FilterButton>
          <FilterText>Marvel Comics</FilterText>
        </FilterButton>
      </FilterContainer>

      {/* Seção */}
      <Section>
        <SectionTitleContainer>
          <SectionBar />
          <SectionTitle>DC Comics</SectionTitle>
        </SectionTitleContainer>

        <FilterButtonOutline>
          <FilterButtonText>Filter</FilterButtonText>
          <Ionicons name="filter-outline" size={16} color="#2C2A8F" />
        </FilterButtonOutline>
      </Section>

      {/* Livros */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <BooksGrid>
          {hqs.map((hq) => (
            <BookCard key={hq.id}>
              <BookImage source={hq.imagem} />
              <BookTitle>{hq.titulo}</BookTitle>
              <BookAuthor>{hq.autor}</BookAuthor>
              <BookPrice>{hq.preco}</BookPrice>
            </BookCard>
          ))}
        </BooksGrid>
      </ScrollView>
    </Container>
  );
}

/* 💅 ESTILOS */

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
  padding: 16px;
`;

const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const HeaderTitle = styled.Text`
  font-size: 18px;
  font-weight: 600;
  padding: 10px;
`;

const FilterContainer = styled.ScrollView`
  margin-top: 16px;
  flex-direction: row;
`;

const FilterButton = styled.TouchableOpacity`
  padding: 8px 16px;
  border-radius: 20px;
  border: 1px solid #2c2a8f;
  margin-right: 8px;
  justify-content: center;
  align-items: center;
`;

const FilterButtonActive = styled.TouchableOpacity`
  padding: 14px 16px;
  border-radius: 20px;
  background-color: #2c2a8f;
  margin-right: 8px;
  justify-content: center;
  align-items: center;
`;

const FilterText = styled.Text`
  font-size: 16px;
  color: #000;
  text-align: center;
`;

const FilterTextActive = styled.Text`
  font-size: 14px;
  color: #fff;
  text-align: center;
`;

const Section = styled.View`
  margin-top: 24px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  padding-vertical: 8px;
  
`;

const SectionTitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const SectionBar = styled.View`
  width: 4px;
  height: 20px;
  background-color: #2c2a8f;
  border-radius: 2px;
  margin-right: 8px;
`;

const SectionTitle = styled.Text`
  font-size: 18px;
  font-weight: 600;
  color: #000;
`;

const FilterButtonOutline = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  border: 1px solid #2c2a8f;
  padding: 6px 12px;
  border-radius: 8px;
`;

const FilterButtonText = styled.Text`
  color: #2c2a8f;
  font-weight: 500;
  font-size: 14px;
  margin-right: 6px;
`;

const BooksGrid = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 18px;
  row-gap: 28px;
`;

const BookCard = styled.View`
  width: 46%;
  margin-bottom: 24px;
`;

const BookImage = styled.Image`
  width: 100%;
  height: 250px;
  border-radius: 8px;
`;

const BookTitle = styled.Text`
  font-size: 18px;
  font-weight: 600;
  margin-top: 8px;
  color: #000;
`;

const BookAuthor = styled.Text`
  font-size: 14px;
  color: #555;
  margin-top: 6px;
`;

const BookPrice = styled.Text`
  font-size: 18px;
  color: #2c2a8f;
  font-weight: 700;
  margin-top: 8px;
`;

