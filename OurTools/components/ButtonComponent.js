import { Pressable, Text } from 'react-native';
import { styles } from '../styles/styles';

// Genanvendelig knap-komponent der 
export default function ButtonComponent({
  title,
  onPress,
  secondary = false,
}) {
  return (
    <Pressable
      style={secondary ? styles.secondaryButton : styles.button}
      onPress={onPress}
    >
      <Text
        style={
          secondary
            ? styles.secondaryButtonText
            : styles.buttonText
        }
      >
        {title}
      </Text>
    </Pressable>
  );
}