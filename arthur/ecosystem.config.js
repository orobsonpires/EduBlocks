module.exports = {
  apps: [{
    name: 'arthur.edublocks.org',
    script: './build/index.js',
    log_date_format: 'YYYY-MM-DD HH:mm Z',
    out_file: '/dev/null',
    output: '/dev/null',
    error: '/dev/null',
    max_memory_restart: '1G',
    env: {
      'NODE_ENV': 'production',
    }
  }]
}
