var companies = {
  hardware: ["company1", "globalTech", "company2"],
  software: ["Asal", "InfiniteTiers", "Exhausted"],
  networking: ["company3", "company4", "company5"],
};

// Solution 1:
console.log(`first solution: using property access  `);
const bestCompany = companies.software[1];
console.log(bestCompany);
console.log(`------`);

// Solution 2:
//  using the destructuring way
console.log(`A second solution Using the destructuring`);
const { software } = companies;
const [, theBestCompany] = software;
console.log(theBestCompany);
