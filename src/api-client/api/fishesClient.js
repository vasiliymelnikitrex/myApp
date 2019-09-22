class Fishes {
  constructor(client) {
    this.client = client;
  }

  getFishesList = () => this.client.get();
}

export default Fishes;
