var companies = {
  hardware: ["company1", "globalTech", "company2"],
  software: ["Asal", "InfiniteTiers", "Exhausted"],
  networking: ["company3", "company4", "company5"],
};

// Solution 1:
const bestCompany = companies.software[1];
console.log(bestCompany);

// Solution 2:
//  using the destructuring way
const { software } = companies;
const [, theBestCompany] = software;
console.log(theBestCompany);
