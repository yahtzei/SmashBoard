const Roster = FIGHTER_DATA.map((fighter) => {
  return new Fighter(fighter.name);
});

const P1 = new Player("P1", "red");
const P2 = new Player("P2", "blue");
