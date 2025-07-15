const Roster = FIGHTER_DATA.map((fighter) => {
  return new Fighter(fighter.name);
});

const P1 = new Player("P1", "red");
const P2 = new Player("P2", "blue");


const BossRoster = BOSS_DATA.map((boss) => {
  return new Boss(boss.name)
});

const EP1 = new EldenPlayer("P1", "red", 7, 2);
const EP2 = new EldenPlayer("P2", "blue", 8, 6);

const BossboardPalette = new Palette("bossboard");