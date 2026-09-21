import { View, Text } from 'react-native';
import ButtonComponent from './ButtonComponent';
import { styles } from '../styles/styles';

// Genanvendeligt kort til at vise et enkelt værktøj i en liste
export default function ToolCard({ tool, onPress }) {
  return (
    <View style={styles.toolCard}>
      <Text style={styles.toolIcon}>{tool.icon}</Text>

      <Text style={styles.toolName}>
        {tool.name}
      </Text>

      <Text style={styles.toolOwner}>
        Owned by {tool.owner}
      </Text>

      <Text style={styles.toolInfo}>
        📍 {tool.distance}
      </Text>

      <Text style={styles.toolInfo}>
        Availability: {tool.availability}
      </Text>

      <Text style={styles.price}>
        {tool.price} / day
      </Text>

      <ButtonComponent
        title="View Tool"
        onPress={onPress}
      />
    </View>
  );
}