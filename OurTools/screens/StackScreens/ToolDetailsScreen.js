import { View, Text } from 'react-native';

import ButtonComponent from '../../components/ButtonComponent';
import { styles } from '../../styles/styles';

export default function ToolDetailsScreen({ navigation, route }) {
  // Modtager det specifikke værktøj som parameter fra den forrige skærm
  const tool = route.params.tool;

  return (
    <View style={styles.container}>

      <View style={styles.detailCard}>

        <Text style={styles.detailIcon}>
          {tool.icon}
        </Text>

        <Text style={styles.detailTitle}>
          {tool.name}
        </Text>

        <Text style={styles.detailText}>
          Owned by {tool.owner}
        </Text>

        <Text style={styles.detailText}>
          📍 {tool.distance}
        </Text>

        <Text style={styles.detailText}>
          🗓 {tool.availability}
        </Text>

        <Text style={styles.detailPrice}>
          {tool.price} / day
        </Text>

        {/* Navigerer videre til ejerens profil med ejerens navn */}
        <ButtonComponent
          title="View Owner"
          onPress={() =>
            navigation.navigate('Owner Profile', {
              owner: tool.owner,
            })
          }
        />

        <ButtonComponent
          title="Back"
          secondary={true}
          onPress={() => navigation.goBack()}
        />

      </View>

    </View>
  );
}