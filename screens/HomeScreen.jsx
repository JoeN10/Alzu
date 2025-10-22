 import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, StatusBar,} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
const HomeScreen = ({ navigation }) => {
  const [MenuItems, setMenuItemScreen] = useState([ navigation]);

  // Add data for demonstration
  React.useEffect(() => {
    setMenuItemScreen([
      {
        id: '1',
        name: <Text>Garlic Bread</Text>,
        description:<Text>Freshly baked bread with garlic butter</Text>,
        course: <Text>starter'</Text>,
        price: <Text>R45</Text>,
      },
      {
        id: '2',
        name: 'Grilled Steak',
        description: 'Premium beef steak with vegetables',
        course: 'main',
        price: 'R185',
      },
      {
        id: '3',
        name: 'Chocolate Cake',
        description: 'Rich chocolate cake with ice cream',
        course: 'dessert',
        price: '65',
      },
    ]);
  }, []);

  const MenuItemScreen= (newItem) => {
    setMenuItemScreen(prevItems => [...prevItems, { ...newItem, id: Date.now().toString() }]);
  };

  const getCourseDisplayName = (course) => {
    const courseNames = {
      starter: 'Starter',
      main: 'Main Course',
      dessert: 'Dessert',
    };
    return courseNames[course] || course;
  };

  const MenuItem= ({ item }) => (
    <View style={styles.menuItem}>
      <View style={styles.menuItemHeader}>
        <Text style={styles.dishName}>{item.name}</Text>
        <Text style={styles.price}>R{item.price}</Text>
      </View>
      <Text style={styles.course}>{getCourseDisplayName(item.course)}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#004D40" />
      
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.title}>Alzu Restaurant</Text>
        <Text style={styles.subtitle}>Fine Dining Experience</Text>
      </View>

      {/* Menu Summary */}
      <View style={styles.summaryCard}>
        <Text style={styles.summaryTitle}>Menu Overview</Text>
        <Text style={styles.totalItems}>Total Items: {menuItems.length}</Text>
      </View>

      {/* Navigation Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={styles.primaryButton}
          onPress={() => navigation.navigate('MenuItemScreen', { MenuItemScreen })}
        >
          <Text style={styles.buttonText}>Add Menu Item</Text>
        </TouchableOpacity>
      </View>

      {/* Menu Items List */}
     <View>
      {menuItems && (
        <FlatList
         data={menuItems}
         renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
          </View>
         )}
         keyExtractor={(item) => item.id}
         showsVerticalScrollIndicator={false}
        />
      )};
   </View>
 </SafeAreaView>
 )};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F7',
  },
  header: {
    backgroundColor: '#004D40',
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#80CBC4',
    fontWeight: '600',
  },
  summaryCard: {
    backgroundColor: '#FFFFFF',
    margin: 16,
    padding: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  summaryTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#004D40',
    marginBottom: 8,
  },
  totalItems: {
    fontSize: 16,
    color: '#37474F',
    fontWeight: '600',
  },
  buttonContainer: {
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  primaryButton: {
    backgroundColor: '#004D40',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  menuSection: {
    flex: 1,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#004D40',
    marginBottom: 16,
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 40,
  },
  emptyText: {
    fontSize: 18,
    color: '#37474F',
    fontWeight: '600',
    marginBottom: 8,
  },
  emptySubtext: {
    fontSize: 14,
    color: '#80CBC4',
    textAlign: 'center',
  },
  menuItem: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  menuItemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  dishName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#004D40',
    flex: 1,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#004D40',
    marginLeft: 8,
  },
  course: {
    fontSize: 14,
    color: '#80CBC4',
    fontWeight: '600',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#37474F',
    lineHeight: 20,
  },
});

export default HomeScreen;