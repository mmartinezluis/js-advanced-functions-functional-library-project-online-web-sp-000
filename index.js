const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, alert) { 
      if (collection.length === undefined) {
        let values = Object.values(collection)
        for ( let i = 0; i < values.length; i++) {
          alert(values[i]);
        }
      } else {
          for (let i = 0 ; i < collection.length; i++) {
            alert(collection[i]);
          }
      }
      return collection;
    },

    map: function(collection, callback) {
      let  array = []

      if (collection.length === undefined){
        let values = Object.values(collection)
        for ( let i = 0; i < values.length; i++) {
          array.push(callback(values[i]));
       }
      } else {
          for ( let i = 0; i < collection.length; i++) {
            array.push(callback(collection[i]));
          }
      }
      return array;
    },

    reduce: function() {

    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
