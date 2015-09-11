<!DOCTYPE html>
<html>
<head>
    <link href="style.css" rel="stylesheet" type="text/css">

    <title></title>
</head>

<body>
    <h1>jQuery Drawing Application</h1><canvas height="400" width=
    "600"></canvas>

    <div class="controls">
        <ul class="ulControls">
            <li class="red selected"></li>

            <li class="blue"></li>

            <li class="yellow"></li>
        </ul><button id="revealColorSelect">New Color</button>

        <div id="colorSelect">
            <span id="newColor"></span>

            <div class="sliders">
                <p><label for="red">Red</label> <input id="red" max="255" min=
                "0" name="red" type="range" value="0"></p>

                <p><label for="green">Green</label> <input id="green" max="255"
                min="0" name="green" type="range" value="0"></p>

                <p><label for="blue">Blue</label> <input id="blue" max="255"
                min="0" name="blue" type="range" value="0"></p>
            </div>

            <div>
                <button id="addNewColor">Add Color</button>
            </div>
        </div>
    </div><script charset="utf-8" src=
    "http://code.jquery.com/jquery-1.11.0.min.js" type="text/javascript"></script> <script charset="utf-8" src="js/app.js" type="text/javascript"></script>
</body>
</html>