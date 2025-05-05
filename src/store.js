const Roster = FIGHTER_DATA.map((fighter) => {
  return new Fighter(fighter.name);
});

const P1 = new Player("Sming");
const P2 = new Player("Bro");
