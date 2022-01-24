# Aplicación de Pruebas 📋

Esta aplicación contiene los test descritos en el segundo PFD
recuerda hacer `npm i` antes de cualquier cosa y para levantar
el servidor de pruebas utiliza `npm start` el servicio se levantará
en `localhost:8080`.

## Test 1: Aplicación de clima
Para esta aplicación hay que acceder al endpoint `/api/v1.0/weather`.
query params:
* lat: number.
* lon: number.

## Test 2: Último domingo
Para esta prueba hay que entrar a `/api/v1.0/dates/lastSundays`.
query params:
* fechaInicial: Date format mm/dd/yyyy.
* fechaFinal: Date format mm/dd/yyyy.

## Test 3: Años bisiestos
Para esta prueba hay que entrar al endpoin `/api/v1.0/dates/bisiestos`.
query params:
* inicio: number.
* final: number.

## Test 4: Matriz rotatoria.
PAra esta prueba hay que entrar al endpoint `/api/v1.0/math/matrix` .
query params:
* n: number > 0.
* rotate: list numbers separeted by commas. ex [4,5,-3].
* coord: list numbers separated ny commas. ex [0,0]

## Test 5: Contador de letras.
PAra esta prueba hay que entrar a `/api/v1.0/math/letters`.
query params:
* texto: string.

TODAS LAS PETICIONES SON DE TIPO GET.
author: Gerardo Guzmán 🐒

