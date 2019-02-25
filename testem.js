module.exports = {
  test_page: 'tests/index.html?hidepassed',
  disable_watching: true,
  reporter: 'dot',
  launch_in_ci: [
    'Chrome'
  ],
  launch_in_dev: [],
  browser_args: {
    Chrome: {
      mode: 'ci',
      args: [
        // --no-sandbox is needed when running Chrome inside a container
        process.env.TRAVIS ? '--no-sandbox' : null,

        '--disable-gpu',
        '--headless',
        '--remote-debugging-port=0',
        '--window-size=1440,900'
      ].filter(Boolean)
    }
  }
};