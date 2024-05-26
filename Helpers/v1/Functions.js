

function removeTribe(tribe_number, tribe_array) {
    let reset_tribe_array = [];
    for (let member of tribe_array) {
      if (member != 'tribe' + tribe_number) {
        reset_tribe_array.push(member);
      }
    }
    return reset_tribe_array;
  }

let tribe_array = ['tribe1', 'tribe2', 'tribe3', 'tribe4', 'tribe5'];


export {removeTribe, tribe_array};