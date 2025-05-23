class Fighter {
  constructor(name) {
    this.name = name;
  }

  get iconPath() {
    return `src/assets/fighter-icons/${this.name}.png`;
  }

  get imagePath() {
    return `src/assets/fighter-imgs/${this.name}.png`;
  }
}

class Player {
  constructor(name, colour) {
    this.name = name;
    this.colour = colour;
    this.faves = [];
    this.mains = [];
    this.defaults = [];
    this.loadData();
    this.lastRoll = null;
    this.preventRerolls = false;
  }

  activeFighter = null;

  loadData() {
    const favesData = JSON.parse(localStorage.getItem(`${this.name}-faves`));
    if (favesData) {
      this.faves = Roster.filter(f => favesData.includes(f.name));
    }
    const defaultsData = JSON.parse(localStorage.getItem(`${this.name}-faves`));
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

    const defaultsData = this.defaults.map(f => f.name);
    localStorage.setItem(`${this.name}-defaults`, JSON.stringify(defaultsData));

    const mainsData = this.mains.map(f => f.name);
    localStorage.setItem(`${this.name}-mains`, JSON.stringify(mainsData));
  }

  roster(sorting = SortBy.default, searchTerm = '') {
    const filteredRoster = Roster.filter((fighter) => {
      const cleanSearchTerm = searchTerm.toLowerCase().trim();
      return !this.hasMain(fighter) && fighter.name.toLowerCase().includes(cleanSearchTerm)
    });

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

   hasDefault(fighter) {
    return this.defaults.some(f => f.name === fighter.name);
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

  toggleDefault(fighter) {
    if (this.hasDefault(fighter)) {
      this.defaults = this.defaults.filter(f => f.name !== fighter.name);
    } else {
      this.defaults.push(fighter);
    }

    this.saveData();
  }

  toggleMain(fighter) {
    if (this.hasMain(fighter)) {
      this.mains = this.mains.filter(f => f.name !== fighter.name);
    } else {
      this.mains.push(fighter);
    }

    if (this.activeFighter?.name === fighter.name) {
      this.activeFighter = null
    }

    this.saveData();
  }

  resetMains() {
    this.mains = [...this.faves];
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