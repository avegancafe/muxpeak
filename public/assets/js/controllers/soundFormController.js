var app = angular.module("muxpeakApp", []);

app.controller("soundFormController", function ($scope) {
    $scope.test_value = "hello";
    SC.initialize({
          client_id: 'dc1d88a42e92792b423030cd3b387f36'
    });

    $scope.time = 1000;
    $("#play").click( function (e) {
        SC.stream("/tracks/293", function(sound){
          sound.play();
          sound.pause();
          cur_date = new Date();
          cur_date.setSeconds(cur_date.getSeconds() + 3);
          setTimeout(sound.play, cur_date - (new Date()));
          $("#stop").click(function (e) {
              sound.stop();
          });
        });
    });
});
