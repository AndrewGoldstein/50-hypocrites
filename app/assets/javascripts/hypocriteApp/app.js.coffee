# Angular bootstrapping file

@app = angular.module('app', [
  # Additional dependencies here, such as restangular
  'templates'
])

# For compatibility with Rails CSRF protection
@app.config([
  '$httpProvider', ($httpProvider)->
    $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content')
])

@app.run(->
  console.log 'angular app running'
)
