import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#233',
    padding: 10,
    justifyContent: 'center',
  },
  header1: {
    fontSize: 46,
    fontWeight: '600',
    color: '#0fd',
    textAlign: 'center',
    paddingVertical: 20,
    marginBottom: 20,
    fontFamily: 'serif',
    fontStyle: 'italic',
  },
  header2: {
    marginTop: -40,
    fontSize: 22,
    textAlign: 'center',
    color: 'white',
    paddingVertical: 20,
    fontFamily: 'sans-serif-light',
  },
  infoText: {
    marginBottom: 30,
    marginTop: -20,
    marginLeft: 10,
    fontSize: 22,
    textAlign: 'left',
    color: 'white',
    paddingVertical: 20,
    fontFamily: 'sans-serif-light',
  },
  closeButtonArea: {
    position: "absolute",
    top: 25,
    right: 5,
    height: 80,
    width: 80,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  closeButton: {
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    fontSize: 50,
    color: '#677'
  },
  customBtnText: {
    fontSize: 22,
    color: "#fff",
    marginTop: -20,
    marginLeft: -10,
    textAlign: 'left',
    paddingVertical: 20,
    fontFamily: 'sans-serif-light',
  },
  customBtnBG: {
    backgroundColor: "#233",
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 10
  }
});
  export default styles;