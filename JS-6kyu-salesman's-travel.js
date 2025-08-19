function travel(r, zipcode) {
  const addresses = r.split(',');

  // Filter and parse addresses that exactly match the given zipcode.
  const matchingClients = addresses.map(address => {
    const fullAddressZipcode = address.substring(address.length - 8);

    // address is a match.
    if (fullAddressZipcode === zipcode) {
      const firstSpaceIndex = address.indexOf(' ');
      const houseNumber = address.substring(0, firstSpaceIndex);
      const streetAndTown = address.substring(firstSpaceIndex + 1, address.length - 8 - 1);

      // Return an object containing the parsed components for this matching address.
      return { houseNumber, streetAndTown };
    }
    // If the full zipcode does not match, return null so it can be filtered out.
    return null;
  })
  // Filter out any null values
  .filter(Boolean);

  // If no addresses were found for the given zipcode, return the specified "zipcode:/" format.
  if (matchingClients.length === 0) {
    return `${zipcode}:/`;
  }
  
  const streets = matchingClients.map(client => client.streetAndTown);
  const houseNumbers = matchingClients.map(client => client.houseNumber);

  // Format the final output string as "zipcode:street,street,.../house number,house number,...".
  return `${zipcode}:${streets.join(',')}/${houseNumbers.join(',')}`;
}
