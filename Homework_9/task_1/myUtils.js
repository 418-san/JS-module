;(function(){
    window.myUtils = {
        min: function(arr) {
            return Math.min(...arr);
        },
        max: function(arr) {
            return Math.max(...arr);
        },
        average: function(arr) {
            return arr.reduce((a, b) => (a + b))/arr.length;
        },
        clone: function(arr) {
            return arr.slice();
        }

    }              
}());