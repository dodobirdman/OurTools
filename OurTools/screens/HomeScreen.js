import { View, Text, FlatList } from 'react-native';

import ToolCard from '../components/ToolCard';
import { styles } from '../styles/styles';

// Dummy-data til værktøjslisten
const tools = [
  {
    id: '1',
    name: 'Hammer Drill',
    icon: '🔨',
    owner: 'Martin',
    distance: '1.2 km away',
    availability: 'Available today',
    price: '50 kr',
  },
  {
    id: '2',
    name: 'Circular Saw',
    icon: '🪚',
    owner: 'Sofie',
    distance: '0.8 km away',
    availability: 'Available today',
    price: '40 kr',
  },
  {
    id: '3',
    name: 'Screwdriver Set',
    icon: '🪛',
    owner: 'Jonas',
    distance: '0.5 km away',
    availability: 'Available tomorrow',
    price: '20 kr',
  },
  {
    id: '4',
    name: 'Pressure Washer',
    icon: '💦',
    owner: 'Emma',
    distance: '2.1 km away',
    availability: 'Available this weekend',
    price: '80 kr',
  },
];

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>

      {/* Renders hele værktøjslisten med overskrift øverst */}
      <FlatList
        data={tools}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}

        ListHeaderComponent={
          <View>
            <Text style={styles.welcomeTitle}>
              Find a tool
            </Text>

            <Text style={styles.subtitle}>
              Borrow tools from people near you.
            </Text>

            <Text style={styles.sectionTitle}>
              Tools nearby
            </Text>
          </View>
        }

        /* Klik på et kort sender brugeren til værktøjets detaljeside */
        renderItem={({ item }) => (
          <ToolCard
            tool={item}
            onPress={() =>
              navigation.navigate('Tool Details', {
                tool: item,
              })
            }
          />
        )}
      />

    </View>
  );
}