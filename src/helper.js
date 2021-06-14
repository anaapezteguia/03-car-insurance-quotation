export function obtainYearDifference(year) {
  return new Date().getFullYear() - year;
}

// calculate price according to brand
export function obtainBrand(brand) {
  let increment;

  switch (brand) {
    case 'european':
      increment = 1.3;
      break;
    case 'american':
      increment = 1.15;
      break;
    case 'asian':
      increment = 1.05;
      break;
    default:
      break;
  }
  return increment;
}

// calculate insurance type according to selected plan
export function obtainPlan(plan) {
  return plan === 'basic' ? 1.2 : 1.5;
}
// Capitalize
export function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}
