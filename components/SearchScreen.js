import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Modal,
} from "react-native";
import { products } from "../data/data"; // Sửa đường dẫn import
import Icon from "react-native-vector-icons/MaterialIcons";
import ProductCard from "./ProductCard";

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState(""); // Để trống ban đầu
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  // Khởi tạo danh sách sản phẩm khi component mount
  useEffect(() => {
    if (products) {
      setFilteredProducts(products);
      console.log("Products loaded:", products); // Debug
    } else {
      console.error("Products data is undefined");
      setFilteredProducts([]);
    }
  }, []);

  // Hàm tìm kiếm sản phẩm
  const handleSearch = (query) => {
    setSearchQuery(query);
    if (!products) {
      console.error("Products data is undefined");
      setFilteredProducts([]);
      return;
    }
    if (query.trim() === "") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  };

  const renderProduct = ({ item }) => (
    <ProductCard
      product={{
        image: item.image,
        name: item.name,
        details: `${item.weight}, Price`,
        price: item.price.toFixed(2),
      }}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
      </View>

      {/* Thanh tìm kiếm */}
      <View style={styles.searchContainer}>
        <View style={styles.searchBarWrapper}>
          <Icon name="search" size={20} color="#666" style={styles.searchIcon} />
          <TextInput
            style={styles.searchBar}
            placeholder="Search products..."
            value={searchQuery}
            onChangeText={handleSearch}
          />
          {searchQuery.length > 0 && (
            <TouchableOpacity
              style={styles.clearIcon}
              onPress={() => handleSearch("")}
            >
              <Icon name="close" size={20} color="#666" />
            </TouchableOpacity>
          )}
        </View>
        <TouchableOpacity
          style={styles.filterButton}
          onPress={() => setModalVisible(true)}
        >
          <Icon name="filter-list" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Danh sách sản phẩm */}
      <FlatList
        data={filteredProducts}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.productList}
      />

      {/* Modal Lọc */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Filters</Text>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Icon name="close" size={24} color="#000" />
              </TouchableOpacity>
            </View>
            <View style={styles.modalSection}>
              <Text style={styles.modalSectionTitle}>Categories</Text>
              <View style={styles.modalOption}>
                <View style={[styles.checkbox, styles.checkboxSelected]}>
                  <Icon name="check" size={16} color="#fff" />
                </View>
                <Text style={styles.checkboxText}>Eggs</Text>
              </View>
              <View style={styles.modalOption}>
                <View style={styles.checkbox} />
                <Text style={styles.checkboxText}>Noodles & Pasta</Text>
              </View>
              <View style={styles.modalOption}>
                <View style={styles.checkbox} />
                <Text style={styles.checkboxText}>Chips & Crisps</Text>
              </View>
              <View style={styles.modalOption}>
                <View style={styles.checkbox} />
                <Text style={styles.checkboxText}>Fast Food</Text>
              </View>
            </View>
            <View style={styles.modalSection}>
              <Text style={styles.modalSectionTitle}>Brand</Text>
              <View style={styles.modalOption}>
                <View style={styles.checkbox} />
                <Text style={styles.checkboxText}>Individual Collection</Text>
              </View>
              <View style={styles.modalOption}>
                <View style={[styles.checkbox, styles.checkboxSelected]}>
                  <Icon name="check" size={16} color="#fff" />
                </View>
                <Text style={styles.checkboxText}>Cocola</Text>
              </View>
              <View style={styles.modalOption}>
                <View style={styles.checkbox} />
                <Text style={styles.checkboxText}>Ifad</Text>
              </View>
              <View style={styles.modalOption}>
                <View style={styles.checkbox} />
                <Text style={styles.checkboxText}>Kazi Farmas</Text>
              </View>
            </View>
            <TouchableOpacity
              style={styles.applyButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.applyButtonText}>Apply Filter</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="store" size={24} color="#28a745" />
          <Text style={styles.navTextActive}>Shop</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="explore" size={24} color="#666" />
          <Text style={styles.navText}>Explore</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="shopping-cart" size={24} color="#666" />
          <Text style={styles.navText}>Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="favorite" size={24} color="#666" />
          <Text style={styles.navText}>Favourite</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="person" size={24} color="#666" />
          <Text style={styles.navText}>Account</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  headerTime: {
    fontSize: 16,
    color: "#666",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  searchBarWrapper: {
    flex: 1,
    position: "relative",
  },
  searchBar: {
    flex: 1,
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 40,
    backgroundColor: "#fff",
    fontSize: 16,
  },
  searchIcon: {
    position: "absolute",
    left: 10,
    top: 10,
  },
  clearIcon: {
    position: "absolute",
    right: 10,
    top: 10,
  },
  filterButton: {
    marginLeft: 10,
    padding: 5,
  },
  productList: {
    paddingBottom: 20,
    paddingHorizontal: 5,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "flex-end",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: "50%",
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  modalSection: {
    marginBottom: 20,
  },
  modalSectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  modalOption: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: "#666",
    borderRadius: 5,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  checkboxSelected: {
    backgroundColor: "#28a745",
  },
  checkboxText: {
    fontSize: 16,
    color: "#000",
  },
  applyButton: {
    backgroundColor: "#28a745",
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: "center",
  },
  applyButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 15,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    elevation: 5,
  },
  navItem: {
    alignItems: "center",
  },
  navText: {
    fontSize: 12,
    color: "#666",
    marginTop: 3,
  },
  navTextActive: {
    fontSize: 12,
    color: "#28a745",
    marginTop: 3,
    fontWeight: "bold",
  },
});

export default SearchScreen;