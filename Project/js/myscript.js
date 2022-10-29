angular.module( 'myApp', [ 'metawidget' ]).controller( 'myController', function( $scope ) {
//creating nested colums
$scope.metawidgetConfig = {
  inspector: new metawidget.inspector.CompositeInspector( [
    new metawidget.inspector.PropertyTypeInspector(),
    new metawidget.inspector.JsonSchemaInspector( {
       properties: {
        // setting required properties
        firstname: {
            type: 'string',
            required:true
        },
        surname: {
            type: 'string',
            required: true
        },
        age: {
            type: 'number',
            minimum: 0
        },
          hobby: {
             enum: [ 'Movies', 'Shoping', 'Eating' ]
          }
       }
    } )
 ] )
};      
$scope.person = {
    firstname: 'Reetima',
    surname: 'Ranjan',
    age: 30,
    hobby: 'Movies'
 };

	//Data binding
     $scope.title = "Student Details";  
     // Saving data on console 
      $scope.save = function() {
		console.log( $scope.person );
                    };
              
          
});

