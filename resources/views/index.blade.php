<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
        <head>
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <meta name="csrf-token" content="{{ csrf_token() }}">
                
                <title>Charter</title>

                <!--  Stylesheets  -->
                <link rel="stylesheet" href="{{ url(mix('css/app.css')) }}">

                <!--  Scripts  -->
                <script async src="{{ url(mix('js/app.js')) }}"></script>
        </head>

        <body>
                <div id="react-root"></div>
        </body>
</html>
