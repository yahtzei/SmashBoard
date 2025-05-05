class Fighter {
  constructor(name) {
    this.name = name;
  }

  get imagePath() {
    return `src/assets/fighter-icons/${this.name}.png`;
  }
}

class Player {
  constructor(name) {
    this.name = name;
    this.faves = [];
    this.mains = [];
    this.loadData();
  }

  loadData() {
    const favesData = JSON.parse(localStorage.getItem(`${this.name}-faves`));
    if (favesData) {
      this.faves = Roster.filter(f => favesData.includes(f.name));
    }

    const mainsData = JSON.parse(localStorage.getItem(`${this.name}-mains`));
    if (mainsData) {
      this.mains = Roster.filter(f => mainsData.includes(f.name));
    }
  }

  saveData() {
    const favesData = this.faves.map(f => f.name);
    localStorage.setItem(`${this.name}-faves`, JSON.stringify(favesData));

    const mainsData = this.mains.map(f => f.name);
    localStorage.setItem(`${this.name}-mains`, JSON.stringify(mainsData));
  }

  roster(sorting = SortBy.default) {
    const filteredRoster = Roster.filter(f => !this.hasMain(f));

    switch(sorting) {
      case SortBy.favouritesFirst:
        return filteredRoster.sort((a, b) => this.hasFave(b) - this.hasFave(a));
      case SortBy.default:
      default:
        return filteredRoster;
    }
  }

  hasFave(fighter) {
    return this.faves.some(f => f.name === fighter.name);
  }

  hasMain(fighter) {
    return this.mains.some(f => f.name === fighter.name);
  }

  toggleFave(fighter) {
    if (this.hasFave(fighter)) {
      this.faves = this.faves.filter(f => f.name !== fighter.name);
    } else {
      this.faves.push(fighter);
    }

    this.saveData();
  }

  toggleMain(fighter) {
    if (this.hasMain(fighter)) {
      this.mains = this.mains.filter(f => f.name !== fighter.name);
    } else {
      this.mains.push(fighter);
    }

    this.saveData();
  }

  resetMains() {
    this.mains = this.faves;
    this.saveData();
  }
}

class SortBy {
  static get default() { 
    return 0; 
  }
  static get favouritesFirst() { 
    return 1; 
  }
}