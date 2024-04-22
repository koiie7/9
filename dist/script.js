function convertToFahrenheit() {
            var celsius = document.getElementById('celsius').value;
            var fahrenheit = (celsius * 9/5) + 32;
            document.getElementById('result').innerHTML = celsius + " 度攝氏 = " + fahrenheit.toFixed(2) + " 度華氏";
        }

        function convertToCelsius() {
            var fahrenheit = document.getElementById('fahrenheit').value;
            var celsius = (fahrenheit - 32) * 5/9;
            document.getElementById('result').innerHTML = fahrenheit + " 度華氏 = " + celsius.toFixed(2) + " 度攝氏";
        }