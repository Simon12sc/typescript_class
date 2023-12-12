//@ts-check

/**
 *
 * @param {string} message
 * @returns {number}
 */
function show(message) {
  //   return "simon"; //show error because it should return number as mention above
  return 12; //no error because it is returning number as mention above
}

// show(23); // return error because we have mention message param as string
show("simon"); //no error because we are passing string as param- message
