const ping = {
  description: "Pings a specified address or defaults to ping google.com",
  usage: "ping [address]",
  execute: async (args, addOutput) => {
    const address = args.length > 0 ? args[0] : 'www.google.com';
    
    try {
      const startTime = new Date().getTime();
      const response = await fetch(address, { method: 'HEAD' });
      const endTime = new Date().getTime();
      const duration = endTime - startTime;

      if (response.ok) {
        addOutput(`Ping to ${address} was successful! (Status: ${response.status}, Time: ${duration}ms)`);
      } else {
        addOutput(`Ping to ${address} failed. (Status: ${response.status})`);
      }
    } catch (error) {
      addOutput(`Ping to ${address} failed. Error: ${error.message}`);
    }
  },
};

export default ping;
