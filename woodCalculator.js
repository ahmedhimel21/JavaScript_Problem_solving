function woodCalculator(chairQua, tableQua, bedQua){
  const perChairWood = 3;
  const perTableWood = 10;
  const perBedWood = 50;

  const chairWood = chairQua * perChairWood;
  const tableWood = tableQua * perTableWood;
  const bedWood = bedQua * perBedWood;

  const totalWood = chairWood + tableWood + bedWood;
  return totalWood;
}
const totalWood = woodCalculator(2,2,1);
console.log(totalWood);