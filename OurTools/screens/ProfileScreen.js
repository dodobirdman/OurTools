import { View, Text } from 'react-native';

import ButtonComponent from '../components/ButtonComponent';
import { styles } from '../styles/styles';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>

      {/* Brugerens profilbillede og dummy oplysninger */}
      <View style={styles.profileHeader}>

        <Text style={styles.profileIcon}>
          👤
        </Text>

        <Text style={styles.profileName}>
          Martin
        </Text>

        <Text style={styles.profileLocation}>
          Copenhagen, Denmark
        </Text>

      </View>

      {/* Statistik for brugerens aktivitet */}
      <View style={styles.card}>

        <Text style={styles.cardTitle}>
          My profile
        </Text>

        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>
            Tools shared
          </Text>

          <Text style={styles.infoValue}>
            2
          </Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>
            Tools borrowed
          </Text>

          <Text style={styles.infoValue}>
            4
          </Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>
            Rating
          </Text>

          <Text style={styles.infoValue}>
            ⭐ 4.9
          </Text>
        </View>

      </View>

      {/* Kort med info om appens formål */}
      <View style={styles.card}>

        <Text style={styles.cardTitle}>
          About OurTools
        </Text>

        <Text style={styles.cardText}>
          OurTools makes it easier for people to borrow
          tools from others in their local area instead
          of buying tools they only need occasionally.
        </Text>

      </View>

      <ButtonComponent
        title="Edit Profile"
        secondary={true}
        onPress={() => alert('Not yet available.')}
      />

    </View>
  );
}