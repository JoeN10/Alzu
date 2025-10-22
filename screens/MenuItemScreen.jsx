 import React, { useState } from 'react';
import {SafeAreaView,View,Text,TextInput,TouchableOpacity,StyleSheet,ScrollView,StatusBar,Alert,} from 'react-native';

const MenuItemScreen = ({ navigation, route }) => {
  const { MenuItemScreen} = route.params;
  
  const [dishName, setDishName] = useState('');
  const [description, setDescription] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');
  const [price, setPrice] = useState('');

  const courses = [
    { id: String, name: 'Starter' },
    { id: String, name: 'Main Course' },
    { id: String, name: 'Dessert' },
    { id: String, name: 'Beverage' },
  ];

  const handleSave = () => {
    // Validation
    if (!dishName.trim()) {
      Alert.alert('Error', 'Please enter a dish name');
      return;
    }
    if (!description.trim()) {
      Alert.alert('Error', 'Please enter a description');
      return;
    }
    if (!selectedCourse) {
      Alert.alert('Error', 'Please select a course');
      return;
    }
    if (!price.trim() || isNaN(price) || parseFloat(price) <= 0) {
      Alert.alert('Error', 'Please enter a valid price');
      return;
    }

    const newItem = {
      name: dishName.trim(),
      description: description.trim(),
      course: selectedCourse,
      price: parseFloat(price).toFixed(2),
    };

    MenuItem(newItem);
    
    Alert.alert('Success', 'Menu item added successfully!', [
      {
        text: 'OK',
        onPress: () => navigation.navigate(MenuItemScreen),
      },
    ]);
  };

  const handleCancel = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#004D40" />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        {/* Form Container */}
        <View style={styles.formContainer}>
          
          {/* Dish Name Input */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Dish Name *</Text>
            <TextInput
              style={styles.textInput}
              value={dishName}
              onChangeText={setDishName}
              placeholder="Enter dish name"
              placeholderTextColor="#80CBC4"
            />
          </View>

          {/* Description Input */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Description *</Text>
            <TextInput
              style={[styles.textInput, styles.textArea]}
              value={description}
              onChangeText={setDescription}
              placeholder="Enter dish description"
              placeholderTextColor="#80CBC4"
              multiline
              numberOfLines={3}
              textAlignVertical="top"
            />
          </View>

          {/* Course Selection */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Course *</Text>
            <View style={styles.courseContainer}>
              {courses.map((course) => (
                <TouchableOpacity
                  key={course.id}
                  style={[
                    styles.courseButton,
                    selectedCourse === course.id && styles.courseButtonSelected,
                  ]}
                  onPress={() => setSelectedCourse(course.id)}
                >
                  <Text
                    style={[
                      styles.courseButtonText,
                      selectedCourse === course.id && styles.courseButtonTextSelected,
                    ]}
                  >
                    {course.name}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Price Input */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Price (R) *</Text>
            <TextInput
              style={styles.textInput}
              value={price}
              onChangeText={setPrice}
              placeholder="0.00"
              placeholderTextColor="#80CBC4"
              keyboardType="decimal-pad"
            />
          </View>

        </View>

        {/* Action Buttons */}
        <View style={styles.buttonGroup}>
          <TouchableOpacity 
            style={[styles.button, styles.cancelButton]} 
            onPress={handleCancel}
          >
            <Text style={[styles.buttonText, styles.cancelButtonText]}>Cancel</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[styles.button, styles.saveButton]} 
            onPress={handleSave}
          >
            <Text style={[styles.buttonText, styles.saveButtonText]}>Save Item</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F7',
  },
  scrollContent: {
    flexGrow: 1,
    padding: 16,
  },
  formContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 20,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#004D40',
    marginBottom: 8,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#80CBC4',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    color: '#37474F',
    backgroundColor: '#FFFFFF',
  },
  textArea: {
    height: 80,
    textAlignVertical: 'top',
  },
  courseContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  courseButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#80CBC4',
    backgroundColor: '#FFFFFF',
  },
  courseButtonSelected: {
    backgroundColor: '#004D40',
    borderColor: '#004D40',
  },
  courseButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#004D40',
  },
  courseButtonTextSelected: {
    color: '#FFFFFF',
  },
  buttonGroup: {
    flexDirection: 'row',
    gap: 12,
  },
  button: {
    flex: 1,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  cancelButton: {
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#004D40',
  },
  saveButton: {
    backgroundColor: '#004D40',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  cancelButtonText: {
    color: '#004D40',
  },
  saveButtonText: {
    color: '#FFFFFF',
  },
});

export default MenuItemScreen;