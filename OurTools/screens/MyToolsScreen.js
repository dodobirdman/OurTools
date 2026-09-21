import { View, Text } from 'react-native';

import ButtonComponent from '../components/ButtonComponent';
import { styles } from '../styles/styles';

export default function MyToolsScreen() {
  return (
    <View style={styles.container}>

      <Text style={styles.pageTitle}>
        My Tools
      </Text>

      <Text style={styles.subtitle}>
        Manage the tools you are sharing with others.
      </Text>

      {/* Eksempel på et værktøj i listen */}
      <View style={styles.card}>

        <Text style={styles.toolIcon}>
          🔨
        </Text>

        <Text style={styles.cardTitle}>
          Hammer Drill
        </Text>

        <Text style={styles.cardText}>
          50 kr / day
        </Text>

        <Text style={styles.cardText}>
          Available today
        </Text>

        <ButtonComponent
          title="Edit Tool"
          onPress={() => alert('Not yet available')}
        />

      </View>

      <View style={styles.card}>

        <Text style={styles.toolIcon}>
          🪛
        </Text>

        <Text style={styles.cardTitle}>
          Screwdriver Set
        </Text>

        <Text style={styles.cardText}>
          20 kr / day
        </Text>

        <Text style={styles.cardText}>
          Available tomorrow
        </Text>

        <ButtonComponent
          title="Edit Tool"
          secondary={true}
          onPress={() => alert('Editing is not yet available')}
        />

      </View>

      {/* Knap til at oprette nyt værktøj */}
      <ButtonComponent
        title="+ Add a Tool"
        onPress={() => alert('A new tool could be added here.')}
      />

    </View>
  );
}