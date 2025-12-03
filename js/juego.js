angular.module("Tragamonedas", [])
    .controller("ControladorTragamonedas",

       function($scope, $timeout) {

        $scope.carretes = [];
        $scope.resultado = [];
        $scope.color = "";

        // Contadores
        $scope.ganadas = 0;
        $scope.casi = 0;
        $scope.perdidas = 0;

        // Simbolos
        var simbolos = [
            "imagenes/carretes/cereza.jpg",
            "imagenes/carretes/campana.jpg",
            "imagenes/carretes/limon.jpg",
            "imagenes/carretes/siete.jpg",
        ];

        var carrete1 = new Carrete(simbolos);
        var carrete2 = new Carrete(simbolos);
        var carrete3 = new Carrete(simbolos);

        $scope.carretes = [
            carrete1.getImagen(),
            carrete2.getImagen(),
            carrete3.getImagen(),
        ];

        // Metodo Girar
        $scope.girar = function() {
            $scope.resultado = "Girando..."
            $scope.color = "white";

            let pasos = 10;

            function animar(i) {
                if(i < pasos) {
                    carrete1.girar();
                    carrete2.girar();
                    carrete3.girar();

                    $scope.carretes = [
                        carrete1.getImagen(),
                        carrete2.getImagen(),
                        carrete3.getImagen()
                    ];

                    $timeout(() => animar(i + 1), 80);
                } else {
                    evaluar();
                }
            }
            animar(0);
        };

        function evaluar() {
            let a = carrete1.getNombre();
            let b = carrete2.getNombre();
            let c = carrete3.getNombre();

            if (a === b && b === c) {
                $scope.resultado = "GANASTE";
                $scope.color = "green";
                $scope.ganadas++;
            }
            else if (a === b || a === c || b === c) {
                $scope.resultado = "CASI";
                $scope.color = "orange";
                $scope.casi++;
            }
            else {
                $scope.resultado = "PERDISTE";
                $scope.color = "red"
                $scope.perdidas++;
            }
        }
       }
    )