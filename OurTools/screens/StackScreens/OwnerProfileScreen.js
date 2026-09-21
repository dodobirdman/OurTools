import { View, Text } from 'react-native';

import ButtonComponent from '../../components/ButtonComponent';
import { styles } from '../../styles/styles';

export default function OwnerProfileScreen({ navigation, route }) {
  // Henter navnet på ejeren fra route-parametrene
  const owner = route.params?.owner || 'Tool Owner';

  return (
    <View style={styles.container}>

      <View style={styles.profileHeader}>

        <Text style={styles.profileIcon}>
          👤
        </Text>

        <Text style={styles.profileName}>
          {owner}
        </Text>

        <Text style={styles.profileLocation}>
          Copenhagen, Denmark
        </Text>

      </View>

      {/* Profiloplysninger og statistik om udlejeren */}
      <View style={styles.card}>

        <Text style={styles.cardTitle}>
          About the owner
        </Text>

        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>
            Rating
          </Text>

          <Text style={styles.infoValue}>
            ⭐ 4.8 / 5
          </Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>
            Tools listed
          </Text>

          <Text style={styles.infoValue}>
            6
          </Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>
            Member since
          </Text>

          <Text style={styles.infoValue}>
            2026
          </Text>
        </View>

      </View>

      {/* Knap til at gå tilbage til forrige skærm */}
      <ButtonComponent
        title="Back"
        secondary={true}
        onPress={() => navigation.goBack()}
      />

    </View>
  );
}