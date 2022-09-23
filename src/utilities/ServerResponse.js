class ServerResponse extends Error {
  constructor (message) {
    super(message)
    this.name = 'ServerResponse'
  }
}

export default ServerResponse
