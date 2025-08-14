const { withNativeFederation, shareAll } = require('@angular-architects/native-federation/config');

module.exports = withNativeFederation({

  name: 'loan',

  exposes: {
    './Component': './projects/loan/src/app/app.component.ts',
      './CreateLoan': './projects/loan/src/app/loan-domain/loan-type-setup/create-loan/create-loan.component.ts'
    // './Module': './projects/loan/src/app/app.module.ts'

  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

  skip: [
    'rxjs/ajax',
    'rxjs/fetch',
    'rxjs/testing',
    'rxjs/webSocket',
    // Add further packages you don't need at runtime
  ]

  // Please read our FAQ about sharing libs:
  // https://shorturl.at/jmzH0

});
