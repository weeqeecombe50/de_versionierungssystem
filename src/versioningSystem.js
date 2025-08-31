class VersioningSystem {
  constructor() {
    this.versions = [];
  }

  init() {
    console.log('Versionskontrollsystem initialisiert');
  }

  commit(message) {
    const version = { message: message, timestamp: new Date() };
    this.versions.push(version);
    console.log('Änderung committed:', message);
  }

  showHistory() {
    console.log('Versionshistorie:', this.versions);
  }
}

module.exports = VersioningSystem;
