angular.module('starter.controllers', [])

.controller('AppCtrl', function ($scope, $ionicModal, $timeout) {

    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    // Form data for the login modal
    $scope.loginData = {};

    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('templates/login.html', {
        scope: $scope
    }).then(function (modal) {
        $scope.modal = modal;
    });

    // Triggered in the login modal to close it
    $scope.closeLogin = function () {
        $scope.modal.hide();
    };

    // Open the login modal
    $scope.login = function () {
        $scope.modal.show();
    };

    // Perform the login action when the user submits the login form
    $scope.doLogin = function () {
        console.log('Doing login', $scope.loginData);

        // Simulate a login delay. Remove this and replace with your login
        // code if using a login system
        $timeout(function () {
            $scope.closeLogin();
        }, 1000);
    };
})

.controller("GraphCtrl", ['$scope', '$timeout', function ($scope, $timeout) {

 $scope.labels = ["0","3","6","9","12","14"];
 $scope.series = ["Phototherapy Line", "Exchange Transfusion Line"];
 $scope.data = [
    [40, 160, 160, 160, 160, 160],
    [80, 260, 260, 260, 260, 260]
  ];
  $scope.bezierCurve = [false,false];
  $scope.onClick = function (points,evt) {
    console.log(points,evt);
  };

  // Simulate async data update
  $timeout(function () {
    $scope.data = [
      [40, 160, 160, 160, 160, 160],
      [80, 260, 260, 260, 260, 260]
  ];
  }, 3000);


   /*var data = {
      labels : ["0","3","6","9","12","14"],
      datasets : [
        {
          label: "Phototherapy Line",
          fillColor : "rgba(220,220,220,0.5)",
          strokeColor : "rgba(220,220,220,1)",
          pointColor : "rgba(220,220,220,1)",
          pointStrokeColor : "#fff",
          bezierCurve : false,
          data : [40, 160, 160, 160, 160, 160]
        },
        {
          label: "Exchange Transfusion Line",
          fillColor : "rgba(151,187,205,0.5)",
          strokeColor : "rgba(151,187,205,1)",
          pointColor : "rgba(151,187,205,1)",
          pointStrokeColor : "#fff",
          bezierCurve : false,
          data : [80, 260, 260, 260, 260, 260]
        }
      ]
    }

   // $scope.myChart.data = data;*/

}])



