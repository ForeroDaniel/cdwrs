const whosOnline = (friends) => {
  const output = {};

  friends.forEach(friend => {
    let status = friend.status;

    // Logic: If online but inactive for > 10 mins, they are 'away'
    if (status === 'online' && friend.lastActivity > 10) {
      status = 'away';
    }

    // If this status group doesn't exist yet, create it
    if (!output[status]) {
      output[status] = [];
    }

    // Add the username to the appropriate group
    output[status].push(friend.username);
  });

  return output;
};
