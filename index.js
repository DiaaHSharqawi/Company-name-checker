const TARGET_COMPANY = "InfiniteTiers";

var companies = {
  hardware: ["company1", "globalTech", "company2"],
  software: ["Asal", "InfiniteTiers", "Exhausted"],
  networking: ["company3", "company4", "company5"],
};

function getTargetCompanyName(companiesData, targetCompany) {
  for (let companiesKey in companiesData) {
    const companiesName = companiesData[companiesKey];
    if (companiesName.includes(targetCompany)) {
      return targetCompany;
    }
  }
  return null;
}
const bestCompany = getTargetCompanyName(companies, TARGET_COMPANY);
console.log(bestCompany ?? "Not found");
