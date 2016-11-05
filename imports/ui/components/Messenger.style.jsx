const styles = {
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 700
  },
  messenger: {
    display: 'flex',
    flexDirection: 'column',
    height: 600,
    width: 400,
    border: '1px solid #cecdde',
    borderRadius: '10px 10px 10px 10px'
  },
  header: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#166CFA',
    padding: 10,
    borderBottom: '5px solid #fff',
    borderRadius: '10px 10px 0 0'
  },
  text: {
    fontSize: 25,
    color: '#fff',
    flex: 1,
    textAlign: 'center'
  },
  account: {
    fontSize: 25,
    color: '#fff'
  },
  messages: {
    flex: 12,
    padding: 20
  }
};

export default styles;