.controller('StartPageCtrl', function ($scope) {

    $scope.data = {
        result: '',
        pt: '',
        eTT: ''
    }

    $scope.GetResult = function (infantDetails) {
        console.log("GetResult called" + infantDetails.Gestation);

        //(y-y1)=((y2-y1)/(x2-x1))*(x-x1) equation of straight line passign through 2 points-- convert to intercept form to find y/y1+x/x1=1
        //(y-40)=((170-40)/(3-0))(x-0) //(y-80)=((270-80)/(3-0))(x-0)

        if (infantDetails.Gestation == "23 Weeks") {
            //$scope.data.result = calcRes(infantDetails.Age, GetBilurubinValueInMicromol(infantDetails.BilirubinUnits, infantDetails.Bilirubin), 40, 80, 130, 230, (4 / 3), (8 / 5));
            $scope.data.ptt = calcPTT(infantDetails.BilirubinUnits, infantDetails.Age, 40, 80, 130, 230, (4 / 3), (8 / 5));
            $scope.data.eTT = calcETT(infantDetails.BilirubinUnits, infantDetails.Age, 40, 80, 130, 230, (4 / 3), (8 / 5));
        }
        else if (infantDetails.Gestation == "24 Weeks") {
            //$scope.data.result = calcRes(infantDetails.Age, GetBilurubinValueInMicromol(infantDetails.BilirubinUnits, infantDetails.Bilirubin), 40, 80, 140, 240, (6 / 5), (3 / 2));
            $scope.data.ptt = calcPTT(infantDetails.BilirubinUnits, infantDetails.Age, 40, 80, 140, 240, (6 / 5), (3 / 2));
            $scope.data.eTT = calcETT(infantDetails.BilirubinUnits, infantDetails.Age, 40, 80, 140, 240, (6 / 5), (3 / 2));
        }
        else if (infantDetails.Gestation == "25 Weeks") {
            //$scope.data.result = calcRes(infantDetails.Age, GetBilurubinValueInMicromol(infantDetails.BilirubinUnits, infantDetails.Bilirubin), 40, 80, 150, 250, (12 / 11), (24 / 17));
            $scope.data.ptt = calcPTT(infantDetails.BilirubinUnits, infantDetails.Age, 40, 80, 150, 250, (12 / 11), (24 / 17));
            $scope.data.eTT = calcETT(infantDetails.BilirubinUnits, infantDetails.Age, 40, 80, 150, 250, (12 / 11), (24 / 17));
        }
        else if (infantDetails.Gestation == "26 Weeks") {
            // $scope.data.result = calcRes(infantDetails.Age, GetBilurubinValueInMicromol(infantDetails.BilirubinUnits, infantDetails.Bilirubin), 40, 80, 160, 260, 1, (4 / 3));
            $scope.data.ptt = calcPTT(infantDetails.BilirubinUnits, infantDetails.Age, 40, 80, 160, 260, (4 / 3), (8 / 5));
            $scope.data.eTT = calcETT(infantDetails.BilirubinUnits, infantDetails.Age, 40, 80, 160, 260, (4 / 3), (8 / 5));
        }
        else if (infantDetails.Gestation == "27 Weeks") {
            // $scope.data.result = calcRes(infantDetails.Age, GetBilurubinValueInMicromol(infantDetails.BilirubinUnits, infantDetails.Bilirubin), 40, 80, 170, 270, (12 / 13), (24 / 19));
            $scope.data.ptt = calcPTT(infantDetails.BilirubinUnits, infantDetails.Age, 40, 80, 170, 270, (12 / 13), (24 / 19));
            $scope.data.eTT = calcETT(infantDetails.BilirubinUnits, infantDetails.Age, 40, 80, 170, 270, (12 / 13), (24 / 19));
        }
        else if (infantDetails.Gestation == "28 Weeks") {
            // $scope.data.result = calcRes(infantDetails.Age, GetBilurubinValueInMicromol(infantDetails.BilirubinUnits, infantDetails.Bilirubin), 40, 80, 180, 280, (6 / 7), (6 / 5));
            $scope.data.ptt = calcPTT(infantDetails.BilirubinUnits, infantDetails.Age, 40, 80, 180, 280, (6 / 7), (6 / 5));
            $scope.data.eTT = calcETT(infantDetails.BilirubinUnits, infantDetails.Age, 40, 80, 180, 280, (6 / 7), (6 / 5));
        }
        else if (infantDetails.Gestation == "29 Weeks") {
            //$scope.data.result = calcRes(infantDetails.Age, GetBilurubinValueInMicromol(infantDetails.BilirubinUnits, infantDetails.Bilirubin), 40, 80, 190, 290, (4 / 5), (8 / 7));
            $scope.data.ptt = calcPTT(infantDetails.BilirubinUnits, infantDetails.Age, 40, 80, 190, 290, (4 / 5), (8 / 7));
            $scope.data.eTT = calcETT(infantDetails.BilirubinUnits, infantDetails.Age, 40, 80, 190, 290, (4 / 5), (8 / 7));
        }
        else if (infantDetails.Gestation == "30 Weeks") {
            //$scope.data.result = calcRes(infantDetails.Age, GetBilurubinValueInMicromol(infantDetails.BilirubinUnits, infantDetails.Bilirubin), 40, 80, 200, 300, (3 / 4), (12 / 11));
            $scope.data.ptt = calcPTT(infantDetails.BilirubinUnits, infantDetails.Age, 40, 80, 200, 300, (3 / 4), (12 / 11));
            $scope.data.eTT = calcETT(infantDetails.BilirubinUnits, infantDetails.Age, 40, 80, 200, 300, (3 / 4), (12 / 11));
        }
        else if (infantDetails.Gestation == "31 Weeks") {
            //$scope.data.result = calcRes(infantDetails.Age, GetBilurubinValueInMicromol(infantDetails.BilirubinUnits, infantDetails.Bilirubin), 40, 80, 210, 310, (12 / 17), (24 / 23));
            $scope.data.ptt = calcPTT(infantDetails.BilirubinUnits, infantDetails.Age, 40, 80, 210, 310, (12 / 17), (24 / 23));
            $scope.data.eTT = calcETT(infantDetails.BilirubinUnits, infantDetails.Age, 40, 80, 210, 310, (12 / 17), (24 / 23));
        }
        else if (infantDetails.Gestation == "32 Weeks") {
            //$scope.data.result = calcRes(infantDetails.Age, GetBilurubinValueInMicromol(infantDetails.BilirubinUnits, infantDetails.Bilirubin), 40, 80, 220, 320, (2 / 3), 1);
            $scope.data.ptt = calcPTT(infantDetails.BilirubinUnits, infantDetails.Age, 40, 80, 220, 320, (2 / 3), 1);
            $scope.data.eTT = calcETT(infantDetails.BilirubinUnits, infantDetails.Age, 40, 80, 220, 320, (2 / 3), 1);
        }
        else if (infantDetails.Gestation == "33 Weeks") {
            //$scope.data.result = calcRes(infantDetails.Age, GetBilurubinValueInMicromol(infantDetails.BilirubinUnits, infantDetails.Bilirubin), 40, 80, 230, 330, (12 / 19), (24 / 25));
            $scope.data.ptt = calcPTT(infantDetails.BilirubinUnits, infantDetails.Age, 40, 80, 230, 330, (12 / 19), (24 / 25));
            $scope.data.eTT = calcETT(infantDetails.BilirubinUnits, infantDetails.Age, 40, 80, 230, 330, (12 / 19), (24 / 25));
        }
        else if (infantDetails.Gestation == "34 Weeks") {
            //$scope.data.result = calcRes(infantDetails.Age, GetBilurubinValueInMicromol(infantDetails.BilirubinUnits, infantDetails.Bilirubin), 40, 80, 240, 340, (3 / 5), (12 / 13));
            $scope.data.ptt = calcPTT(infantDetails.BilirubinUnits, infantDetails.Age, 40, 80, 240, 340, (3 / 5), (12 / 13));
            $scope.data.eTT = calcETT(infantDetails.BilirubinUnits, infantDetails.Age, 40, 80, 240, 340, (3 / 5), (12 / 13));
        }
        else if (infantDetails.Gestation == "35 Weeks") {
            //$scope.data.result = calcRes(infantDetails.Age, GetBilurubinValueInMicromol(infantDetails.BilirubinUnits, infantDetails.Bilirubin), 40, 80, 250, 350, (4 / 7), (8 / 9));
            $scope.data.ptt = calcPTT(infantDetails.BilirubinUnits, infantDetails.Age, 40, 80, 250, 350, (4 / 7), (8 / 9));
            $scope.data.eTT = calcETT(infantDetails.BilirubinUnits, infantDetails.Age, 40, 80, 250, 350, (4 / 7), (8 / 9));
        }
        else if (infantDetails.Gestation == "36 Weeks") {
            //$scope.data.result = calcRes(infantDetails.Age, GetBilurubinValueInMicromol(infantDetails.BilirubinUnits, infantDetails.Bilirubin), 40, 80, 260, 360, (6 / 11), (6 / 7));
            $scope.data.ptt = calcPTT(infantDetails.BilirubinUnits, infantDetails.Age, 40, 80, 260, 360, (6 / 11), (6 / 7));
            $scope.data.eTT = calcETT(infantDetails.BilirubinUnits, infantDetails.Age, 40, 80, 260, 360, (6 / 11), (6 / 7));
        }
        else if (infantDetails.Gestation == "37 Weeks") {
            //$scope.data.result = calcRes(infantDetails.Age, GetBilurubinValueInMicromol(infantDetails.BilirubinUnits, infantDetails.Bilirubin), 40, 80, 270, 370, (12 / 23), (24 / 29));
            $scope.data.ptt = calcPTT(infantDetails.BilirubinUnits, infantDetails.Age, 40, 80, 270, 370, (12 / 23), (24 / 29));
            $scope.data.eTT = calcETT(infantDetails.BilirubinUnits, infantDetails.Age, 40, 80, 270, 370, (12 / 23), (24 / 29));
        }

        if (infantDetails.Gestation == ">=38 Weeks") {
            //$scope.data.result = calculateFor38Week(infantDetails.Age, GetBilurubinValueInMicromol(infantDetails.BilirubinUnits, infantDetails.Bilirubin));
            $scope.data.ptt = calcPTTWeekGT38(infantDetails.BilirubinUnits, infantDetails.Age);
            $scope.data.eTT = calcETTWeekGT38(infantDetails.BilirubinUnits, infantDetails.Age, 100, 450, (3.57/7))
        }
       // else
        {
            console.log("Old result" + $scope.data.result);
            $scope.data.result = calculateFromThresholdUnder38Weeks({
                units: infantDetails.BilirubinUnits,
                Bilirubin: infantDetails.Bilirubin,
                eTT: $scope.data.eTT,
                ptt: $scope.data.ptt,
                week: infantDetails.Gestation

            })
        }

        //else {
        //    $scope.data.result = "invalid data";
        //}
    }


    function calculateFromThresholdUnder38Weeks(data) {
        console.log("calculateFromThresholdUnder38Weeks:" + data.Bilirubin)
        var diffP = data.ptt - data.Bilirubin;
        var diffT = data.eTT - data.Bilirubin;
        var closeRange = 3;

        if (data.units != "mg/dl") {
            closeRange = 3 * 17.1;
        }

        if (data.Bilirubin < data.ptt) {
            if (data.week == ">=38 Weeks")
            {
                if((data.ptt - data.Bilirubin) <= closeRange)
                {
                    return "Consider phototherapy - Repeat serum bilirubin levels in 6-12 hrs";
                }
            }
            return "No treatment required. Repeat serum bilirubin levels if clinically icteric in 6-12 hrs";
        }
        else if (data.Bilirubin < data.eTT) {
            if ((data.eTT - data.Bilirubin) <= closeRange) {
                return "Start phototherapy (consider multiple phototherapy)";
            }
            else {
                return "Start phototherapy and repeat serum bilirubin levels in 6-12 hours";
            }
        }
        else {
            return "Exchange transfusion and repeat serum bilirubin levels in 6-12 hours";
        }
    }

    function calcPTT(units, x, y1, y2, y3, y4, x1, x2) {
        x = x / 24; //hours to days
        if (x >= 0 && x < 3) {
            y = (1 + (x / x1)) * (y1);
            return returnProperValue(units, y);
        };
        if (x >= 3 && x <= 14) {
            y = y3;
            return returnProperValue(units, y);
        };
    }

    function calcETT(units, x, y1, y2, y3, y4, x1, x2) {
        x = x / 24; //hours to days
        if (x >= 0 && x < 3) {
            y = (1 + (x / x2)) * (y2);
            return returnProperValue(units, y);
        };
        if (x >= 3 && x <= 14) {
            y = y4;
            return returnProperValue(units, y);
        };
    }

    function calcETTWeekGT38(units,x,y2,y4,x2)
    {
        x = x / 24; //hours to days
        if (x >= 0 && x < 1.750) {
            y = (1 + (x / x2)) * (y2);
            return returnProperValue(units, y);
        };
        if (x >= 1.750 && x <= 14) {
            y = y4;
            return returnProperValue(units, y);
        };
    }

    function calcPTTWeekGT38(units,x)
    {
        x = x / 24;
        if(x >=0 && x<1)
        {
            y = (1 + (x / 1)) * 100;
            return returnProperValue(units, y);
        }
        else if(x>=1 && x<4)
        {
            y = (1 + (x / 3)) * 150;
            return returnProperValue(units, y);
        }
        else if(x>=4)
        {
            return returnProperValue(units, 350);
        }
    }

    //function calcRes(x, y, y1, y2, y3, y4, x1, x2) {
    //    console.log("called with" + x + "," + y + "," + y1 + "," + y2 + "," + y3 + "," + y4 + "," + x1 + "," + x2);
    //    //y = 17.1 * y;
    //    x = x / 24; //hours to days
    //    console.log("x and y values after conversion:" + x + "," + y);
    //    var Result1 = "No risk";
    //    var Result2 = "Phototherapy";
    //    var Result3 = "Exchange Transfusion";
    //    var Result4 = "Invalid Input";

    //    if (x >= 0 && x < 3) {
    //        console.log("first condition");
    //        if (y > 0 && (y / y1) - (x / x1) < 1) {
    //            return Result1;
    //        };
    //        if ((y / y1) - (x / x1) >= 1 && (y / y2) - (x / x2) < 1) {
    //            return Result2;
    //        };
    //        if ((y / y2) - (x / x2) >= 1) {
    //            return Result3;
    //        }
    //        else {
    //            return Result4;
    //        }
    //    }
    //    else if (x >= 3 && x <= 14) {
    //        console.log("second condition" + y + "," + y3 + y4);
    //        if (y > 0 && y < y3) {
    //            return Result1;
    //        };
    //        if (y >= y3 && y < y4) {
    //            return Result2;
    //        };
    //        if (y >= y4) {
    //            return Result3;
    //        }
    //        else return Result4;
    //    }
    //    else {
    //        console.log("last condition");
    //        return Result4;
    //    }
    //}

    function calculateFor38Week(x, y) {
        console.log("called with" + x + "," + y);
        //y = 17.1 * y;
        x = x / 24; //hours to days
        var Result1 = "No risk";
        var Result2 = "Phototherapy";
        var Result3 = "Exchange Transfusion";
        var Result4 = "Invalid Input";
        if (x >= 0 && x < 1) {
            if (y >= 0 && (y / 100) - (x / 1) < 1) {//Region 1
                return Result1;
            };
            if ((y / 100) - (x / 1) >= 1 && (y / 100) - (x / (1 / 2)) < 1) {
                return Result2;
            };
            if ((y / 100) - (x / (1 / 2)) >= 1) {
                return Result3;
            }
            else return Result4;
        };
        if (x >= 1 && x < 1.75) {
            if (y >= 0 && (y / 150) - (x / 3) < 1) {
                return Result1;
            };
            if ((y / 150) - (x / 3) >= 1 && (y / 100) - (x / (1 / 2)) < 1) {
                return Result2;
            };
            if ((y / 100) - (x / (1 / 2)) >= 1) {
                return Result3;
            }
            else return Result4;
        };
        if (x >= 1.75 && x < 4) {
            if (y >= 0 && (y / 150) - (x / 3) < 1) {
                return Result1;
            };
            if ((y / 150) - (x / 3) >= 1 && y < 450) {
                return Result2;
            };
            if (y >= 450) {
                return Result3;
            }
            else return Result4;
        };
        if (x >= 4 && x <= 14) {
            if (y >= 0 && y < 350) {
                return Result1;
            };
            if (y >= 350 && y < 450) {
                return Result2;
            };
            if (y >= 450) {
                return Result3;
            }
            else return Result4;
        }
        else return Result4;
    }

    function GetBilurubinValueInMicromol(units, value) {
        if (units == "mg/dl") {
            return 17.1 * value;
        }
        else
            return value;
    }

    function returnProperValue(units, value) {
        if (units == "mg/dl") {
            return value / 17.1;
        }
        else
            return value;
    }
});

//.controller('PlaylistCtrl', function ($scope, $stateParams) {
//});
