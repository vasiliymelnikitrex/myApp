class Fishes {
  constructor(client) {
    this.client = client;
  }

  getFishData = () => this.client.get();

  getFishDescription = path => this.client.get(path);
}

export default Fishes;
