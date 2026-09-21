import { StyleSheet } from 'react-native';

// Fælles styles til hele appen
export const styles = StyleSheet.create({
  // Generelt layout
  container: {
    flex: 1,
    backgroundColor: '#F5F7F5',
    padding: 20,
  },

  content: {
    paddingBottom: 30,
  },

  // Home-skærm
  welcomeTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#1F3D2D',
    marginBottom: 6,
  },

  subtitle: {
    fontSize: 16,
    color: '#6B756E',
    marginBottom: 20,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1F3D2D',
    marginBottom: 12,
  },

  // Værktøjskort
  toolCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 18,
    marginBottom: 14,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 5,
    elevation: 3,
  },

  toolIcon: {
    fontSize: 32,
    marginBottom: 8,
  },

  toolName: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#1F3D2D',
    marginBottom: 5,
  },

  toolOwner: {
    fontSize: 14,
    color: '#6B756E',
    marginBottom: 8,
  },

  toolInfo: {
    fontSize: 14,
    color: '#555555',
    marginBottom: 3,
  },

  price: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#2F6B4F',
    marginTop: 5,
    marginBottom: 12,
  },

  // Knap-styling
  button: {
    backgroundColor: '#2F6B4F',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: 'bold',
  },

  secondaryButton: {
    backgroundColor: '#E3EEE7',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },

  secondaryButtonText: {
    color: '#2F6B4F',
    fontSize: 15,
    fontWeight: 'bold',
  },

  // Detaljeside
  detailCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
  },

  detailIcon: {
    fontSize: 55,
    textAlign: 'center',
    marginBottom: 15,
  },

  detailTitle: {
    fontSize: 27,
    fontWeight: 'bold',
    color: '#1F3D2D',
    marginBottom: 8,
  },

  detailText: {
    fontSize: 16,
    color: '#555555',
    marginBottom: 8,
  },

  detailPrice: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2F6B4F',
    marginTop: 8,
    marginBottom: 15,
  },

  // Mine værktøjer
  pageTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1F3D2D',
    marginBottom: 8,
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    marginBottom: 15,
  },

  cardTitle: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#1F3D2D',
    marginBottom: 8,
  },

  cardText: {
    fontSize: 15,
    color: '#666666',
    lineHeight: 22,
  },

  // Profilside
  profileHeader: {
    backgroundColor: '#2F6B4F',
    borderRadius: 18,
    padding: 25,
    alignItems: 'center',
    marginBottom: 20,
  },

  profileIcon: {
    fontSize: 50,
    marginBottom: 8,
  },

  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },

  profileLocation: {
    fontSize: 15,
    color: '#DCEBE1',
    marginTop: 5,
  },

  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },

  infoLabel: {
    fontSize: 15,
    color: '#777777',
  },

  infoValue: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#1F3D2D',
  },
});