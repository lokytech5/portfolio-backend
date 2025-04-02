'use strict';

/**
 * A set of functions called "actions" for `health`
 */

module.exports = {
  async index(ctx) {
    const uptimeSeconds = Math.floor(process.uptime());
    const hours = Math.floor(uptimeSeconds / 3600);
    const minutes = Math.floor((uptimeSeconds % 3600) / 60);
    const seconds = uptimeSeconds % 60;

    const formattedUptime = `${hours}h ${minutes}m ${seconds}s`;

    const now = new Date();
    const formattedTimestamp = now.toLocaleString('en-GB', {
      timeZone: 'Europe/London', // or change to your timezone
      hour12: false,
      year: 'numeric',
      month: 'short',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });

    ctx.send({
      status: 'ok',
      uptime: formattedUptime,
      timestamp: formattedTimestamp,
    });
  },
};
